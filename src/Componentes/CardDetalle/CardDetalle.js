import React from 'react'
import './CardDetalle.css'
import { img_url } from '../../utils'
import { Link, useNavigate  } from 'react-router-dom';


const CardDetalle = (props) => {
    const { title, backdrop_path, vote_average, overview } = props
    let navigate = useNavigate();
    return (
        <div className="card my-5 "style={{background: "linear-gradient(0deg, rgba(107,33,153,1) 9%, rgba(147,98,226,1) 81%)"}}>
            <div className="row g-0">
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title fs-1">{title}</h5>
                        <p className="card-text fs-5">{overview}</p>
                        <p className="card-text fs-6"><small className="text-dark d-flex justify-content-end me-5 mt-4 mb-5">Calificación: {vote_average}<i className="bi bi-star-fill text-warning ms-3"></i></small></p>
                        <Link to="#"><button onClick={()=>{navigate(-1)}} type="button" className="btn btn-primary mt-5"><i className="bi bi-arrow-left me-2"></i>Volver</button></Link>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={`${img_url}${backdrop_path}`} className="card-img-top" alt={title} style={{ height: "25rem" }} />
                </div>
            </div>
        </div>
    )
}

export default CardDetalle