import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Bhushan = (props) => {

    const navigate = useNavigate()
    return (
        <div>
            {props.sam.id}
            {props.sam.trainName}
            {props.sam.startCity}
            {props.sam.destCity}
            {props.sam.departureTime}
            {props.sam.reachTime}
            {props.sam.totalSeatCount}

            <button onClick={() => {
                navigate("/editTrain", { state: { id: props.sam.id, b: props.sam.trainName } })
            }} type="button" className="btn btn-success">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>

        </div>
    )
}

export default Bhushan