import React from 'react'
import { img_url } from '../../utils'
import './CardMovie.css'
import { Link } from 'react-router-dom';


const CardMovie = (props) => {
    const { backdrop_path, title, vote_average, id } = props
    return (
        <div className="cardMovie card mb-2 border mt-5" style={{ width: "19rem" }}>
            <img src={`${img_url}${backdrop_path}`} className="card-img-top" alt={title} style={{ height: "15.2rem" }} />
            <div className="card-body">
                <Link to={`/detalle/${id}`} className="text-decoration-none text-dark"><h5 className="card-title">{title}</h5></Link>
            </div>
            <div className='container d-flex justify-content-between mt-2 mb-3'>
                {/* <i className="bi bi-heart text-danger fs-4"></i> */}
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault"></label>
                <p className="card-text pt-3 mb-1 me-3">Calificación: {vote_average.toFixed(1)}</p>
            </div>
        </div>
    )
}

export default CardMovie