import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const FutbolistaPage = () => {
    const { id } = useParams();

    const [futbolista, setFutbolista] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/api/v1/futbolista/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setFutbolista(data);
            });
    }, []);

    return (
        
        <div className="flex justify-center bg-fuchsia-200 items-center h-screen">
            <div className="w-[500px]  bg-fuchsia-500 shadow-md rounded-lg overflow-hidden m-4">
                <div className="px-6 py-4">
                    <div className="font-bold text-center	text-white text-xl mb-2">{futbolista.nombres} {futbolista.apellidos}</div>
                    <div className="w-full flex">
                        <div className="w-1/2">
                             <p className="text-white text-base text-center	 border-b border-r pb-2">Fecha de Nacimiento:</p>

                        </div>
                        <div className="w-1/2">
                           <p className="text-white text-base text-center	  border-b border-r pb-2"> {futbolista.fechaNacimiento}</p>

                        </div>
                    </div>
                    <div className="w-full flex">
                        <div className="w-1/2">
                            <p className="text-white text-base text-center	 border-b border-r pb-2">Caracteristicas:</p>

                        </div>
                        <div className="w-1/2">
                           <p className="text-white text-base text-center	border-b border-r pb-2"> {futbolista.caracteristicas}</p>

                        </div>
                    </div>
                    <div className="w-full flex">
                        <div className="w-1/2">
                            <p className="text-white text-base text-center	border-b border-r pb-2">Posición:</p>

                        </div>
                        <div className="w-1/2">
                            <p className="text-white text-base text-center	border-b border-r pb-2"> {futbolista.posicion?.nombre}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
