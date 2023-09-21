import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../config'
import { useNavigate } from 'react-router-dom';

//useEffect hook to fetch the list of starting cities
// The useEffect hook is used to perform side effects in functional components. It takes two arguments: a callback function and a dependency array.
// In this case, an empty dependency array [] indicates that the effect should only run once, immediately after the component is mounted.
// The callback function inside useEffect contains the code that will be executed when the component mounts.
const SearchingTrain = () => {

    const [from, setFrom] = useState([]);
    const [startCity, setStartCity] = useState('');
    const [to, setTo] = useState([]);
    const [destCity, setDestCity] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        const url = `${URL}/trains/from`
        axios.get(url).then(response => {
            const result = response.data
            console.log(result.data)
            if (result['status'] === 'success') {
                setFrom(result['data'])
            }
        })
    }, [])

    const getfrom = () => {
        //Constructs a URL for the API endpoint to fetch data about the destination cities based on the selected start city.
        const url = `${URL}/trains/to/${startCity}`
        axios.get(url).then(response => {
            //Sends a GET request to the specified URL using the axios library. The .then() method is used to handle the response when it's received.
            const result = response.data
            //const result = response.data;: Extracts the response data from the response object.
            console.log(result.data)
            console.log("sam")
            if (result['status'] === 'success') {
                setTo(result['data'])
            } else
                toast.error(result['error'])
        })
    }

    const handleChange = (event) => {
        setStartCity(event.target.value)

    };
    console.log(startCity)


    const sam = (event) => {
        setDestCity(event.target.value)
    };

    console.log(destCity)

    const search = () => {
        const body = {
            startCity,
            destCity
        }
        if (destCity !== '') {
            const url = `${URL}/trains/listOfTrains`
            axios.post(url, body).then(response => {
                const result = response.data
                console.log(result.data)
                console.log("list of trains called")
                if (result['status'] === 'success') {
                    navigate("/singleTrainDetails", { state: { data: result.data } })
                    setTo(result['data'])
                } else
                    toast.error(result['error'])
            })
        }
        else
            toast.warning("Please select the dest city..!!")
    }
    
    return (

        <div style={{ marginTop: "50px" }} className="container">
            <div className="form">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div style={{ fontSize: "30px" }} className="label-control">Start City :</div>
                        <label type="text" className="form-control">
                            <select type="text" className="form-control" value={startCity} onChange={handleChange}>
                                <option style={{ textAlign: "center" }}>--Select Start City--</option>
                                {from.map((f) => (
                                    <option value={f}>{f}</option>
                                ))}
                                 {/* When the user selects a different option, the handleChange function will be called. */}
                            </select>
                        </label>
                    </div>
                    <div className="col">
                        <button onClick={getfrom}
                            className="btn-primary"
                            style={{ borderRadius: "30px", marginTop: "50px", width: "100%", height: "40px" }}>get
                        </button>

                    </div>
                    <div className="col">
                        <div style={{ fontSize: "30px" }} className="label-control">Destination City :</div>
                        <label type="text" className="form-control">
                            <select type="text" className="form-control" value={destCity} onChange={sam}>
                                <option style={{ textAlign: "center" }}>--Select Dest City--</option>
                                {to.map((f) => (
                                    <option value={f}>{f}</option>
                                ))}
                                 {/* When the user selects a different option, the sam function will be called. */}
                            </select>
                        </label>
                    </div>
                    
                    <div className="col"></div>

                </div>

            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <button onClick={search}
                        className="btn-danger"
                        style={{ borderRadius: "30px", height: "40px", marginTop: "50px", width: "100%", height: "40px", marginBottom: "250px" }}>
                        Search
                    </button>
                </div>
                <div className="col"></div>
            </div>


        </div>
    )
}
export default SearchingTrain