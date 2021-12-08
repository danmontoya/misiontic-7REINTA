import React from 'react'
import { Link } from 'react-router-dom'
import ban from '../imgs/banner.jpeg';

export const Cabecera = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-ligth" >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to={'/'}>7TREINTA</Link> */}
          <Link className="navbar-brand" to='/'>
            <img src={ban} alt="" width="100" height="30"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'/ingresar'}>Ingresar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/registrar'}>Registrarse</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/listaProyectos'}>Proyectos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/usersList'}>AdminStuff</Link>
              </li>
              <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mi cuenta
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            
            <li><Link className="dropdown-item" to='/perfil'>Ajustes</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to='/'>Salir</Link></li>
          </ul>
        </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
