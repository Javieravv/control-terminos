import { useState } from 'react'
import diasFestivos from '../data/diasfestivos.json'

let arrayYears = Object.keys(diasFestivos)

const DisplayFecha = ({fecha}) => {
    return (
        <div>
            {fecha}
        </div>
    )
}

const VerFechaInhabil = ( { ano } ) => {
    const [verFechasNoHabiles, setVerFechasNoHabiles] = useState(false)
    const [arrayDiasNoHabiles, setArrayDiasNoHabiles] = useState([])

    const handleFechasNoHabiles = () => {
        setVerFechasNoHabiles (!verFechasNoHabiles)
        // console.log ('EL ÍNDICE DEL ARREGLO ES: ', arrayYears.indexOf(ano))
        // console.log ('FECHAS DEL AÑO: ', Object.values(diasFestivos[ano]))
        
        if ( arrayDiasNoHabiles.length === 0) {
            setArrayDiasNoHabiles (Object.values(diasFestivos[ano]))
        }
    }

    return (
        <div className='div-fechanohabil'>
            <h2>
                Año {ano}
            </h2> 
            <p 
                className={!verFechasNoHabiles ? `menu` : `menu-rotate`}
                onClick={ handleFechasNoHabiles }
            ><i class="ti ti-chevron-down"></i></p>
            {
                (verFechasNoHabiles)
                ? (
                    <div className='article-fechas'>
                        {
                            arrayDiasNoHabiles[0].map ( item => {
                                return <DisplayFecha 
                                    key = {item}
                                    fecha = {item}
                                />
                            })
                        }
                    </div>
                )
                : ''
            }
        </div>
    )
}

export const FechasNoHabiles = () => {
    // console.log (arrayYears)
    // console.log (Object.values(diasFestivos[arrayYears[1]]))
    return (
        <section className="section-main">
            <div>
                {
                    arrayYears.map ( (item) => {
                        return <VerFechaInhabil 
                            key = {item}
                            ano = {item}
                        />
                    })
                }
            </div>
        </section>
    )
}
