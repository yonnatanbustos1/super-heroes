import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import heroeApi from "../../api/HeroesApi";
import { Loader } from "../components/Loader";

export const DcPage = () => {

    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        getHeroes()
    }, [])

    const getHeroes = async () => {

        try {
            const response = await heroeApi.get('/superheroes?tipo=heroes-dc');
            setHeroes(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    if (!heroes.length) {
        return (
            <div className="flex justify-center items-center mt-72">
                <Loader />
            </div>
        )
    }

    return (
        <>
            <h1 className="text-center font-bold text-6xl uppercase m-4">
                <span className="text-yellow-500">Top 20</span>
                <br />Mejores héroes de <span className="text-yellow-500">DC</span>
            </h1>
            <div className="grid sm:grid-cols-4 gap-4">
                {heroes.map((heroe) => (
                    <div key={heroe.id}
                        className="rounded-t-2xl shadow-2xl bg-gray-900 m-8">
                        <img
                            className="rounded-t-2xl w-full"
                            src={heroe.imagen} alt={heroe.nombre} />
                        <div className="px-6 py-6">
                            <div className="font-bold text-xl mb-2 ">
                                {heroe.nombre}
                            </div>
                            <p className="text-gray-500 text-base text-justify">
                                {heroe.descripcion.substring(0, 200).concat('...')}
                            </p>
                            <Link to={`/heroe/${heroe.id}`}>
                                <button className="w-full bg-blue-500 px-8 py-2 mt-8 mb-6 rounded-lg uppercase font-bold hover:bg-blue-700">
                                    Ver Perfil
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}