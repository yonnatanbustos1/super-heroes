import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { NavBar } from "../design/components/NavBar"
import { HeroesRoutes } from "../heroes"
import { DcPage } from "../heroes/pages/DcPage"
import { MarvelPage } from "../heroes/pages/MarvelPage"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRoutes />} />

            </Routes>
        </>
    )
}