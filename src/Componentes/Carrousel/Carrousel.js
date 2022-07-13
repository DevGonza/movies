import React from 'react'
import carrousel1 from '../../Assets/Img/cinema4.jpg'
import carrousel2 from '../../Assets/Img/cinema2.jpg'
import carrousel3 from '../../Assets/Img/cinema3.jpg'
import './Carrousel.css'

export const Carrousel = () => {
    return (
        <div id="carouselExampleFade" className="slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carrousel1} className="imgCarrousel d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={carrousel2} className="imgCarrousel d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={carrousel3} className="imgCarrousel d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
