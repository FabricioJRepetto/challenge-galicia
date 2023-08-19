import { useContext } from 'react'
import { GlobalContextType } from "../../Types";
import { GlobalContext } from "../../context/globalContext";
import { arrLength12 } from './assets';


export const TestingComponent = () => {
    const {
        accList,
        saveList,
        logout
    } = useContext(GlobalContext) as GlobalContextType;

    return (
        <>
            <div data-testid='cards-container'>{
                accList.map((e, i) => <p key={i}>{e.n}</p>)
            }
            </div>
            <button data-testid='load-cards' onClick={() => saveList(arrLength12)}></button>
            <button data-testid='logout' onClick={logout}></button>

        </>
    );
};