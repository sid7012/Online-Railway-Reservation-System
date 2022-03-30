
import { useState, useEffect } from 'react'
import axios from 'axios'

const TrainDetails = () => {

    const [trains, setTrains] = useState([])
    console.log(sessionStorage.id)
    console.log(sessionStorage.firstName)
    useEffect(
        () => {

            const URL = "http://localhost:8080/trains/"
            console.log("Inside get all trains")
            axios.get(URL).then((response) => {
                const result = response.data
                setTrains(result.data)
            })
        }, []);


    return (
        < div className="container" >
            <table class="table table-danger" style={{ marginTop: '10px' }}>
                <thead >
                    <tr>

                        <th scope="col">id</th>
                        <th scope="col">Train Name</th>
                        <th scope="col">Start city</th>
                        <th scope="col">Dest city</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Reach Time</th>
                        <th scope="col">Total Seat Count</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map((t) => {
                        return (
                            <tr>
                                <td>{t.id}</td>
                                <td>{t.trainName}</td>
                                <td>{t.startCity}</td>
                                <td>{t.destCity}</td>
                                <td>{t.departureTime}</td>
                                <td>{t.reachTime}</td>
                                <td>{t.totalSeatCount}</td>
                            </tr>
                        )
                    })
                    }

                </tbody>
            </table>

        </div>

    );
}

export default TrainDetails