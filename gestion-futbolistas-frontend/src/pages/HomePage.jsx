import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/futbolista/${id}`)
    }

    const [futbolistas, setFutbolistas] = useState([]);
    const [page, setPage] = useState(0); 
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetch(`http://127.0.0.1:8080/api/v1/futbolistas?page=${page}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setFutbolistas(data.content);
                setTotalPages(data.totalPages);
            })
            .catch((error) => {
                console.error('Error con la api:', error);
            });
    }, [page]);

    const handleNextPage = () => {
        if (page < totalPages - 1) {
            setPage(page + 1)
        }
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };


    return (
        <div className="bg-fuchsia-300 h-lvh p-12">
            <div className="mx-auto bg-white shadow-md rounded-md overflow-hidden"> 
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-fuchsia-600">
                            <th className="px-4 py-2 text-center">Id</th>
                            <th className="px-4 py-2 text-center">Nombres</th>
                            <th className="px-4 py-2 text-center">Apellidos</th>
                            <th className="px-4 py-2 text-center">Fecha de Nacimiento</th>
                            <th className="px-4 py-2 text-center">Características</th>
                            <th className="px-4 py-2 text-center">Posición</th>
                            <th className="px-4 py-2 text-center">Detalles</th>
                        </tr>
                    </thead>

                    <tbody>

                        {futbolistas.map((futbolista) => (
                        
                        <tr className="bg-white" key={futbolista.id}> 

                            <td className="px-4 py-2 text-center">{futbolista.id}</td>
                            <td className="px-4 py-2 text-center">{futbolista.nombres}</td>
                            <td className="px-4 py-2 text-center">{futbolista.apellidos}</td>
                            <td className="px-4 py-2 text-center">{futbolista.fechaNacimiento}</td>
                            <td className="px-4 py-2 text-center">{futbolista.caracteristicas}</td>
                            <td className="px-4 py-2 text-center">{futbolista.posicion.nombre}</td>
                            <td className="px-4 py-2 text-center">
                                <button onClick={() => handleClick(futbolista.id)} className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded">Ver más</button>
                            </td>
                            
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
                <div className="flex justify-between p-4">
                    <button onClick={handlePreviousPage} disabled={page === 0} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Anterior</button>
                    <button onClick={handleNextPage} disabled={page === totalPages - 1} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Siguiente</button>
                </div>
                
            </div>
        </div>
        
    )
}
