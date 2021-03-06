import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export const RegistrarUser = () => {

    const [email, setEmail] = useState();
    const [psswd, setPsswd] = useState();
    const [identificacion, setIdentificacion] = useState();
    const [username, setUsername] = useState();
    const [select, setSelect] = useState();
    axios.defaults.headers.post['Content-Type'] = 'application/json';


    const handleChange = (e) => {
        setSelect(e.target.value)
        console.log(select);
    }

    const handleCrear = () => {
        const objeto = {
            email,
            password: psswd,
            identificacion,
            roles: [select]
        }
        console.log(objeto);
        axios.get('http://localhost:4000/graphql/usuarios', objeto)
        .then(response => {
            if (response["data"]==="¡Usuario registrado con éxito!") {
                alert(response["data"]);
                window.open("/Ingresar","_parent");
            };
        })



        .catch(err => {
            console.log(err);
        })
        .then(function () {
            // always executed
        });
    }

    

    return (
        <div>
            <div className="container justify-content align-items-center flex-column">
                <div className="mt-3">
                    <div className="row">
                        <div className="offset-md-3 col-md-6">
                            <div className="card">
                                <div className="card-title h3 mt-2 ms-2">
                                    Registrate
                                </div>
                                <div className="card-body">
                                    <form>
                                    <label htmlFor="nuevoSercicio" className="form-label">Nombre</label>
                                        <input
                                            type="text"
                                            placeholder="Ingresa tu nombre"
                                            className="form-control"
                                            value={username}
                                            onChange={(event) => setUsername(event.target.value)}
                                        ></input>
                                        <label htmlFor="nuevoSercicio" className="form-label">Correo electronico</label>
                                        <input
                                            type="email"
                                            placeholder="Ingresa un correo electronico"
                                            className="form-control"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        ></input>
                                        <label htmlFor="nuevoSercicio" className="form-label">Contraseña</label>
                                        <input
                                            type="password"
                                            placeholder="Ingresa la contraseña con la que te logearas"
                                            className="form-control"
                                            value={psswd}
                                            onChange={(event) => setPsswd(event.target.value)}
                                        ></input>
                                        <label htmlFor="nuevoSercicio" className="form-label">Identificacion</label>
                                        <input
                                            type="text"
                                            placeholder="Ingresa tu numero de documento sin puntos"
                                            className="form-control"
                                            value={identificacion}
                                            onChange={(event) => setIdentificacion(event.target.value)}
                                        ></input>
                                        <label htmlFor="nuevoSercicio" className="form-label">Rol</label>
                                        <select className="form-select" aria-label="Que rol vas a desempeñar en los proyectos"
                                            value={select}
                                            onChange={handleChange}>
                                            <option defaultValue>Que rol vas a desempeñar en los proyectos</option>
                                            <option value="Estudiante">Estudiante</option>
                                            <option value="Lider">Lider</option>
                                            <option value="Administrador">Administrador</option>

                                        </select>
                                        <small>Este rol esta sujeto a aprobacion del Administrador</small>

                                        <hr></hr>
                                        <div className="container d-flex justify-content-between">
                                            <Link className="btn btn-outline-success d-flex justify-content-start" to='/' onClick={handleCrear}>Registar !!</Link>



                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
