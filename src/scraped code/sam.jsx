import React, { useState } from 'react'
import PassenegerComponent from '../components/PassenegerComponent'
import { useLocation } from 'react-router-dom'
import { URL } from '../config'

const AddPassenger = () => {
    const { state } = useLocation();
    console.log(state)
    console.log(state.dateOfTrav)

    const [arrayOfPassenger, setArrayOfPassenger] = useState([])

    // const [noOfPassenger, setNoOfPassenger] = useState(0)
    // const arr = []
    // console.log(arr.length)

    // const sandy = () => {
    //     for (let i = 1; i < arr.length; i++) {
    //         arr.push(i);
    //     }

    // }

    // console.log(`arr:${arr.length}`)
    // console.log(noOfPassenger)

    const addPassenger = () => {
        arrayOfPassenger.push()
    }


    return (
        <div className='container'>
            {/* <div className="row">
                <div className="col">
                    <div className="label-control">Enter number of passenger</div>
                    <input onChange={(e) => {
                        setNoOfPassenger(e.target.value)
                    }}
                        type="number" className="form-control" />

                    <button onClick={sandy}
                        className="btn-danger"
                        style={{ borderRadius: "7px", marginTop: "10px", width: "200px", height: "40px" }}>
                        Submit
                    </button>
                </div>
            </div>
            {arr.map((i) => {
                return <PassenegerComponent key={i} />;
            })} */}
            <PassenegerComponent />
            <PassenegerComponent />
            <PassenegerComponent />
            <PassenegerComponent />
            <PassenegerComponent />

            <button
                className="btn-danger"
                style={{ borderRadius: "7px", marginTop: "10px", width: "200px", height: "40px" }}>
                Submit
            </button>
        </div>
    )
}

export default AddPassenger
