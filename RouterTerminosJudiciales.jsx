import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FechasNoHabiles } from "./src/components/FechasNoHabiles"
import { Layout } from "./src/components/Layout"
import { TerminosJudiciales } from "./src/components/TerminosJudiciales"

export const RouterTerminosJudiciales = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<TerminosJudiciales />}></Route>
                    <Route path="fechasnohabiles" element={<FechasNoHabiles />}></Route>
                    <Route path="*" element={<h1>Error 404!!</h1>} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
