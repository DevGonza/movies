import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../Assets/Img/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid mx-5">
                <Link to='/' className="navbar-brand" href="#"><img src={logo} className="logo" alt='logo'/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <Link to="#" className="nav-link active" aria-current="page">Peliculas</Link>
                        </li>
                    </ul>
                    <form className="d-flex w-25">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    <Link to="/favoritos" className="nav-link active text-danger" aria-current="page"><i class="bi bi-heart-fill fs-2"></i>3</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar