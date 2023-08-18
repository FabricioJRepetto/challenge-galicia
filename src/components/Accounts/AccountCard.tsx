import { Account } from '../../Types'

const AccountCard = ({ moneda, n, tipo_letras }: Account) => {
    return (
        <div className='AccountCard'>
            <p>Cuenta {/^c{2}$/i.test(tipo_letras) ? 'Corriente' : 'de Ahorro'}</p>
            <p>Número {n}</p>
            <p>Moneda {moneda}</p>
        </div>
    )
}

export default AccountCard