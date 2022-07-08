import React from 'react'
import { img_url } from '../../utils'

const CardMovie = (props) => {
    const {backdrop_path, title, original_language, id,} = props
    return (
      <div className="card mb-3 border-primary border-3" style={{width: "18rem"}}>
          <img src={`${img_url}${backdrop_path}`} className="card-img-top" alt={title} />
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text mb-1">{original_language}</p>
              <p className="card-text mb-1">{id}</p>
              {/* <p className="card-text">Status: {status === "Alive" ? "Vivo" : props.status === "unknown" ? "desconocido" : "muerto"}</p> */}
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
      </div>
    )
}

export default CardMovie