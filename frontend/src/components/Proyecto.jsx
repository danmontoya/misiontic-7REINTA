import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export const Proyecto = () => {

    const [proyectoNuevo, setProyectoNuevo] = useState();
    const [objGeneroNuevo, setobjGeneroNuevo] = useState();
    const [objEspNuevo, setobjEspNuevo] = useState();
    const [presupuesto, setpresupuesto] = useState();
    const [fechaI, setfechaI] = useState();
    const [fechaF, setfechaF] = useState();
    const [idLider, setIdLider] = useState();
    const [liderName, setliderName] = useState();

    return (
        <div>

            <div className="container  justify-content-center align-items-center flex-column">
                <div className="mt-3">
                    <div className="row">
                        <div className="offset-md-3 col-md-6 ">
                            <div className="card ">
                                <div className="card-title h3 mt-2 ms-2">
                                    Nuevo Proyecto
                                </div>
                                <div className="card-body">
                                    <form>


                                        <label for="nuevoSercicio" className="form-label">Nombre Proyecto</label>
                                        <input
                                            type="text"
                                            placeholder="Ingresa nuevo proyecto"
                                            id="nuevoServicio" className="form-control"
                                            value={proyectoNuevo}
                                            onChange={(event) => setProyectoNuevo(event.target.value)}
                                        ></input>
                                        <label className="form-label">OBjetivos gen</label>
                                        <input
                                            type="text"
                                            placeholder="Ingresa obj generado"
                                            className="form-control"
                                            value={objGeneroNuevo}
                                            onChange={(event) => setobjGeneroNuevo(event.target.value)}
                                        ></input>
                                        <label className="form-label">OBjetivos esp</label>
                                        <input
                                            type="text"
                                            placeholder="Ingresa obj esp generado"
                                            className="form-control"
                                            value={objEspNuevo}
                                            onChange={(event) => setobjEspNuevo(event.target.value)}
                                        ></input>
                                        <label className="form-label">Presupuesto</label>
                                        <input
                                            type="tel"
                                            placeholder="Presupuesto"
                                            className="form-control"
                                            value={presupuesto}
                                            onChange={(event) => setpresupuesto(event.target.value)}
                                        ></input>
                                        <label className="form-label">Fecha Inicio</label>
                                        <input
                                            type="date"
                                            placeholder="Presupuesto"
                                            className="form-control"
                                            value={fechaI}
                                            onChange={(event) => setfechaI(event.target.value)}
                                        ></input>
                                        <label className="form-label">Fecha Finalizacion</label>
                                        <input
                                            type="date"
                                            placeholder="Presupuesto"
                                            className="form-control"
                                            value={fechaF}
                                            onChange={(event) => setfechaF(event.target.value)}
                                        ></input>
                                        <label className="form-label mt-3">Datos Lider</label>
                                        <input
                                            type="text"

                                            className="form-control"
                                            value={idLider}
                                            onChange={(event) => setIdLider(event.target.value)}
                                            disabled readonly
                                        ></input>
                                        <input
                                            type="text"

                                            className="form-control mt-1"
                                            value={liderName}
                                            onChange={(event) => setliderName(event.target.value)}
                                            disabled readonly
                                        ></input>

                                    </form>
                                    <hr></hr>
                                    <Link className="btn btn-outline-success" to='/registrar'>Crear Proyecto</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
