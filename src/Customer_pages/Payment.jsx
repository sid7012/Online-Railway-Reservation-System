import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Payment = () => {

    const navigate = useNavigate();

    // const trainDetails = state.trainData
    // console.log(trainDetails.dataofTrain.trainName)

    const [cardNumber, setCardNumber] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');

    const styles = {
        sam: {
            marginBottom: "10px"
        }
    }

    const makePayment = () => {
        if (cardNumber.length == 0)
            toast.warning("Please enter the card number..!!");
        else if (date.length == 0)
            toast.warning("Please enter the card date..!!");
        else if (cvv.length == 0)
            toast.warning("Please enter the card cvv..!!");
        else if (name.length == 0)
            toast.warning("Please enter the card name..!!");
        else {
            toast.success("Payment done ..!!");
            navigate("/");
        }
    }

    return (
        <div className="container" style={{ font: "50px", color: "black", fontFamily: "inherit" }} >
            <h1 style={{ color: "red" }}>Payement</h1>
            <br>
            </br>
            <div className="row" >
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div>
                            <label htmlFor="" className="label-control">Card number :</label>
                            <input
                                onChange={(e) => {
                                    setCardNumber(e.target.value)
                                }}
                                type="number"
                                className="form-control" />
                        </div>
                        <br>
                        </br>
                        <div>
                            <label htmlFor="" className="label-contor">Date(MM/yy) :</label>
                            <input
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                                type="text"
                                className="form-control" />
                        </div>
                        <br>
                        </br>
                        <div>
                            <label htmlFor="" className="label-contor">cvv :</label>
                            <input
                                onChange={(e) => {
                                    setCvv(e.target.value)
                                }}
                                type="number"
                                className="form-control" />
                        </div>
                        <br>
                        </br>
                        <div>
                            <label htmlFor="" className="label-contor">Name of card holder :</label>
                            <input
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                                type="text"
                                className="form-control" />
                        </div>
                        <br>
                        </br>
                        <div style={{marginBottom:"50px"}} className='row'>
                            <button
                                onClick={makePayment}
                                className="btn btn-success"
                                style={{ borderRadius: "7px", marginTop: "10px" }}>
                                Make Payment
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>

    )
}

export default Payment