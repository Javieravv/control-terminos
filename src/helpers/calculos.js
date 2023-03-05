/**Funciones para calcular asuntos varios */

import dayjs from "dayjs"

/**Adicionamos a la fecha inicial el valor que corresponde a dias hábiles, días calendario, 
 * meses o años.
 */
export const adicionarFecha = ( fechainicial, numerodias, tipodias, clasetermino, arregloDiasFestivos ) => {
    switch (clasetermino) {
        case '1':
            switch (tipodias) {
                case '2':
                    // días calendario
                    return dayjs(fechainicial).add(numerodias - 1, 'day').format('YYYY/MM/DD')
                default:
                    // Días hábiles únicamente.
                    let fechaFormateada = dayjs(fechainicial).format('D-MMM-YY')
                    let fechaFinal = fechainicial
                    if (numerodias === 1) return dayjs(fechainicial).add(0, 'day').format('YYYY/MM/DD')
                    let ind = 0;
                    while (ind < numerodias) {
                        if (!diaHabil(fechainicial)) {  // es sábado o domingo
                            // console.log ('ES SÁBADO O DOMINGO', fechainicial)
                            fechainicial = dayjs(fechainicial).add(1, 'day')
                        } else {
                            // Vemos si es festivo
                            fechaFormateada = dayjs(fechainicial).format('D-MMM-YY')
                            if (arregloDiasFestivos.indexOf(fechaFormateada) === -1) { // no es festivo
                                // fechaFinal = dayjs(fechainicial).add(1, 'day')
                                fechaFinal = fechainicial
                                fechainicial = dayjs(fechainicial).add(1, 'day')
                                ind++
                            } else {
                                fechainicial = dayjs(fechainicial).add(1, 'day')
                            }
                        }
                    }
                    return dayjs(fechaFinal).format('YYYY/MM/DD')
            }
        case '2': // MESES
            return dayjs(fechainicial).add(numerodias, 'month').format('YYYY/MM/DD')
        case '3': // AÑOS
            console.log ('Término en años')
            return dayjs(fechainicial).add(numerodias, 'year').format('YYYY/MM/DD')
        default:
            return fechainicial;
    }
}

/**Es inhábil el día si es sábado, domino o día entre semana que es feriado.
 * Estos días están en un arreglo.
 */
export const esDiaFestivo = ( fecha, diasFestivos ) => {

}

/**Si es un día de fin de semana o festivo devolverá true. Caso contrario devolverá false */

export const diaHabil = (fecha) => {
    if ((dayjs(fecha).day() === 0) || (dayjs(fecha).day() === 6)) {
        // Es fin de semana: sábado o domingo.
        return false
    } else return true
}