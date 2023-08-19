import { fireEvent, render, screen } from '@testing-library/react';
import { it, expect } from 'vitest'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './context/globalContext.tsx';
import { elementSelector, filterOriginalList } from './utils/contextUtils.tsx';
import { arr1, arr2, arrLength8 } from './test/assets/assets.ts';
import { formatCurrency } from './utils/utils.tsx';
import { access } from 'node:fs/promises'
import { readFileSync } from 'node:fs';
import { TestingComponent } from './test/assets/TestingComponent.tsx';


it("filterOriginalList filtra los elementos correctamente para ser guardados en el estado global", () => {
    const res1 = filterOriginalList(arr1);
    const res2 = filterOriginalList(arr2);

    expect(res1.length).toBe(0)
    expect(res2.length).toBe(2)
})

describe("elementSelector selecciona los elementos a mostrar correctamente", () => {
    it("no retorna elementos si la página es incorrecta o un número negativo", () => {
        const res1 = elementSelector(3, arrLength8);
        expect(res1.length).toBe(0)
        const res2 = elementSelector(-3, arrLength8);
        expect(res2.length).toBe(0)
    })
    it("retorna elementos correctamente", () => {
        // Para un arreglo de 8 elementos:
        // 5 elementos en la primer página (+1 botón "siguiente")
        const res1 = elementSelector(1, arrLength8);
        expect(res1.length).toBe(5)
        // 3 elementos en la segunda (+1 botón "regresar")
        const res2 = elementSelector(2, arrLength8);
        expect(res2.length).toBe(3)
    })
})

describe("elementSelector selecciona los elementos a mostrar correctamente", () => {
    it("no retorna elementos si la página es incorrecta o un número negativo", () => {
        const res1 = elementSelector(3, arrLength8);
        expect(res1.length).toBe(0)
        const res2 = elementSelector(-3, arrLength8);
        expect(res2.length).toBe(0)
    })
    it("retorna elementos correctamente", () => {
        // Para un arreglo de 8 elementos:
        // 5 elementos en la primer página (+1 botón "siguiente")
        const res1 = elementSelector(1, arrLength8);
        expect(res1.length).toBe(5)
        // 3 elementos en la segunda (+1 botón "regresar")
        const res2 = elementSelector(2, arrLength8);
        expect(res2.length).toBe(3)
    })
})

it("formatCurrency devuelve cadenas de caracteres correctamente formateadas", () => {
    const str1 = formatCurrency("15000")
    expect(str1).toBe("15.000")

    const str2 = formatCurrency("-15000")
    expect(str2).toBe("-15.000")

    const str3 = formatCurrency("15000000.35")
    expect(str3).toBe("15.000.000,35")
})

describe("Variables de entorno", () => {

    it("Existe un archivo de variables de entorno", async () => {
        const exists = async (path: string) => {
            try {
                await access(path)
                return true
            } catch {
                return false
            }
        }
        const flag = await exists("./.env")
        expect(flag).toBe(true);
    })
    it("contiene la variable VITE_API_URL", async () => {
        const read = (path: string) => {
            try {
                const data = readFileSync(path)
                return data
            } catch {
                return ""
            }
        }
        const aux = read("./.env")
        expect(aux.toString().split("=")[0]).toBe("VITE_API_URL")

    })
})

describe("Tests de renderizado", async () => {
    beforeEach(async () => {
        render(<BrowserRouter>
            <ContextProvider>
                <App />
            </ContextProvider>
        </BrowserRouter>)
    })

    it(`Renderiza boton "ingresar"`, () => {
        const button = screen.getByTestId('welcome-btn')
        expect(button).toBeInTheDocument()
    })

    test(`Renderiza contenedor de cuentas`, async () => {
        await screen.findByTestId('welcome-btn')

        fireEvent.click(screen.getByTestId('welcome-btn'))

        const container = await screen.findByTestId('account-container')
        expect(container).toBeInTheDocument()

        expect(container.childElementCount).toBe(6)

        const next = await screen.findByTestId('next-btn')
        fireEvent.click(next)

        const page2 = await screen.findByTestId('account-container')
        expect(page2.childElementCount).toBe(4)
    })

    it(`Hay 6 elementos en la primer página`, async () => {
        await screen.findByTestId('welcome-btn')

        fireEvent.click(screen.getByTestId('welcome-btn'))

        const container = await screen.findByTestId('account-container')
        expect(container.childElementCount).toBe(6)
    })

    it(`Hay 4 elementos en la segunda página`, async () => {
        await screen.findByTestId('welcome-btn')

        fireEvent.click(screen.getByTestId('welcome-btn'))

        const next = await screen.findByTestId('next-btn')
        fireEvent.click(next)

        const page2 = await screen.findByTestId('account-container')
        expect(page2.childElementCount).toBe(4)
    })
})

describe("Estado global", () => {
    beforeEach(async () => {
        render(
            <ContextProvider>
                <TestingComponent />
            </ContextProvider>
        )
    })

    it(`saveList guarda elementos correctamente`, async () => {
        const button = screen.getByTestId('load-cards')
        fireEvent.click(button)

        const container = await screen.findByTestId('cards-container')
        expect(container.childElementCount).toBe(12)
    })

    it(`logout (botón salir) vacía el estado global`, async () => {
        const button = screen.getByTestId('load-cards')
        fireEvent.click(button)

        const clear = screen.getByTestId('logout')
        fireEvent.click(clear)

        const container = await screen.findByTestId('cards-container')
        expect(container.childElementCount).toBe(0)
    })
})