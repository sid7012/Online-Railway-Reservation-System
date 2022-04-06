
import React from 'react'
import { Link } from 'react-router-dom'
const Bharti = () => {

    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div style={{ color: "white", textAlign: "center", backgroundColor: "yellowgreen", borderRadius: "50px", marginBottom: "100px" }} classname=" bg-success ">
                        <div class="card-header ">
                            Featured
                        </div>
                        <div style={{ color: "white", borderRadius: "30px" }} class="card-body bg-dark ">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link style={{ textAlign: "center", width: "300px", borderRadius: "50px" }} to="/searchingTrain" class="btn btn-danger">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Bharti
