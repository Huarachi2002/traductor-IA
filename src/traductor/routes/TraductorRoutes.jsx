import { Navigate, Route, Routes } from "react-router-dom"
import { TraductorPage } from "../pages/"

export const TraductorRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<TraductorPage/>}/>
        <Route path="/*" element={<Navigate to={'/'}/>}/>
    </Routes>
  )
}
