import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { URL } from '../config'
import { toast } from 'react-toastify'

const Train = (props) => {
    const styles = {
        table: {
            marginTop: '10px',
            border: 'solid'
        }
    }
    const navigate = useNavigate()

    const deleteTrain = () => {
        const id = props.sam.id;
        const url = `${URL}/trains/${id}`
        axios.delete(url).then((response) => {
            const result = response.data;
            console.log("inside delete train")
            if (result['status'] === 'success') {
                toast.success('Deleted successfully..!!')
                window.location.reload();
                navigate("/trainDetails")
            }
            else {
                toast.warning(result['error'])
            }
        });
    }


    return (
        <div>
            <table className="table " style={styles.table}>
                <thead >
                    <tr>

                        <th scope="col">id</th>
                        <th scope="col">Train Name</th>
                        <th scope="col">Start city</th>
                        <th scope="col">Dest city</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Reach Time</th>
                        <th scope="col">Total Seat Count</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                <tbody >
                    <tr>
                        <td >{props.sam.id}</td>
                        <td>{props.sam.trainName}</td>
                        <td>{props.sam.startCity}</td>
                        <td>{props.sam.destCity}</td>
                        <td>{props.sam.departureTime}</td>
                        <td>{props.sam.reachTime}</td>
                        <td>{props.sam.totalSeatCount}</td>

                        <td>
                            <button onClick={() => {
                                navigate("/editTrain", { state: { id: props.sam.id, b: props.sam.trainName } })
                            }} type="button" className="btn btn-success">Edit</button></td>
                        <td>
                            <button onClick={deleteTrain}
                                type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>



        </div>
    )
}

export default Train