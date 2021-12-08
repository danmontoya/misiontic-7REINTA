import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { EdicionDatos } from './EdicionDatos'
import axios from 'axios';
export const ListaProyectos = () => {
    const url = 'http://localhost:4000'

    const handleGet = () => {
        axios.get(`${url}/products`)
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
        // fetch(`${url}/products`)
        //     .then((response) => response.json)
        //     .then((response) => console.log(response))
        handleGet()
    },[])
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
