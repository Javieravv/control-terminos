// Layout para mostrar las rutas

import { Link, Outlet } from "react-router-dom"
import { FooterTerminos } from "./FooterTerminos"

export const Layout = () => {
    return (
        <>
            <header>
                <div>
                    <nav>
                    <h1>Cálculo términos procesales</h1>
                    <ul className='menu-terminos'>
                        <li>
                            <Link to="/">Calcular</Link>
                        </li>
                        <li>
                            <Link to="/fechasnohabiles">Fechas no hábiles</Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
            <FooterTerminos />
        </>
      )
}
