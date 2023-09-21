import React from 'react'
import Card from '../components/Card'

const AdminFunctinality = () => {

    const admin = {
        link: "/addAdmin",
        msg: "For Register New Admin"
    }

    const addTrain = {
        link: "/addTrain",
        msg: "for Add New Train"
    }

    const searchingTrain = {
        link: "/searchingTrain",
        msg: "Search Train"
    }

    const forgetPassword = {
        link: "/forgetPassword",
        msg: "Change Password"
    }
    const trainDetails = {
        link: "/trainDetails",
        msg: "View All Trains"
    }
    const trainDetails1 = {
        link: "/trainDetails",
        msg: "Edit Train"
    }
    const trainDetails2 = {
        link: "/trainDetails",
        msg: "Delete Train"
    }
    const trainDetails3 = {
        link: "/trainDetails",
        msg: "Schedule Train"
    }

    const listOfPassenger = {
        link: "/passList",
        msg: "List Of Passenger",
    };

    const listOfTickets = {
        link: "/cancelTicket",
        msg: "List Of Booked Ticket",
    };

    return (
        <div style={{ marginTop: "20px" }} className="container">
            <h1 style={{ color: "grey", textAlign: "center", fontFamily: "cursive", marginBottom: "20px" }}>Welcome {sessionStorage.firstName}</h1>
            <div className="row">
                <div className="col"><Card siddhant={admin} /></div>
                <div className="col"><Card siddhant={addTrain} /></div>
                <div className="col"><Card siddhant={trainDetails} /></div>
            </div>
            <div className="row">
                <div className="col"><Card siddhant={searchingTrain} /></div>
                <div className="col"><Card siddhant={forgetPassword} /></div>
                <div className="col"><Card siddhant={trainDetails3} /></div>
            </div>
            <div className="row">
                <div className="col"><Card siddhant={trainDetails1} /></div>
                <div className="col"><Card siddhant={trainDetails2} /></div>
                <div className="col"><Card siddhant={listOfPassenger} /></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col"><Card siddhant={listOfTickets} /></div>
                <div className="col"></div>
            </div>

        </div>
    )
}

export default AdminFunctinality