import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/')
        }, 1500);

        return () =>
            clearTimeout(timeout)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='MainContainer'>
            <h1>Página no existente</h1>
        </div>
    )
}

export default Redirect