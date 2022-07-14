import React, { useContext } from 'react'
import CardMovie from '../../Componentes/CardMovie/CardMovie';
import { Carrousel } from '../../Componentes/Carrousel/Carrousel';
import {Context} from '../../Store/AppContext'
import './Home.css'

const Home = () => {
    const {movie, buscador} = useContext(Context)

    return (
    <>  
        <div><Carrousel /></div>
        
        <div className='titulo container text-center text-white mt-5' style={{background: 'rgb(161, 2, 144)'}}><h2 className='fs-1'>Peliculas Populares</h2></div>  
        <div className='container d-flex flex-wrap justify-content-evenly mb-5'>
            {
             buscador.length > 0 ?
             buscador.map(pelicula => (
             <CardMovie key={pelicula.id} {...pelicula} movies={pelicula} />
             ))
             :
               
            movie.length > 0 ?
                movie.map(pelicula => (
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
        </div>
    </>
    )
}

export default Home

