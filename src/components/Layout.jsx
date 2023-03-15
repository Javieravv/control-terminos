// Layout para mostrar las rutas

import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { FooterTerminos } from "./FooterTerminos"

const estiloMenu = {
    visible: {
        right: "0px"
        // border: "yellow 2px solid"
    },
    inVisible: {
        right: "-250px"
        // border: "pink 3px solid"
    },
    margenIconoMenuVisible: {
        marginRight: "180px"
    },
    margenIconoMenuInVisible: {
        marginRight: "0px"
    }
}

export const Layout = () => {
    const [verMenu, setVerMenu] = useState(false)

    const handleClickMenu = () => {
        setVerMenu (!verMenu)
    }
    
    console.log (estiloMenu)

    return (
        <>
            <header >
                <div>
                    <nav>
                        <h1>Cálculo términos procesales</h1>
                        <ul 
                            className='menu-terminos' 
                            style={ verMenu ? estiloMenu.visible : estiloMenu.inVisible }
                        >
                            <li>
                                <Link 
                                    to="/"
                                    onClick = { () => setVerMenu (!verMenu) }>Calcular</Link>
                            </li>
                            <li>
                                <Link 
                                    to="/fechasnohabiles"
                                    onClick = { () => setVerMenu (!verMenu) }
                                >Fechas no hábiles</Link>
                            </li>
                        </ul>
                        <i 
                            className={!verMenu ? 'ti ti-menu-2 icono-menu mra-icono-menu' : 'ti ti-x icono-menu mri-icono-menu' }
                            onClick={handleClickMenu}
                        >
                        </i>
                    </nav>
                </div>
            </header>
            <Outlet />
            <FooterTerminos />
        </>
      )
}
