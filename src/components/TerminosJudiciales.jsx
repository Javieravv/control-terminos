import { useState } from "react"
import dayjs from "dayjs"
import { adicionarFecha, diaHabil } from "../helpers/calculos"
import diasFestivos from '../data/diasfestivos.json'
import localeData from 'dayjs/plugin/localeData.js'
import 'dayjs/locale/es.js'

dayjs.locale("es")
let arrayDiasFestivos = []
let arrayDias = Object.values(diasFestivos)
arrayDias.forEach(item => {
    arrayDiasFestivos = [...arrayDiasFestivos, ...Object.values (item.diasfestivos)]
});

/**Componente para pedir la información para calcular los términos.
 * Habrán términos calculados en dias calendario y dias hábiles.
 * Tener en cuenta los días que son fines de semana y festivos.
 * Los días festivos estarán en un arreglo.
 */
export const TerminosJudiciales = () => {
    const [dataTerminos, setDataTerminos] = useState ({
        fechainicio: dayjs().format('YYYY/MM/DD'),
        numerodias: 3,
        tipodia: '0',  // 1 = hábil 2 = calendario
        tipotermino: '1', // 1 = días, 2 = meses, 3 = años
        fechacumplimiento: null,
        arregloDiasFestivos: arrayDiasFestivos
    })
    const { fechainicio, numerodias, tipodia, tipotermino, fechacumplimiento, arregloDiasFestivos } = dataTerminos
    
    const handleChange = (e) => {
        setDataTerminos ({
            ...dataTerminos,
            [e.target.name] : e.target.value
        })
    }
    
    const handleCalculate = () => {
        /**Adicionamos un valor a la fecha de inicio. Pueden ser días, meses o años. */
        let fechaFinal = adicionarFecha (fechainicio, numerodias, tipodia, tipotermino, arregloDiasFestivos)
        setDataTerminos ({
            ...dataTerminos,
            fechacumplimiento: fechaFinal
        })
    }

    return (
        <section
            className="section-main"
        >
            <div
                className="div-options"
            >
                <article>
                    <label htmlFor="fechainicio">Fecha inicial:</label>
                    <input 
                        type="date" 
                        name="fechainicio"
                        id="fehainicio" 
                        value = {fechainicio}
                        onChange={handleChange}
                    />
                </article>
                <article>
                    <label htmlFor="numerodias">Número:</label>
                    <input 
                        type="number"
                        name="numerodias"
                        id="numerodias" 
                        value={numerodias}
                        onChange={handleChange}
                    />
                </article>
                <article
                    className="clase-terminos"
                >
                    <div>
                        <label htmlFor="tipodia">Término dado en:</label>
                        <select 
                            name="tipotermino" 
                            id="tipotermino"
                            value={tipotermino}
                            onChange={handleChange}
                        >
                            <option value="1">Días</option>
                            <option value="2">Meses</option>
                            <option value="3">Años</option>
                        </select>
                    </div>
                    {
                        (tipotermino === '1')
                        ? (
                                <div>
                                    <label htmlFor="tipodia">Clase de término:</label>
                                    <select 
                                        name="tipodia" 
                                        id="tipodia"
                                        value={tipodia}
                                        onChange={handleChange}
                                    >
                                        <option value="1">Días hábiles</option>
                                        <option value="2">Días calendario</option>
                                    </select>
                                </div>
                           )
                        : ''
                    }
                </article>
            </div>
            <div
                className="div-boton"
            >
                <button
                    onClick={handleCalculate}
                    disabled={!diaHabil(fechainicio)}
                >Calcular</button>
            </div>
            <div
                className="div-fechafinal"
            >
                <p>
                    Fecha de cumplimiento: <b>{ dayjs(fechacumplimiento).format('DD MMM YYYY') }</b>
                </p>
            </div>
        </section>
    )
}
