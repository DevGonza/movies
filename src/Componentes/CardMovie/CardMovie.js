import React, { useContext, useState } from 'react'
import { img_url } from '../../utils'
import './CardMovie.css'
import { Link } from 'react-router-dom';
import { Context } from '../../Store/AppContext';


const CardMovie = (props) => {
    const { addFavs, favourites, deleteFavs } = useContext(Context)
    const { backdrop_path, title, vote_average, id, movies } = props

    return (
        <div className="cardMovie card mb-2 border mt-5" style={{ width: "19rem", background: "linear-gradient(0deg, rgba(62,83,237,1) 0%, rgba(134,69,238,1) 18%, rgba(255,255,255,1) 86%, rgba(252,252,252,1) 100%)" }}>
            <Link to={`/detalle/${id}`} className="text-decoration-none text-dark"><img src={`${img_url}${backdrop_path}`} className="card-img-top" alt={title} style={{ height: "15.2rem" }} /></Link>
            <div className="card-body">
                <Link to={`/detalle/${id}`} className="text-decoration-none text-dark"><h5 className="card-title text-white">{title}</h5></Link>
            </div>
            <div className='container d-flex justify-content-between mt-2 mb-3 text-white' >
                {favourites.some(fav => fav.id == id) ? <i className="bi bi-heart-fill text-danger fs-4 ms-2" onClick={() => deleteFavs(id)} ></i> : <i className="  bi bi-heart-fill text-white fs-4 ms-2" onClick={() => addFavs(movies)} ></i>}
                <p className="card-text pt-3 mb-1 me-3">Calificación: {vote_average} <i className="bi bi-star-fill text-warning"></i></p>
            </div>
        </div>
    )

}

export default CardMovie

