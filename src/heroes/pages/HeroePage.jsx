import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import heroeApi from "../../api/HeroesApi";

export const HeroePage = () => {

    const navigate = useNavigate();

    const backNavigation = () => {
        navigate(-1)
    }

    const { heroeId } = useParams();

    const [heroe, setHeroe] = useState([])

    useEffect(() => {
        getHeroe()
    })

    const getHeroe = async () => {
        try {
            const response = await heroeApi.get(`/superheroes/${heroeId}`)
            setHeroe(response.data);
        } catch (error) {

        }
    }

    return (
        <>
            <div key={heroe.id}
                className="w-1/1 sm:w-1/2 grid sm:grid-cols-2 rounded-2xl shadow-2xl bg-gray-900 m-8 animate__animated animate__fadeInLeft">
                <img
                    className="w-fulll h-full rounded-l-2xl"
                    src={heroe.imagen} alt={heroe.nombre} />
                <div className="px-6 py-4">
                    <div className="text-xl mb-2 ">
                        <span className="font-bold text-yellow-500"></span>
                        Nombre:{' '}{heroe.nombre}
                    </div>
                    <div className="text-xl mb-2 ">
                        <span className="font-bold text-yellow-500"></span>
                        Editorial:{' '}{heroe.editorial}
                    </div>
                    <div className="text-xl mb-2 ">
                        <span className="font-bold text-yellow-500"></span>
                        Estreno:{' '}{heroe.estreno}
                    </div>
                    <span className="text-xl font-bold text-yellow-500">Descripción:</span>
                    <p className="text-gray-400 text-base text-justify mt-4 mb-4">
                        {heroe.descripcion}
                    </p>
                    <span className="text-xl font-bold text-yellow-500">Poderes:</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 ml-4">
                        {heroe.poderes}
                    </span>
                    <button className="w-full bg-indigo-500 px-8 py-2 mt-8 mb-6 rounded-lg uppercase font-bold hover:bg-indigo-700"
                        onClick={backNavigation}>
                        Regresar
                    </button>
                </div>
            </div>
        </>
    )
}