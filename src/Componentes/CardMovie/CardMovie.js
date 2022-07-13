import React, { useContext, useState } from 'react'
import { img_url } from '../../utils'
import './CardMovie.css'
import { Link } from 'react-router-dom';
import { Context } from '../../Store/AppContext';


const CardMovie = (props) => {
    const { addFavs, favourites, deleteFavs } = useContext(Context)
    const { backdrop_path, title, vote_average, id, movies } = props

    return (
        <div className="cardMovie card mb-2 border mt-5" style={{ width: "19rem" }}>
            <Link to={`/detalle/${id}`} className="text-decoration-none text-dark"><img src={`${img_url}${backdrop_path}`} className="card-img-top" alt={title} style={{ height: "15.2rem" }} /></Link>
            <div className="card-body">
                <Link to={`/detalle/${id}`} className="text-decoration-none text-dark"><h5 className="card-title">{title}</h5></Link>
            </div>
            <div className='container d-flex justify-content-between mt-2 mb-3'>
                {/* <div className="" style={{color:corazonRojo}} onClick={()=>setCorazonRojo("red")}> */}
                {favourites.some(fav=>fav.id==id)?<i className="bi bi-heart-fill text-danger fs-4 ms-2" onClick={() => deleteFavs(id)} ></i>:<i className="  bi bi-heart fs-4 ms-2" onClick={() => addFavs(movies)} ></i>}
                {/* </div> */}
                <p className="card-text pt-3 mb-1 me-3">Calificación: {vote_average}</p>
            </div>
        </div>
    )

}

export default CardMovie

{/* <i className="bi bi-heart-fill fs-4 ms-2" onClick={() => addFavs(movies)} ></i> */}