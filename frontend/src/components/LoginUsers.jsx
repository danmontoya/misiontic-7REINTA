import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const LoginUsers = () => {

    const [email, setEmail] = useState();
    const [psswd, setPsswd] = useState();

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
                                            type="password"
                                            placeholder="Tu contraseña"
                                            className="form-control"
                                            value={psswd}
                                            onChange={(event) => setPsswd(event.target.value)}
                                        ></input>
                                        <hr></hr>
                                        <div className="container d-flex justify-content-between">
                                            <Link className="btn btn-outline-success d-flex justify-content-start" to='/' >Ingresar</Link>

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
