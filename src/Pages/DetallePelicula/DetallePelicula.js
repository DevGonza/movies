import React, { useContext, useState, useEffect } from 'react'
import CardDetalle from '../../Componentes/CardDetalle/CardDetalle'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {BASE_URL} from '../../utils'


const DetallePelicula = () => {
    const [detallePeli, setdetallePeli] = useState({});
    const {id} = useParams()

    const apiDatos = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9cf27d28a6063a9356fdc052d4418abb&`)
        setdetallePeli(response.data)
    }
    
    useEffect(() => {
        apiDatos()
    }, [])


    return (
        <div className='container d-flex flex-wrap justify-content-between'>
        <CardDetalle key={detallePeli.id} {...detallePeli} />
        </div>
    )
}

export default DetallePelicula
