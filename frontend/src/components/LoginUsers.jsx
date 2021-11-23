import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export const LoginUsers = () => {
    const url = 'http://localhost:4000'

    const [email, setEmail] = useState();
    const [psswd, setPsswd] = useState();
    axios.defaults.headers.post['Content-Type'] = 'application/json';


    const handleLogin = () => {
        const objeto = {
            email,
            password: psswd
        }

        axios.post(`${url}/auth/login`, objeto)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
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
                                    Ingresa
                                </div>
                                <div className="card-body">
                                    <form>
                                        <label htmlFor="nuevoSercicio" className="form-label">Correo electronico</label>
                                        <input
                                            type="email"
                                            placeholder="Ingresa el correo electronico que registraste"
                                            className="form-control"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        ></input>
                                        <label htmlFor="nuevoSercicio" className="form-label">Contraseña</label>
                                        <input
                                            type="text"
                                            placeholder="Tu contraseña"
                                            className="form-control"
                                            value={psswd}
                                            onChange={(event) => setPsswd(event.target.value)}
                                        ></input>
                                        <hr></hr>
                                        <div className="container d-flex justify-content-between">
                                            <Link className="btn btn-outline-success d-flex justify-content-start" to='/' onClick={handleLogin}>Ingresar</Link>

                                            <Link to='/registrar' className="d-flex justify-content-end">No tienes cuenta? registrate!</Link>

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
