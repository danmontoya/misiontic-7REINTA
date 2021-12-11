import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export const VistaAdmiUsers = () => {
    const url = 'http://localhost:4000'
    const [select, setSelect] = useState()
    

    const  handleChange = (e) =>{
        setSelect(e.target.value)
        console.log(select);
    }

    const handleGet = () => {
        axios.get(`${url}/users/getUsers`)
            .then(function (response) {
                // handle success
                console.log(response.data);
                console.log(response.config);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        handleGet()
    }, [])
    return (
        <div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Proyectos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">007</th>
                            <td>James Bond</td>
                            <td>espia@mail.com</td>
                            <td>
                            <select className="form-select" aria-label="Que rol vas a desempeñar en los proyectos"
                            value={select}
                            onChange={handleChange}>
                                            <option defaultValue>Pendiente</option>
                                            <option value="Estudiante">Estudiante</option>
                                            <option value="Lider">Lider</option>
                                            <option value="Administrador">Administrador</option>

                                        </select>
                            </td>
                            <td>
                            <select className="form-select"
                            value={select}
                            onChange={handleChange}>
                                            <option defaultValue>Pendiente</option>
                                            <option value="Autorizado">Autorizado</option>
                                            <option value="No Autorizado">No Autorizado</option>
                                        </select>

                            </td>
                            <td>
                                <Link className="btn btn-outline-warning" to='/usersList' onClick={handleChange}>Actualizar</Link>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
