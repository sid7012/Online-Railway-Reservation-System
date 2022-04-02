import React from 'react'
import { useLocation } from 'react-router-dom'

const EditTrain = () => {

    const { state } = useLocation()
    console.log(useLocation())
    console.log(state)
    console.log(state.id)
    return (

        <div>EditTrain</div>
    )
}

export default EditTrain