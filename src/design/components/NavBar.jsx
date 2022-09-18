import { Logo } from "./Logo"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();

    const logOut = () => {
        navigate("/login", {
            replace: true
        })
    }

    return (
        <nav className="bg-gray-900">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-20">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to={"/"}>
                                <Logo />
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6 mt-2">
                            <div className="flex space-x-4">
                                <NavLink className={({ isActive }) =>
                                    `text-white block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-yellow-500" : ""}`
                                }
                                    to="/inicio">
                                    Inicio
                                </NavLink>
                                <NavLink className={({ isActive }) =>
                                    `bg-gray-700 text-white block px-3 py-2 rounded-sm text-base font-medium ${isActive ? "text-yellow-500" : ""}`}
                                    to="/marvel">
                                    MARVEL
                                </NavLink>
                                <NavLink className={({ isActive }) =>
                                    `bg-gray-700 text-white block px-3 py-2 rounded-sm text-base font-medium ${isActive ? "text-yellow-500" : ""}`}
                                    to="/dc">
                                    DC
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static">
                        <button className="bg-red-600 py-2 px-6 rounded-lg font-bold text-white"
                            onClick={logOut}>
                            Salir
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}