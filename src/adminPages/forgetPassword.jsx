import { useState } from 'react'
import './forgetPassword.css'
import { toast } from 'react-toastify'
import React, { Component } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../config'


const ForgetPassword = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const navigate = useNavigate()

  const cancelReset = () => {
    navigate('/signin')
  }

  const resetPassword = () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    }

    else if (password.length == 0) {
      toast.warning("Please enter password");
    }
    else if (confirmPassword.length == 0) {
      toast.warning("Please confirm your password");
    }
    else if (password != confirmPassword) {
      toast.warning("Password does not match");
    }
    else {
      const body = {
        email,
        password
      }

      // url to make signin api call
      const url = `${URL}/users/forgetPassword`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Password updated')

          // navigate to login 
          navigate('/signin')
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }



  return (
    <div className='background-img example'>
      <h1 className="title">Forgot Password</h1>

      <div className="row ">
        <div className="col"></div>

        <div className="col border1">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control margin">
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="email"
                className="form-control"
              />
            </div>



            <div className="mb-3">
              <label htmlFor="" className="label-control">
                New Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Confirm Password
              </label>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">

              <div className='row'>
                <div className='col'>
                  <button onClick={resetPassword} className="btn-primary" style={{ borderRadius: "7px" }}>
                    Reset Password
                  </button>
                </div>
                <div className='col'></div>
                <div className='col'>
                  <button onClick={cancelReset} className="btn-danger">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>

      </div>
    </div>
  )

}

export default ForgetPassword