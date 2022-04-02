import { useState, useEffect } from 'react'
import axios from 'axios'
import { URL } from '../../src/config'
import Train from '../components/Train'

const TrainDetails = () => {

    const [trains, setTrains] = useState([])
    console.log(sessionStorage.id)
    console.log(sessionStorage.firstName)


    useEffect(
        () => {

            const url = `${URL}/trains/`
            console.log("Inside get all trains")
            axios.get(url).then((response) => {
                const result = response.data
                setTrains(result.data)
            })
        }, []);

    const styles = {
        table: {
            marginTop: '10px',
            border: 'solid'
        }
    }


    return (
        < div className="container" >
            <h2 style={{ textAlign: "center" }}>Train Details</h2>

            {trains.map((t) => {
                return (
                    <Train sam={t} />

                )
            })
            }



            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col">
                        <button type="button" className="btn btn-primary">Add Train</button>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>


        </div>

    );
}

export default TrainDetails