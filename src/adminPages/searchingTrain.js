import { Link, Navigate } from 'react-router-dom';
import './searchingTrain.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router'
import { URL } from '../../src/config'

const SearchingTrain = () => {

    const [from, setFrom] = useState([]);
    const [to, setTo] = useState([]);

    const getStationFrom = () => {

        
        const url = `${URL}/trains/from`

        axios.get(url).then(response => {
            const result = response.data

            if (result['status'] === 'success') {
                setFrom(result['data'])

            }
        })
        
    }

    const getStationTo = () => {

        
        const url = "http://localhost:8080/trains/to{from}/"

        axios.get(url).then(response => {
            const result = response.data

            if (result['status'] === 'success') {
                setFrom(result['data'])

            }
        })
    }
    return(

        <div className="container">
            <div className="form">
              <div className="row">
                <div className="col">
                  <div className="label-control">startCity :</div>
                  <input onChange={(e)=>{
                      setFrom(e.target.value)
                  }} type="text" className="form-control" />
                  </div>
                <div className="col">
                <div className="label-control">destCity :</div>
                  <input  onChange={(e)=>{
                      setTo(e.target.value)

                  }} type="text" className="form-control" />
                </div>
              </div>

            </div>

        </div>
    )
}
    export default SearchingTrain