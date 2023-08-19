import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 1500);
        // eslint-disable-next-line
    }, [])

    return (
        <div className='MainContainer'>
            <h1>Página inexistente</h1>
        </div>
    )
}

export default Redirect