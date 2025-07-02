import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { DcPage, MarvelPage } from "../heroes/pages"
import { Navbar } from "../ui/components"

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="/" element={<Navigate to={'/marvel'} />} />
            </Routes>
        </>
    )
}
