import React, { useContext } from 'react'
import CardMovie from '../../Componentes/CardMovie/CardMovie'
import { Context } from '../../Store/AppContext'

const Peliculas = () => {
    const { allMovies, buscadorAll, totalPeliculas} = useContext(Context)



    return (
    <>
        <div className='titulo container text-center text-white mt-5' style={{background: 'rgb(161, 2, 144)'}}><h2 className='fs-1'>Peliculas</h2></div>
        <div className='container d-flex flex-wrap justify-content-evenly mb-5'>
            
            {
             buscadorAll.length > 0 ?
             buscadorAll.map(pelicula => (
             <CardMovie key={pelicula.id} {...pelicula} movies={pelicula} />
             ))
             :
             allMovies.length > 0 ?
             allMovies.map(pelicula => (
                <CardMovie key={pelicula.id} {...pelicula} movies={pelicula} />
            ))
            :
            <div className='container mb-4 text-success'>
                <div className='d-flex justify-content-center'>
                    <strong>Loading...</strong>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className="spinner-border d-flex " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
            }
            <div className='container text-center'>
            <button className='btn btn-danger mt-5 w-50 text-uppercase fw-bold' style={{background: "linear-gradient(333deg, rgba(112,3,170,1) 19%, rgba(151,1,184,1) 70%)" }} onClick={totalPeliculas}>Mas pelis</button>
            </div>
        </div>
    </>
    )
}

export default Peliculas