import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const Ticket = () => {

  const navigate = useNavigate()
  const { state } = useLocation();
  console.log(state)
  console.log(state.passList)
  const array = [...state.passList]
  console.log("sam:", array)
  console.log(array[0].firstName)

  console.log(state.trainData)
  const backToHome = () => {
    if (sessionStorage.loginStatus == 1)
      navigate("/adminfunctinality")
    if (sessionStorage.loginStatus == 2)
      navigate("/userfunctinality")
  }
  return (
    <div >
      <h1 className='continer' style={{ color: "red", marginTop: "20px" }}>Ticket Details</h1>
      <div className="row" >
        <div className="col"></div>
        <div style={{ fontFamily: "initial", border: "solid", borderRadius: "50px", marginTop: "10px", }} className="col">
          <div style={{ margin: "20px" }}>
            <h3>Train Name: {state.trainData.dataofTrain.trainName}</h3>
            <h3>Start City: {state.trainData.dataofTrain.startCity}</h3>
            <h3>Start City: {state.trainData.dataofTrain.destCity}</h3>
            <h3>Date of Travelling: {state.trainData.dateOfTrav}</h3>
            <h3>Boarding Time: {state.trainData.dataofTrain.departureTime}</h3>
            <h3>Reach Time: {state.trainData.dataofTrain.reachTime}</h3>
            <h3>Fare: {state.ticketObj.ticketAmount}</h3>
            <h3>Ticket No.: {state.ticketObj.id}</h3>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className='container' style={{ marginBottom: "50px", marginTop: "50px", width: "1200px", textAlign: "center", borderRadius: "50px", border: "solid", borderBlockWidth: "2px", borderBlockColor: "red" }}  >
        <h1>Passenger Details</h1>
        <table class="table table-hover">
          <thead className='table-dark'>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Seat Class Name</th>
              <th scope="col">Type of seat</th>
            </tr>
          </thead>
          <tbody>

            {
              array.map((a) => {
                return <tr>
                  <td>{a.firstName}</td>
                  <td>{a.lastName}</td>
                  <td>{a.gender}</td>
                  <td>{a.age}</td>
                  <td>{a.seatClassName}</td>
                  <td>{a.innerType}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
      <div style={{ marginBottom: "45px", textAlign: "center" }} className='row'>
        <div className="col"></div>
        <div className="col">
          <button
            onClick={backToHome}
            className="btn btn-primary"
            style={{ borderRadius: "7px", marginTop: "10px", width: "300px", }}>
            Back to Home
          </button>
        </div>
        <div className="col"></div>
      </div>
    </div>

  )
}

export default Ticket
