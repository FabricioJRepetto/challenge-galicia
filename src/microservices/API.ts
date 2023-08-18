import axios from "axios";
import { Account } from "../Types"
const VITE_API_URL = import.meta.env.VITE_API_URL

export const getAccounts = async (): Promise<Account[]> => {
    try {
        const { data } = await axios(VITE_API_URL);

        return data.cuentas as Account[];
    } catch (e) {
        console.log(e);
    }
    return [] as Account[];
}