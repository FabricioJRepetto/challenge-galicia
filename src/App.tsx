import { Route, Routes } from 'react-router-dom';
import './App.css'
import Redirect from './components/Redirect';
import Home from './components/Home';
import MainAccount from './components/Accounts/MainAccount';
import AccountDetails from './components/Accounts/AccountDetails';
import Layout from './components/Layout';

function App() {

    return (
        <>
            <header>NCR</header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='cuentas' element={<Layout />}>
                    <Route index element={<MainAccount />} />
                    <Route path='/cuentas:id' element={<AccountDetails />} />
                </Route>

                <Route path='*' element={<Redirect />} />
            </Routes >

            <footer>salir</footer>
        </>
    )
}

export default App
