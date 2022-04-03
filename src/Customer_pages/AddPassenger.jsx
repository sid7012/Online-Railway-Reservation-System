import React, { useEffect, useState } from 'react'
import PassenegerComponent from '../components/PassenegerComponent'
import { useLocation, useNavigate } from 'react-router-dom'
import { URL } from '../config'
import { toast } from 'react-toastify'
import AddedPassengerTable from './AddedPassengerTable'

const AddPassenger = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    // console.log(state)
    // console.log(state.dateOfTrav)


    const [arrayOfPassenger, setArrayOfPassenger] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [seatClassName, setSeatClassName] = useState('');
    const [innerType, setInnerType] = useState('');


    const addPassenger = () => {
        if (firstName === '')
            toast.error("FirstName cannot be empty")
        else if (lastName === '')
            toast.error("LastName cannot be empty")
        else {
            const obj = { firstName, lastName, age, gender, seatClassName, innerType }
            arrayOfPassenger.push(obj)
            if (arrayOfPassenger.length != 0)
                toast.success("Passenger added..!!")
            console.log(obj)
            console.log(arrayOfPassenger)
            navigate("/addPassenger")
        }
    }


    return (
        <div className="container-">
            <div className="form">
                <div className="row">
                    <div className="col">
                        <div className="label-control">FirstName :</div>
                        <input onChange={(e) => {
                            setFirstName(e.target.value)
                        }} type="text" className="form-control" />
                    </div>

                    <div className="col">
                        <div className="label-control">LastName :</div>
                        <input onChange={(e) => {
                            setLastName(e.target.value)
                        }} type="text" className="form-control" />
                    </div>

                    <div className="col">
                        <div className="label-control">Age :</div>
                        <input onChange={(e) => {
                            setAge(e.target.value)
                        }} type="text" className="form-control" />
                    </div>

                    <div className="col">
                        <div className="label-control">Gender :</div>
                        <label type="date" className="form-control">
                            <select type="date" className="form-control" onChange={(e) => {
                                setGender(e.target.value)
                            }} >
                                <option style={{ textAlign: "center" }}>--Select --</option>
                                <option style={{ textAlign: "center" }}>Male</option>
                                <option style={{ textAlign: "center" }}>Female</option>
                            </select>
                        </label>
                    </div>

                    <div className="col">
                        <div className="label-control">Ac/Non-Ac :</div>
                        <label type="date" className="form-control">
                            <select type="date" className="form-control" onChange={(e) => {
                                setSeatClassName(e.target.value)
                            }} >
                                <option style={{ textAlign: "center" }}>--Select --</option>
                                <option style={{ textAlign: "center" }}>AC</option>
                                <option style={{ textAlign: "center" }}>NON-AC</option>
                            </select>
                        </label>
                    </div>

                    <div className="col">
                        <div className="label-control">seating/sleeping :</div>
                        <label type="date" className="form-control">
                            <select type="date" className="form-control" onChange={(e) => {
                                setInnerType(e.target.value)
                            }} >
                                <option style={{ textAlign: "center" }}>--Select --</option>
                                <option style={{ textAlign: "center" }}>Seating</option>
                                <option style={{ textAlign: "center" }}>Sleeper</option>
                            </select>
                        </label>
                    </div>
                    <div className="col">
                        <button onClick={addPassenger}
                            className="btn-success"
                            style={{ borderRadius: "7px", marginTop: "25px", width: "200px", height: "40px" }}>
                            Add Passenger
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <button
                            className="btn-primary"
                            style={{ borderRadius: "7px", marginTop: "25px", width: "500px", height: "40px" }}>
                            Book Ticket
                        </button>
                    </div>
                    <div className="col"></div>
                </div>
            </div>

            <div className="row">
                {(arrayOfPassenger.length != 0) ? arrayOfPassenger.map((s) => {
                    return <AddedPassengerTable sam={s} />
                }) : "No data"}
            </div>
        </div>
    )
}


export default AddPassenger
