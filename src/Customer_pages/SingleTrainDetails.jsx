import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SingleTrainDetails = () => {
    const { state } = useLocation()
    const trainData = state.data[0]
    console.log(state.data[0].id)

    const [arrayOfDates, setArrayOfDates] = useState([]);

    const trainId = trainData.id;
    const navigate = useNavigate();

    useEffect(() => {
        const url = `${URL}/trains/selectDate/${trainId}`
        axios.get(url).then(response => {
            const result = response.data
            console.log(result.data)
            console.log("date of travellings")
            if (result['status'] === 'success') {
                setArrayOfDates(result.data)
                console.log(arrayOfDates)
            } else
                toast.error(result['error'])
        })
    }, [])

    const dateOfTravelling = () => {
        const url = `${URL}/trains/selectDate/${trainId}`
        axios.post(url).then(response => {
            const result = response.data
            console.log(result.data)
            console.log("date of travellings")
            if (result['status'] === 'success') {
                setArrayOfDates(result.data)
            } else
                toast.error(result['error'])
        })
    }
    return (
        <div style={{marginTop:"20px"}} className='container'>
            <h1>Train Details</h1>
            <table style={{ border: "solid" }} className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Train Id</th>
                        <th scope="col">Train Name</th>
                        <th scope="col">Start City</th>
                        <th scope="col">Destination City</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Reach Time</th>
                        <th scope="col">AC Sleeper Fair</th>
                        <th scope="col">AC Seating Fair</th>
                        <th scope="col">non-AC Sleeper Fair</th>
                        <th scope="col">non-AC Seating Fair</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{trainData.id}</td>
                        <td>{trainData.trainName}</td>
                        <td>{trainData.startCity}</td>
                        <td>{trainData.destCity}</td>
                        <td>{trainData.departureTime}</td>
                        <td>{trainData.reachTime}</td>
                        <td>{trainData.acSleeperSeatPrice}</td>
                        <td>{trainData.acSeatingSeatPrice}</td>
                        <td>{trainData.nonAcSleeperSeatPrice}</td>
                        <td>{trainData.nonAcSeatingSeatPrice}</td>
                    </tr>
                </tbody>
            </table>
            <div className="label-control">Date of travelling</div>
            <label type="date" className="form-control">
                <select type="date" className="form-control" onChange={dateOfTravelling}>
                    {arrayOfDates.map((f) => (
                        <option value={f}>{f}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default SingleTrainDetails