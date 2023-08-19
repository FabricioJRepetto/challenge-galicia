export const accountType = (arg: string): string => {
    return /^c{2}$/i.test(arg) ? 'Cuenta Corriente' : 'Caja de Ahorro'
}

export const formatCurrency = (arg: string): string => {
    let newString = arg.toString().replaceAll(/[.\D]/g, '')

    // Si termina con dos decimales (.20)
    if (/(\.\d{2})$/g.test(arg)) {
        newString = newString.slice(0, -2)
    }

    if (newString.length > 3) {
        newString = newString.slice(0, -3) + '.' + newString.slice(-3)
    } if (newString.length > 7) {
        newString = newString.slice(0, -7) + '.' + newString.slice(-7)
    }

    if (arg[0] === "-") {
        newString = "-" + newString
    }

    if (/(\.\d{2})$/g.test(arg)) {
        let decimal = arg.split(".")[1]
        if (parseInt(decimal) < 10) decimal += 0
        newString = newString + "," + decimal
    }

    return newString;
}