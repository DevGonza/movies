import React, { useContext } from 'react'
import CardFavs from '../../Componentes/CardFavs/CardFavs'
import {Context} from '../../Store/AppContext'
import corazon from '../../Assets/Img/corazon3.png'


const Favoritos = () => {
    const {favourites, buscadorFav} = useContext(Context)
    
    return (
    <div className='container d-flex flex-wrap justify-content-evenly'>
        {
        buscadorFav.length > 0 ?
        buscadorFav.map(peliculasFavs => (
                <CardFavs key={peliculasFavs.id} {...peliculasFavs} movie={peliculasFavs} />
        ))
        :    
        favourites.length > 0 ?
        favourites.map(peliculasFavs => (
                <CardFavs key={peliculasFavs.id} {...peliculasFavs} movie={peliculasFavs} />
        ))
        :
        <div className='container mb-4 text-success text-center'>
            <img src={corazon}/>
        </div>
        }
    </div>
    )
}


export default Favoritos