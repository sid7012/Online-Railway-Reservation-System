import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { URL } from '../../src/config'

const AddTrain = () => {

  const [trainName, setTrainName] = useState('')
  const [startCity, setSourseCity] = useState('')
  const [destCity, setDestCity] = useState('')
  const [departureTime, setDepartureTime] = useState('')
  const [reachTime, setReachTime] = useState('')
  const [acSeatingSeatCount, setACSeatCountSitting] = useState('')
  const [acSleeperSeatCount, setACSeatCountSleeping] = useState('')
  const [nonAcSeatingSeatCount, setNonACSeatCountSitting] = useState('')
  const [nonAcSleeperSeatCount, setNonACSeatCountSleeping] = useState('')
  const [acSeatingSeatPrice, setACSeatPriceSitting] = useState('')
  const [acSleeperSeatPrice, setACSeatPriceSleeping] = useState('')
  const [nonAcSeatingSeatPrice, setNonACSeatPriceSitting] = useState('')
  const [nonAcSleeperSeatPrice, setNonACSeatPriceSleeping] = useState('')
  const [totalSeatCount, setTotalSeatCount] = useState('')

  const addTrain = () => {

    const body = {
      trainName,
      startCity,
      destCity,
      departureTime,
      reachTime,
      acSeatingSeatCount,
      acSleeperSeatCount,
      nonAcSeatingSeatCount,
      nonAcSleeperSeatCount,
      acSeatingSeatPrice,
      acSleeperSeatPrice,
      nonAcSeatingSeatPrice,
      nonAcSleeperSeatPrice,
      totalSeatCount

    }


    const url = `${URL}/trains/`

    axios.post(url, body).then((response) => {

      const result = response.data

      if (result['status'] == 'success')
        toast.success('Train added Successfully')
      else
        toast.error(result['error'])
    })
    console.log(body)
  }

  return (


    <div className="container">
      <h2> Add Train here </h2>
      <div className="form">
        <div className="row">
          <div className="col">
            <div className="label-control">Train Name :</div>
            <input onChange={(e) => {
              setTrainName(e.target.value)
            }} type="text" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">Source City :</div>
            <input onChange={(e) => {
              setSourseCity(e.target.value)

            }} type="text" className="form-control" />
          </div>
        </div>



        <div className="row">
          <div className="col">
            <div className="label-control">Destination City :</div>
            <input onChange={(e) => {
              setDestCity(e.target.value)
            }} type="text" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">Departure Time :</div>
            <input onChange={(e) => {
              setDepartureTime(e.target.value)
            }} type="time" className="form-control" pattern="[0-9]{2}" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="label-control">Reach Time :</div>
            <input onChange={(e) => {
              setReachTime(e.target.value)
            }} type="time" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">AC Seat Count(Sitting) :</div>
            <input onChange={(e) => {
              setACSeatCountSitting(e.target.value)
            }} type="number" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="label-control">AC Seat Count(Sleeping) :</div>
            <input onChange={(e) => {
              setACSeatCountSleeping(e.target.value)
            }} type="number" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">Non-AC Seat Count(Sitting) :</div>
            <input onChange={(e) => {
              setNonACSeatCountSitting(e.target.value)
            }} type="number" className="form-control" />
          </div>
        </div>


        <div className="row">
          <div className="col">
            <div className="label-control">Non-AC Seat Count(Sleeping) :</div>
            <input onChange={(e) => {
              setNonACSeatCountSleeping(e.target.value)
            }} type="number" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">AC Seat Price(Sitting) :</div>
            <input onChange={(e) => {
              setACSeatPriceSitting(e.target.value)
            }} type="number" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="label-control">AC Seat Price(Sleeping) :</div>
            <input onChange={(e) => {
              setACSeatPriceSleeping(e.target.value)
            }} type="number" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">Non-AC Seat Price(Sitting) :</div>
            <input onChange={(e) => {
              setNonACSeatPriceSitting(e.target.value)
            }} type="number" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="label-control">Non-AC Seat Price(Sleeping) :</div>
            <input onChange={(e) => {
              setNonACSeatPriceSleeping(e.target.value)
            }} type="number" className="form-control" />
          </div>
          <div className="col">
            <div className="label-control">Total Seat Count :</div>
            <input onChange={(e) => {
              setTotalSeatCount(e.target.value)
            }} type="number" className="form-control" />
          </div>
        </div>
        <div>
          <button onClick={addTrain} className="btn-secondary" >Add Train</button>

          <button className="btn-danger">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddTrain