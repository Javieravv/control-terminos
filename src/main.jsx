import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterTerminosJudiciales } from '../RouterTerminosJudiciales'
import { App } from './App'
import './css/estilos-terminos.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterTerminosJudiciales />
  </React.StrictMode>,
)
