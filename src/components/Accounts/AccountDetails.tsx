import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from "react-router-dom";

const AccountDetails = props => {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <div className='MainContainer'>
            <h1>titulo {id}</h1>
            <p>numero cuenta</p>
            <p>tipo cuenta</p>
            <p>saldo</p>
            <button onClick={() => navigate(-1)}>volver</button>
        </div>
    )
}

AccountDetails.propTypes = {}

export default AccountDetails