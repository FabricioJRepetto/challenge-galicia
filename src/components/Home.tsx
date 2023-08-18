import { useNavigate } from 'react-router-dom'
import { getAccounts } from '../microservices/API';
import { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import { GlobalContextType } from '../Types';

const Home = () => {
    const { saveList } = useContext(GlobalContext) as GlobalContextType;

    const navigate = useNavigate()

    const handler = async () => {
        navigate('/cuentas')
        const aux = await getAccounts()
        saveList(aux);
    }
    return (
        <div className='MainContainer'>
            <h1>Bienvenido</h1>
            <h2>Ingrese para realizar consultas</h2>
            <button onClick={handler}>Ingresar</button>
        </div>
    )
}

Home.propTypes = {}

export default Home