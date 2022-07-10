import React, { useContext } from 'react'
import CardMovie from '../../Componentes/CardMovie/CardMovie';
import {Context} from '../../Store/AppContext'

const Home = () => {
    const {movie} = useContext(Context)

    return (
    <div className='container d-flex flex-wrap justify-content-between'>
        {
        movie.length > 0 ?
            movie.map(pelicula => (
                <CardMovie key={pelicula.id} {...pelicula} />
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
    )
}

export default Home

