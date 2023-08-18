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