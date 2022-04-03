import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Train = (props) => {

    const { state } = useLocation()
    const id = state.id
    useEffect(() => {
        const url = `${URL}/trains/${id}`
        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                toast.success('Train deleted successfully...!!')
                
            }
            else
                toast.error(result['error'])
        })
    }, []);

  return (
    <div>
      {props.sam.id}
      {props.sam.trainName}
      {props.sam.startCity}
      {props.sam.destCity}
      {props.sam.departureTime}
      {props.sam.reachTime}
      {props.sam.totalSeatCount}

      <button
        onClick={() => {
          navigate("/editTrain", {
            state: { id: props.sam.id, b: props.sam.trainName },
          });
        }}
        type="button"
        className="btn btn-success"
      >
        Edit
      </button>
      <button
        onClick={() => {
          navigate("/trainDetails", { state: { id: props.sam.id } });
        }}
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default Train;
