import React from 'react'
import './CardDetalle.css'
import { img_url } from '../../utils'
import { Link } from 'react-router-dom';

const DetalleTop = (props) => {
    const { title, backdrop_path, vote_average, overview } = props
    return (
        <div className="card my-5">
            <div className="row g-0">
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{overview}</p>
                        <p className="card-text"><small className="text-muted">Calificación: {vote_average}</small></p>
                        <Link to="/peliculas"><button type="button" class="btn btn-primary"><i class="bi bi-arrow-left me-2"></i>Volver</button></Link>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={`${img_url}${backdrop_path}`} className="card-img-top" alt={title} style={{ height: "25rem" }} />
                </div>
            </div>
        </div>
    )
}

export default DetalleTop