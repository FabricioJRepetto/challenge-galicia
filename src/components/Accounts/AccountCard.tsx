import React from 'react'
import PropTypes from 'prop-types'
import { Account } from '../../Types'

const AccountCard = ({ e, moneda, n, saldo, t, tipo_letras }: Account) => {
    return (
        <div className='AccountCard'>
            <p>Cuenta {/^c{2}$/i.test(tipo_letras) ? 'Corriente' : 'de Ahorro'}</p>
            <p>Número {n}</p>
            {/* <p>saldo {saldo} {moneda}</p> */}
        </div>
    )
}

// AccountCard.propTypes = {
//     e: PropTypes.string,
//     moneda: PropTypes.string,
//     n: PropTypes.string,
//     saldo: PropTypes.string,
//     t: PropTypes.string,
//     tipo_letras: PropTypes.string
// }

export default AccountCard