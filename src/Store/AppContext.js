import { useState, createContext, useEffect } from "react";
import { BASE_URL } from '../utils';
import axios from 'axios'


export const Context = createContext (null)
const UserProvider = ({children}) => {
    const [films, setFilm] = useState ([])
    const [favourites, setFavourites] = useState ([])
    const [details, SetDetails] = useState ([])
    const [movie, setMovie] = useState([]);

    const apiMovies = async () => {
        const response = await axios.get(`${BASE_URL}`)
        setMovie(response.data.results)
        console.log(movie)

    }
    

    const apiDetalle = async () => {
        const response = await axios.get(`${BASE_URL}`)
        SetDetails(response.data.results)
        console.log(details)
    }

    const apiFavoritas = async () => {
        const response = await axios.get(`${BASE_URL}`)
        setFavourites(response.data.results)
        console.log(favourites)

    }

    useEffect(() => {
        apiDetalle()
        apiMovies()
        apiFavoritas()
    }, [])

    // const agregarFavoritos= 


    return(
        <Context.Provider value={{movie, setMovie, films, setFilm, favourites, setFavourites, details, SetDetails}}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider
