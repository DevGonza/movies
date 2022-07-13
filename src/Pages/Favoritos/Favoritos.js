import React, { useContext } from 'react'
import CardFavs from '../../Componentes/CardFavs/CardFavs'
import {Context} from '../../Store/AppContext'

const Favoritos = () => {
    const {favourites} = useContext(Context)
    
    return (
    <div className='container d-flex flex-wrap justify-content-evenly'>
        {
        favourites.length > 0 ?
        favourites.map(peliculasFavs => (
                <CardFavs key={peliculasFavs.id} {...peliculasFavs} movie={peliculasFavs} />
        ))
        :
        <div className='container mb-4 text-success'>
            <p>No posee peliculas guardadas</p>
        </div>
        }
    </div>
    )
}


export default Favoritos