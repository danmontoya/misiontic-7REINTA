import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const insproyecto = () => {
    return (
        <div>
            <div className="container justify-content align-items-center flex-column">
                <div className="mt-3">
                    <div className="row">
                        <div className="offset-md-2 col-md-9">
                            <div className="card-title h3 mt-2 ms-2">
                                Inscripcion a un nuevo proyecto
                            </div>
                            <div className="card-body">
                                <form>
                                    <label htmlFor="nuevoSercicio" className="form-label">ID:</label>
                                        <input
                                        type="text"
                                        placeholder="ID del proyecto"
                                        className="form-control"
                                        ></input>
                                    <label htmlFor="nuevoSercicio" className="form-label">Nombre del proyecto:</label>
                                        <input
                                        type="text"
                                        placeholder="Nombre del proyecto al que se requiere unir"
                                        className="form-control"
                                        ></input>
                                    <label htmlFor="nuevoSercicio" className="form-label">Presupuesto:</label>
                                        <input
                                        type="number"
                                        placeholder="presupuesto"
                                        className="form-control"
                                        ></input>
                                    <label htmlFor="nuevoSercicio" className="form-label">ID lider:</label>
                                        <input
                                        type="number"
                                        placeholder="ID del lider"
                                        className="form-control"
                                        ></input>
                                    <label htmlFor="nuevoSercicio" className="form-label">Nombre lider:</label>
                                        <input
                                        type="text"
                                        placeholder="Nombre del lider"
                                        className="form-control"
                                        ></input>
                                    <label htmlFor="nuevoSercicio" className="form-label">Objetivos generales:</label>
                                        <input
                                        type="text"
                                        placeholder="Objetivos generales"
                                        className="form-control"
                                        ></input>
                                    <label htmlFor="nuevoSercicio" className="form-label">Objetivos especificos:</label>
                                        <input
                                        type="text"
                                        placeholder="Objetivos especificos"
                                        className="form-control"
                                        ></input>
                                    <div>
                                    <label htmlFor="nuevoSercicio" className="form-label">Fecha de inicio:</label>
                                        <input
                                        type="date"
                                        ></input>
                                    </div>
                                    <div>
                                    <label htmlFor="nuevoSercicio" className="form-label">Fecha Terminación:</label>
                                        <input
                                        type="date"
                                        ></input>
                                    </div>
                                    <div>
                                    <button type="button" class="btn btn-outline-danger">limpiar</button>
                                    <button type="button" class="btn btn-outline-primary">actualizar</button>
                                    <button type="button" class="btn btn-outline-success">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
