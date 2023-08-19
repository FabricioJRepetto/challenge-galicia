import { useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Account, GlobalContextType } from '../../../Types';
import { GlobalContext } from '../../../context/globalContext';
import { accountType, formatCurrency } from '../../../utils/utils';

const AccountDetails = () => {
    const { id } = useParams()
    const { accList } = useContext(GlobalContext) as GlobalContextType;
    const navigate = useNavigate()

    const acc: Account | undefined = accList.find(acc => acc.n === id);

    return (
        <div className='MainContainer'>
            {acc
                ? <>
                    <h3>Consulta de saldo</h3>
                    <h1>Este es tu saldo actual</h1>

                    <div className='AccountDetails' data-testid="details-container">
                        <p>Saldo: <b>{acc.moneda} {formatCurrency(acc.saldo)}</b></p>
                        <p>Tipo de cuenta: <b>{accountType(acc.tipo_letras)}
                            {acc.moneda === '$'
                                ? ' en Pesos'
                                : ' en Dólares'}</b>
                        </p>
                        <p>Numero de cuenta: <b>{acc.n}</b></p>
                    </div>
                </>
                : <h1>Cuenta no encontrada</h1>
            }
            <button onClick={() => navigate(-1)}>volver</button>
        </div>
    )
}

export default AccountDetails