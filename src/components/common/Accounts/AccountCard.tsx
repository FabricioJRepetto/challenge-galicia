import { useNavigate } from 'react-router-dom'
import { Account } from '../../../Types'
import { accountType } from '../../../utils/utils'

const AccountCard = ({ n, tipo_letras }: Account) => {
    const navigate = useNavigate()

    return (
        <div className='AccountCard' onClick={() => navigate(`/cuentas/${n}`)}>
            <p>{accountType(tipo_letras)}</p>
            <p>Num. {n}</p>
        </div>
    )
}

export default AccountCard