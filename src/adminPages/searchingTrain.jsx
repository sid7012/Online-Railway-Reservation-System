
import './searchingTrain.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { URL } from '../config'
import { useNavigate } from 'react-router-dom';


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
        const url = `${URL}/trains/to/${startCity}`
        axios.get(url).then(response => {
            const result = response.data
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
    return (

        <div className="container">
            <div className="form">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <div className="label-control">startCity :</div>
                        <label type="text" className="form-control">
                            <select type="text" className="form-control" value={startCity} onChange={handleChange}>
                                {from.map((f) => (
                                    <option value={f}>{f}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="col">

                        <button onClick={getfrom}
                            className="btn-primary"
                            style={{ borderRadius: "7px", marginTop: "35px", width: "100%" }}>get
                        </button>

                    </div>
                    <div className="col">
                        <div className="label-control">destCity :</div>
                        <label type="text" className="form-control">
                            <select type="text" className="form-control" value={destCity} onChange={sam}>
                                {to.map((f) => (
                                    <option value={f}>{f}</option>
                                ))}
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
                        style={{ borderRadius: "7px", marginTop: "35px", width: "100%", height: "40px" }}>
                        Search
                    </button>
                </div>
                <div className="col"></div>
            </div>


        </div>
    )
}
export default SearchingTrain