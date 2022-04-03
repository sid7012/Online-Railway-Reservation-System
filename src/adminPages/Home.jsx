import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='container' >Welcome...!!
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <Link to="/signin"><h1>Sign In</h1></Link>
                    <Link to="/signup"><h1>Sign Up</h1></Link>
                    <Link to="/addTrain"><h1>addTrain</h1></Link>
                    <Link to="/trainDetails"><h1>trainDetails</h1></Link>
                    <Link to="/forgetPassword"><h1>forgetPassword</h1></Link>
                    <Link to="/searchingTrain"><h1>searchingTrain</h1></Link>
                    
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Home