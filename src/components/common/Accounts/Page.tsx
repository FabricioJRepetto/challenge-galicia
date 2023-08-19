import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../context/globalContext';
import { GlobalContextType } from '../../../Types';
import AccountCard from './AccountCard';
import AccountButton from '../buttons/AccountButton';

const Page = () => {
    const { accList, filter, filteredAccList, currentPage } = useContext(GlobalContext) as GlobalContextType;

    useEffect(() => {
        // Seleccionar las cuentas a mostrar
        filter()
        // eslint-disable-next-line
    }, [currentPage])


    return (
        <div data-testid="account-container" className='AccountCardsContainer'>
            {/* Si estamos en la primer página, no mostrar botón "regresar" */}
            {currentPage !== 1 && <AccountButton action={"prev"} />}

            {filteredAccList?.map((acc, i) =>
                <AccountCard data-testid="account-card" {...acc} key={i} />)}

            {/* Si la cantidad de cuentas en la siguiente página es mayor a 1, mostrar botón "siguiente" */}
            {(accList.length - (currentPage * 4) - 1) > 1 &&
                <AccountButton action={"next"} />}
        </div>
    )
}

export default Page