import React from "react";
import { Link } from "react-router-dom";

const AdminCard = (props) => {
  const data =props.bhushan
  const newdata={...data}
  console.log(newdata.msg)
  console.log(newdata.link)
  return (
    <div>
      <div
        style={{
          color: "white",
          textAlign: "center",
          backgroundColor: "yellowgreen",
          borderRadius: "50px",
          marginBottom: "100px",
        }}
        className=" bg-success "
      >
        <div className="card-header ">Features</div>
        <div
          style={{ color: "white", borderRadius: "30px" }}
          className="card-body bg-dark "
        >
          <h5 className="card-title">{newdata.msg}</h5>
          
          <a
            style={{
              textAlign: "center",
              width: "300px",
              borderRadius: "50px",
            }}
            href={newdata.link}
            className="btn btn-danger"
          >
           Click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
