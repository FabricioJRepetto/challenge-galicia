import { useContext } from 'react'
import { Action, GlobalContextType } from '../../../Types'
import { GlobalContext } from '../../../context/globalContext'

const AccountButton = ({ action }: Action) => {
    const { changePage } = useContext(GlobalContext) as GlobalContextType;


    return (
        <div className='AccountCard' onClick={() => changePage(action)}>
            <p>{action === "prev"
                ? "<< resultados previos"
                : "más resultados >>"}</p>
        </div>
    )
}

export default AccountButton