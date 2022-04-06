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

  return (
    
      <div style={{ marginTop: "20px" ,marginBottom:"150px"}} className="container">
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
            <Card />
          </div>
        </div>
      </div>
    
  );
};

export default UserFunctionality;
