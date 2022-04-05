import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Payment = () => {
    const { state } = useLocation()
    const trainDetails = state.trainData
    console.log(trainDetails.dataofTrain.trainName)
   
    const styles = {
        sam: {
            marginBottom: "10px"
        }
    }
    console.log(state)
    return (
        <div><div className="container">
            <div className="row">
                <div className="col-lg-4 mb-lg-0 mb-3">

                </div>
                <div className="col-lg-4 mb-lg-0 mb-3">

                </div>
                <div className="col-lg-4 mb-lg-0 mb-3">

                </div>
                <div className="col-12 mt-4">
                    <div className="card p-3">
                        <p className="mb-0 fw-bold h4">Payment Methods</p>
                    </div>
                </div>
                <div className="col-12">

                    <div className="card p-3">
                        <div className="card-body border p-0">
                            <p> <a className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample"> <span className="fw-bold">Credit Card</span> <span className=""> <span className="fab fa-cc-amex"></span> <span className="fab fa-cc-mastercard"></span> <span className="fab fa-cc-discover"></span> </span> </a> </p>
                            <div className="collapse show p-3 pt-0" id="collapseExample">
                                <div className="row">
                                    <div className="col-lg-5 mb-lg-0 mb-3">
                                        <p className="h4 mb-0">Summary</p>
                                        <p className="mb-0"><span className="fw-bold">Name of train:</span><span style={{color:"red"}} className="c-green"> {trainDetails.dataofTrain.trainName}</span> </p>
                                        <p className="mb-0"> <span className="fw-bold">Price:</span> <span className="c-green">:$452.90</span> </p>
                                        <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nihil neque quisquam aut repellendus, dicta vero? Animi dicta cupiditate, facilis provident quibusdam ab quis, iste harum ipsum hic, nemo qui!</p>
                                    </div>
                                    <div className="col-lg-7">
                                        <form action="" className="form">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form__div">
                                                        <label className="form__label">Card Number</label>
                                                        <input style={styles.sam} type="text" className="form-control" placeholder=" " /> </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form__div">
                                                        <label className="form__label">MM / yy</label> <input style={styles.sam} type="text" className="form-control" placeholder=" " /> </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form__div">
                                                        <label className="form__label">cvv code</label>
                                                        <input style={styles.sam} type="password" className="form-control" placeholder=" " />  </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form__div">
                                                        <label className="form__label">name on the card</label>
                                                        <input style={styles.sam} type="text" className="form-control" placeholder=" " /> </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="btn btn-primary w-100">Make Payment</div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div></div>
    )
}

export default Payment