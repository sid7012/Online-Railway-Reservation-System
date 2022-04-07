import React from "react";
import Card from "../components/Card";

const UserFunctionality = () => {
  const searchingTrain = {
    link: "/searchingTrain",
    msg: "Book Train",
  };

  const forgetPassword = {
    link: "/forgetPassword",
    msg: "Change Password",
  };

  const listOfTrains = {
    link: "/list",
    msg: "List Of Trains",
  };

  const listOfPassenger = {
    link: "/passList",
    msg: "List Of Passenger",
  };

  const listOfTickets = {
    link: "/cancelTicket",
    msg: "List Of Booked Ticket",
  };

  return (

    <div style={{ marginTop: "20px", marginBottom: "150px" }} className="container">
      <h1
        style={{
          color: "grey",
          textAlign: "center",
          fontFamily: "cursive",
          marginBottom: "20px",
        }}
      >
        Welcome {sessionStorage.firstName}
      </h1>
      <div className="row">
        <div className="col">
          <Card bhushan={searchingTrain} />
        </div>
        <div className="col">
          <Card bhushan={forgetPassword} />
        </div>
        <div className="col">
          <Card bhushan={listOfTrains} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card bhushan={listOfPassenger} />
        </div>
        <div className="col">
          <Card bhushan={listOfTickets} />
        </div>
      </div>
    </div>

  );
};

export default UserFunctionality;
