import React, { FC, ReactNode, createContext, useContext, useReducer, useState } from 'react'
import { Account, GlobalContextType } from '../Types'
import { filterOriginalList } from './contextUtils';

export const GlobalContext = createContext<GlobalContextType | null>(null);

// const contextReducer = (state, action) => {
//     switch (action.type) {
//         case value:

//             break;

//         default:
//             break;
//     }
// }

const ContextProvider: FC<ReactNode> = ({ children }) => {
    const [accList, setAccList] = useState<Account[]>([])
    const [filteredAccList, setFilteredAccList] = useState<Account[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [loading, setLoading] = useState(true)

    // Guardar respuesta de la API
    const saveList = (data: Account[]) => {
        // filtrar datos que no nos interesan
        const aux = filterOriginalList(data)

        setAccList(() => aux)
    }

    const filter = () => {
        //: TODO logica de division de elementos

        // Determinar que elementos mostrar calculando los indices de inicio y final en base a la página actual y la cantidad total de elementos  
        const ELEMENTS_PER_PAGE = 4,
            end = currentPage * ELEMENTS_PER_PAGE,
            start = end - ELEMENTS_PER_PAGE - 1;

        // Crear lista con los nuevos elementos
        const newList = accList.slice(start, end)

        // Agregar primer elemento o botón de retroceso si estamos creando la primer página
        if (currentPage === 1) {
            newList.unshift(accList[0])
        } else {
            newList.unshift(accList[0])
        }

        setFilteredAccList(() => newList)
    }

    const changePage = (action: "prev" | "next") => {
        if (action === 'next') {
            setCurrentPage(p => p + 1)
        } else {
            setCurrentPage(p => p - 1)
        }
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

/*
    accList: Account[];
    filteredAccList: Account[];
    currentPage: number;
    loading: boolean;

    saveList: (data: Account[]) => void;
    filter: (data: Account[]) => void;
    changePage: () => void;
*/