import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css'
import Redirect from './components/common/Redirect';
import Home from './components/common/Home';
import MainAccount from './components/common/Accounts/MainAccount';
import AccountDetails from './components/common/Accounts/AccountDetails';
import Layout from './components/common/Layout';
import logo from './assets/NCR_BIG.D.png'

function App() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <header>
                <img src={logo} className='logo' />
            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='cuentas' element={<Layout />}>
                    <Route index element={<MainAccount />} />
                    <Route path='/cuentas:id' element={<AccountDetails />} />
                </Route>

                <Route path='*' element={<Redirect />} />
            </Routes >

            <footer>
                {location.pathname !== "/" &&
                    <button onClick={() => navigate('/')}>salir</button>}
            </footer>
        </>
    )
}

export default App
