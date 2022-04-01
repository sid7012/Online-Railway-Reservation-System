import './Signup.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { URL } from '../../src/config'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')



    const signupUser = () => {
        if (firstName.length === 0) {
            toast.warning('Please enter Fisrt Name')
        } else if (lastName.length === 0) {
            toast.warning('Please enter Last Name')
        } else if (email.length === 0) {
            toast.warning('Please enter valid Email ID')
        } else if (password.length === 0) {
            toast.warning('Please enter password')
        } else if (mobile.length === 0) {
            toast.warning('Please enter a valid Mobile Number')
        } else if (gender.length === 0) {
            toast.warning('gender should be defined')
        } else if (age.length === 0) {
            toast.warning('Age should be defined')
        } else if (address.length === 0) {
            toast.warning('Please enter a valid Address')
        } else {
            const body = {
                email,
                password,
                firstName,
                lastName,
                age,
                gender,
                mobile,
                address,
                role: 'user'
            }

            console.log(body)


            const url = `${URL}/users/`

            axios.post(url, body).then((response) => {

                const result = response.data

                if (result['status'] === 'success')
                    toast.success('You are signed up successfully')
                else {
                    toast.warning(result['error'])
                }
            })
        }
    }


    return (
        <div className="container">
            <h1> Sign Up Here </h1>
            <div className="row">
                <div className="col">
                    <div classname="form">
                        <label htmlFor="" className="label-control">First name :</label>
                        <input onChange={(e) => {
                            setFirstName(e.target.value)
                        }} type="text" className="form-control" />
                    </div>
                </div>
                <div className="col">
                    <label htmlFor="" className="label-control">Last name :</label>
                    <input onChange={(e) => {
                        setlastName(e.target.value)
                    }} type="text" className="form-control" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div classname="form">
                        <label htmlFor="" className="label-control">Email Id :</label>
                        <input onChange={(e) => {

                            setEmail(e.target.value)
                        }} type="email" className="form-control" />
                    </div>
                </div>
                <div className="col">
                    <label htmlFor="" className="label-control">Password :</label>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} type="password" className="form-control" />
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <div classname="form">
                        <label htmlFor="" className="label-control">Age :</label>
                        <input onChange={(e) => {
                            setAge(e.target.value)
                        }} type="number" className="form-control" />
                    </div>
                </div>
                <div className="col">
                    <label htmlFor="" className="label-control">Mobile :</label>
                    <input onChange={(e) => {
                        setMobile(e.target.value)
                    }} type="mobile" className="form-control" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div classname="form">
                        <label htmlFor="" className="label-control">Gender :</label>
                        <input onChange={(e) => {
                            setGender(e.target.value)
                        }} type="text" className="form-control" />
                    </div>
                </div>
                <div className="col">
                    <label htmlFor="" className="label-control">Address :</label>
                    <input onChange={(e) => {
                        setAddress(e.target.value)
                    }} type="text" className="form-control" />
                </div>
            </div>


            <div className="mb-3">
                <div> Already have an account? <Link to="/signin"> Signin here</Link>
                </div>
                <button onClick={signupUser} className="btn-secondary">Submit</button>
                <button onClick={signupUser} className="btn-danger">Reset</button>

            </div>
        </div>





    );
}

export default Signup