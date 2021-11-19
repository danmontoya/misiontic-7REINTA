import React from 'react'
import { Link } from 'react-router-dom'
import { EdicionDatos } from './EdicionDatos'

export const ListaProyectos = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group">
                            <Link className="list-group-item list-group-item-action" to='/listaProyectos'> second link item</Link>
                            <Link className="list-group-item list-group-item-action" to='/listaProyectos'> third link item</Link>
                            <Link className="list-group-item list-group-item-action" to='/listaProyectos'> fourth link item</Link>
                            <Link className="list-group-item list-group-item-action disabled" to='/listaProyectos'> disabled link item</Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <EdicionDatos />
                    </div>
                </div>
            </div>
        </div>
    )
}
