import React from 'react'
import { FooterTerminos } from './components/FooterTerminos'
import { HeaderTerminos } from './components/HeaderTerminos'
import { TerminosJudiciales } from './components/TerminosJudiciales'

export const App = () => {
  return (
    <div
      className='container-main'
    >
      <HeaderTerminos />
      <TerminosJudiciales />
      <FooterTerminos />
    </div>
  )
}
