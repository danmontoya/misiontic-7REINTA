import React from 'react'

export const insproyecto = () => {
    return (
        <div>
            <div className="container-fluid">
                <label htmlFor="nuevoSercicio" className="form-label">ID:</label>
                    <input
                    type="text"
                    placeholder="ID del proyecto"
                    ></input>
                <label htmlFor="nuevoSercicio" className="form-label">Nombre del proyecto:</label>
                    <input
                    type="text"
                    placeholder="Nombre del proyecto al que se requiere unir"
                    ></input>
                <label htmlFor="nuevoSercicio" className="form-label">Presupuesto:</label>
                    <input
                    type="number"
                    placeholder="presupuesto"
                    ></input>
                <label htmlFor="nuevoSercicio" className="form-label">ID lider:</label>
                    <input
                    type="number"
                    placeholder="ID del lider"
                    ></input>
                <label htmlFor="nuevoSercicio" className="form-label">Nombre lider:</label>
                    <input
                    type="number"
                    placeholder="Nombre del lider"
                    ></input>
                <label htmlFor="nuevoSercicio" className="form-label">Objetivos generales:</label>
                    <input
                    type="number"
                    placeholder="Objetivos generales"
                    ></input>
                <label htmlFor="nuevoSercicio" className="form-label">Objetivos generales:</label>
                    <input
                    type="number"
                    placeholder="Objetivos generales"
                    ></input>
                <label htmlFor="nuevoSercicio" className="form-label">Objetivos especificos:</label>
                    <input
                    type="number"
                    placeholder="Objetivos especificos"
                    ></input>
                <label htmlFor="nuevoSercicio" className="form-label">Fecha de inicio:</label>
                    <input
                    type="date"
                    ></input>   
            </div>
        </div>
    )
}
