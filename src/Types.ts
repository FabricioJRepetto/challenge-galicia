export interface Account {
    e: string,
    moneda: string,
    n: string,
    saldo: string,
    t: string,
    tipo_letras: string
}

export type GlobalContextType = {
    accList: Account[];
    filteredAccList: Account[];
    currentPage: number;
    loading: boolean;
    logged: boolean;

    saveList: (data: Account[]) => void;
    filter: () => void;
    changePage: (action: "prev" | "next") => void;
    login: () => void;
    logout: () => void;
}

export interface Action {
    action: "prev" | "next"
}