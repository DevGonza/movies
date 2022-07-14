import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../Assets/Img/logo.png'
import './Navbar.css'
import { Context } from '../../Store/AppContext';


const Navbar = () => {
    const { counter, search, setSearch} = useContext(Context)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" style={{background:'radial-gradient(circle, rgba(94,19,92,1) 0%, rgba(37,17,98,1) 95%)'}}>
            <div className="container-fluid mx-5">
                <Link to='/movies' className="navbar-brand me-5"><img src={logo} className="logo" alt='logo' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/movies' className="nav-link active me-5 fs-4" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/peliculasdestacadas" className="nav-link active me-5 fs-4" aria-current="page">Peliculas destacadas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/peliculas" className="nav-link active fs-4" aria-current="page">Peliculas</Link>
                        </li>
                    </ul>
                    <form className="d-flex w-25">
                    <input className="form-control me-2" type="search"placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} aria-label="Search"/>
                    </form>
                    <Link to="/favoritos" className="" aria-current="page"><i className="bi bi-heart-fill fs-2 active text-danger"></i></Link>
                    <p className='contador pb-4 ps-0 text-danger'>{counter}</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


