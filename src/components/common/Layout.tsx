import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <section className='Layout'>
            <Outlet />
        </section>
    )
}

export default Layout