import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'


const Redirect = props => {
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/')
        }, 0);

        return () =>
            clearTimeout(timeout)
    }, [navigate])

    return (
        <></>
    )
}

Redirect.propTypes = {}

export default Redirect