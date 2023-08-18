export const renderPrevButton = (page: number) => {
    return page === 1 ? false : true
}

export const renderNextButton = (page: number, total: number): number => {
    // Si la cantidad de cuentas en la siguiente página es mayor a 1, mostrar botón "siguiente"
    // Si es igual a 1, mostrar el ultimo elemento
    // Sino, no mostrar nada
    const accsOnNextPage = total - (page * 4) + 1

    return accsOnNextPage;
}