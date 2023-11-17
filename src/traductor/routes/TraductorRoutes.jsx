import { Navigate, Route, Routes } from "react-router-dom"
import { TraductorPage, UsersPage } from "../pages/"

export const TraductorRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<TraductorPage/>}/>
        <Route path="users" element={<UsersPage/>}/>
    </Routes>
  )
}
