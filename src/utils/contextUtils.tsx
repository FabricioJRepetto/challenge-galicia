import { Account } from "../Types"

// filtrar datos que no nos interesan por medio de expresiones regulares
export const filterOriginalList = (data: Account[]) => {
    return data.filter(acc => filterLogic(acc))
}

const filterLogic = (acc: Account) => {
    // monedas aceptadas "$" o "u$S"
    const currency = /^(\$|(u\$s))$/.test(acc.moneda);
    // numero de cuenta de 12 cifras
    const accNumber = /^\d{12}$/.test(acc.n)
    // tipo de cuenta "CC" o "CA"
    const accType = /^(c{2}|(ca))$/i.test(acc.tipo_letras)

    return (currency && accNumber && accType)
}

export const elementSelector = (currentPage: number, accList: Account[]): Account[] => {
    // Determinar que elementos mostrar calculando los indices de inicio y final en base a la página actual y la cantidad total de elementos  
    const end = currentPage * 4,
        start = end - 3;

    // Crear lista con los nuevos elementos
    const newList = accList.slice(start, end + 1)

    // Agregar primer elemento si estamos creando la primer página
    if (currentPage === 1) {
        newList.unshift(accList[0])
    }
    // Agregar ultimo elemento si solo queda uno por mostrar
    if (accList.length - (currentPage * 4) - 1 === 1) {
        newList.push(accList[accList.length - 1])
    }

    return newList;
}