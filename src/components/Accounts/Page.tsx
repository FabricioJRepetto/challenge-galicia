import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/globalContext';
import { GlobalContextType } from '../../Types';
import AccountCard from './AccountCard';
import AccountButton from '../common/buttons/AccountButton';
import { renderNextButton, renderPrevButton } from './utils/utils';

const Page = () => {
    const { accList, filter, filteredAccList, currentPage } = useContext(GlobalContext) as GlobalContextType;
    const [next, setNext] = useState<number | null>(null)

    useEffect(() => {
        // Seleccionar las cuentas a mostrar
        filter()
        // calcular el número de cuentas en la siguiente página
        setNext(() => renderNextButton(currentPage, accList.length))
    }, [currentPage])


    return (
        <div className='AccountCardsContainer'>
            {renderPrevButton(currentPage) && <AccountButton action={"prev"} />}
            {filteredAccList?.map((acc, i) =>
                <AccountCard {...acc} key={i} />)}
            {next && next > 1
                ? <AccountButton action={"next"} />
                : next === 1
                    ? <AccountCard {...accList[accList.length - 1]} />
                    : <></>
            }
        </div>
    )
}

export default Page