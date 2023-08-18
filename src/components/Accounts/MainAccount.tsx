import { useContext } from 'react'
import { GlobalContextType } from '../../Types';
import { GlobalContext } from '../../context/globalContext';
import Page from './Page';

const MainAccount = () => {
    const { loading } = useContext(GlobalContext) as GlobalContextType;

    return (
        <div className='MainContainer AccountContainer'>
            {loading
                ? <>
                    <h1>loading</h1>
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