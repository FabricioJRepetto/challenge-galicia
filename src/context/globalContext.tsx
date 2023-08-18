import { FC, createContext, ReactNode, useState } from 'react'
import { Account, GlobalContextType } from '../Types'
import { filterOriginalList } from './contextUtils';

interface Props {
    children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

const ContextProvider: FC<Props> = ({ children }) => {
    const [accList, setAccList] = useState<Account[]>([])
    const [filteredAccList, setFilteredAccList] = useState<Account[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [loading, setLoading] = useState(true)

    // Guardar respuesta de la API
    const saveList = (data: Account[]) => {
        // filtrar datos que no nos interesan
        const aux = filterOriginalList(data)

        setAccList(() => aux)
        setLoading(false)
    }

    const filter = () => {
        //: TODO logica de division de elementos

        // Determinar que elementos mostrar calculando los indices de inicio y final en base a la página actual y la cantidad total de elementos  
        const end = currentPage * 4,
            start = end - 3;

        console.log(accList);

        // Crear lista con los nuevos elementos
        const newList = accList.slice(start, end + 1)

        // Agregar primer elemento si estamos creando la primer página
        if (currentPage === 1) {
            newList.unshift(accList[0])
        }
        //: TODO
        // else {
        //     newList.unshift(<AccountButton action={"prev"} />)
        // }

        // Agregar último elemento si hay espacio
        //: TODO

        console.log(`newList: start ${start} / end: ${end}`);
        console.log(newList);

        setFilteredAccList(() => newList)
        setLoading(false)
    }

    const changePage = (action: "prev" | "next") => {
        const newPage = action === "prev" ? currentPage - 1 : currentPage + 1;
        setCurrentPage(() => newPage)

        filter();
    }

    return (
        <GlobalContext.Provider value={{
            accList, saveList,
            filteredAccList, filter,
            currentPage, changePage,
            loading
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default ContextProvider;

/*
    accList: Account[];
    filteredAccList: Account[];
    currentPage: number;
    loading: boolean;

    saveList: (data: Account[]) => void;
    filter: (data: Account[]) => void;
    changePage: () => void;
*/
