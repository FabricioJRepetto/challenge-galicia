import { useContext, useEffect } from 'react'
import { GlobalContextType } from '../../../Types';
import { GlobalContext } from '../../../context/globalContext';
import Page from './Page';
import { useNavigate } from 'react-router-dom';

const MainAccount = () => {
    const { loading, logged } = useContext(GlobalContext) as GlobalContextType;

    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            !logged && navigate('/')
        }, 1000);

        return () =>
            clearTimeout(timeout)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='MainContainer AccountContainer'>
            {loading
                ? <>
                    <h1>cargando...</h1>
                </>
                : <>
                    <h3>Consulta de saldo</h3>
                    <h1>Selecciona la cuenta a consultar</h1>

                    <Page />
                </>}
        </div>
    )
}

export default MainAccount