import { FC, createContext, ReactNode, useState } from 'react'
import { Account, GlobalContextType } from '../Types'
import { elementSelector, filterOriginalList } from '../utils/contextUtils';

interface Props {
    children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

const ContextProvider: FC<Props> = ({ children }) => {
    const [accList, setAccList] = useState<Account[]>([])
    const [filteredAccList, setFilteredAccList] = useState<Account[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [loading, setLoading] = useState(true)
    const [logged, setLogged] = useState(false)

    // Guardar respuesta de la API
    const saveList = (data: Account[]) => {
        // filtrar datos que no nos interesan
        const aux = filterOriginalList(data)
        setAccList(() => aux)

        setLoading(false)
    }

    const filter = () => {
        // Seleccionar elementos a mostrar en la página actual
        const newList = elementSelector(currentPage, accList)

        setFilteredAccList(() => newList)
    }

    // Cambiar página
    const changePage = (action: "prev" | "next") => {
        const newPage = action === "prev" ? currentPage - 1 : currentPage + 1;
        setCurrentPage(() => newPage)

        filter();
    }

    // Parámetro utilizado para redirigir en ciertos casos
    const login = () => {
        setLogged(() => true)
    }

    // Vaciar Estado global
    const logout = () => {
        setAccList(() => [])
        setFilteredAccList(() => [])
        setCurrentPage(() => 1)
        setLoading(true)
        setLogged(false)
    }

    return (
        <GlobalContext.Provider value={{
            accList, saveList,
            filteredAccList, filter,
            currentPage, changePage,
            loading, logged, logout, login
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default ContextProvider;