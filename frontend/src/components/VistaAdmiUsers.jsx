import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export const VistaAdmiUsers = () => {
    const [select, setSelect] = useState()
    const [back, setback] = useState()

    const  handleChange = (e) =>{
        setSelect(e.target.value)
        console.log(select);
    }

    const getFromBack = async () => {
        try {
            const response = await axios({
                url: 'http://localhost:4000/products',
                method: 'GET'
            })
            setback(response)
            console.log(back);
            return response
            
        } catch (error) {
            console.log(error);
        }
    }
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
                            <td>Proyectos</td>
                            <td>
                                <Link className="btn btn-outline-warning" to='/usersList' onClick={getFromBack}>Actualizar</Link>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
