import React, { useEffect, useState } from 'react'
import { getAccounts } from '../../microservices/API';
import { Account } from '../../Types';
import AccountCard from './AccountCard';

const MainAccount = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [list, setlist] = useState<Account[]>();

    useEffect(() => {
        (async () => {
            const res = await getAccounts();
            setlist(() => res);

            setLoading(false);
        })();
    }, [])


    return (
        <div className='MainContainer AccountContainer'>
            {loading
                ? <>
                    <h1>loading</h1>
                </>
                : <>
                    <h3>Consulta de saldo</h3>
                    <h1>Selecciona la cuenta a consultar</h1>

                    <div className='AccountCardsContainer'>{
                        list?.map(acc => <AccountCard {...acc} />)
                    }</div>
                </>}
        </div>
    )
}

export default MainAccount