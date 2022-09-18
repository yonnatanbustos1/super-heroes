import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate();

    const logIn = () => {
        navigate("/inicio")
    }

    return (
        <div className="flex h-screen justify-center items-center">
            <button className="bg-blue-600 py-2 px-6 rounded-lg font-bold text-white"
                onClick={logIn}>
                Ingresar 😊
            </button>
        </div>
    )

}