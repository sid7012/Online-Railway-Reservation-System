
import { useState, useEffect } from 'react'
import axios from 'axios'
import { URL } from '../../src/config'
import { Link} from 'react-router-dom'
import EditTrain from './EditTrain'
import Bhushan from './Bhushan'

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
            <table className="table " style={styles.table}>
                <thead >
                    <tr>

                        <th scope="col">id</th>
                        <th scope="col">Train Name</th>
                        <th scope="col">Start city</th>
                        <th scope="col">Dest city</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Reach Time</th>
                        <th scope="col">Total Seat Count</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map((t) => {
                        return (
                        <Bhushan sam={t}/>
                        
                        )
                    })
                    }

                </tbody>
            </table>
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