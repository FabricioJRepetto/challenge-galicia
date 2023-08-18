import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Home = props => {
    const navigate = useNavigate()

    return (
        <div className='MainContainer'>
            <h1>Bienvenido</h1>
            <h2>Ingrese para realizar consultas</h2>
            <button onClick={() => navigate('/cuentas')}>Ingresar</button>
        </div>
    )
}

Home.propTypes = {}

export default Home