import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { URL } from '../config'

const SingleTrainDetails = () => {
    const { state } = useLocation()
    const trainData = state.data[0]
    console.log(state.data[0].id)

    const [arrayOfDates, setArrayOfDates] = useState([]);
    const [dateSelected, setDateSelected] = useState('')
    const trainId = trainData.id;
    console.log(trainId)
    const navigate = useNavigate();

    useEffect(() => {

        const url = `${URL}/trains/selectDate/${trainId}`
        axios.get(url).then(response => {
            const result = response.data
            console.log(result.data)
            console.log("date of travellings")
            setArrayOfDates(result.data)
            if (result['status'] === 'success') {
                setArrayOfDates(result.data)
                console.log("sam")
                console.log(result.data)
            } else {
                toast.error(result['error'])
                console.log("error")
            }
        })
    }, [])


    const handleChange = (event) => {
        setDateSelected(event.target.value)

    };
    console.log(dateSelected)

    const bookTicket = () => {
        navigate("/addPassenger", { state: { dataofTrain: trainData, dateOfTrav: dateSelected } })
    }

    return (
        <div style={{ marginTop: "20px" }} className='container'>
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
            <div className="label-control">Available Date of travelling</div>
            <label type="date" className="form-control">
                <select type="date" className="form-control" onChange={handleChange}>
                    <option style={{ textAlign: "center" }}>--Select Date of Travelling--</option>
                    {arrayOfDates.map((f) => (
                        <option value={f}>{f}</option>
                    ))}
                </select>
            </label>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <button onClick={bookTicket}
                        className="btn-primary"
                        style={{ borderRadius: "7px", marginTop: "50px", width: "100%", height: "40px" }}>
                        Book
                    </button>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}

export default SingleTrainDetails