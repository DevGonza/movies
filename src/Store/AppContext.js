import { useState, createContext, useEffect } from "react";
import { BASE_URL, URL_TOP } from '../utils';
import axios from 'axios'


export const Context = createContext(null)
const UserProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([])
    const [movie, setMovie] = useState([])
    const [topMovies, setTopMovies] = useState([])
    const [counter, setCounter] = useState(0)
    const [search, setSearch] = useState('')

    const apiMovies = async () => {
        const response = await axios.get(`${BASE_URL}`)
        setMovie(response.data.results)
    }

    const apiTop = async () => {
        const response = await axios.get(`${URL_TOP}`)
        setTopMovies(response.data.results)
    }

    const addFavs = (movies) => {
        const added = favourites.find(peliElegida => peliElegida.id === movies.id)
        if (added) {
            setFavourites([...favourites])
        } else {
            setCounter(counter + 1)
            setFavourites([...favourites, { ...movies }])
        }
    }

    const deleteFavs = (id) => {
        const deleted = favourites.filter(peliculaEliminar => peliculaEliminar.id !== id)
        setFavourites(deleted)
        setCounter(counter - 1)
    }


    const buscador = movie.filter(movies=> movies.title.toLowerCase().includes(search.toLocaleLowerCase()))



    useEffect(() => {
        apiMovies()
        apiTop()
    }, [])

    return (
        <Context.Provider value={{ 
        movie, 
        setMovie,
        topMovies, 
        setTopMovies, 
        favourites, 
        setFavourites, 
        addFavs, 
        deleteFavs, 
        counter, 
        setCounter,
        search,
        setSearch,
        buscador, 
        }}>

            {children}
        </Context.Provider>
    )
}

export default UserProvider


// , buscador, setSearch