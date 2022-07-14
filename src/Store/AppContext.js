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
    const [allMovies, setAllMovies] = useState([])
    const [page,setPage]= useState(1) 

    const apiMovies = async () => {
        const response = await axios.get(`${BASE_URL}`)
        setMovie(response.data.results)
    }

    const apiTop = async () => {
        const response = await axios.get(`${URL_TOP}`)
        setTopMovies(response.data.results)
    }

    const totalPeliculas = async () =>{
        setPage(page+1)
        const responseAll = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9cf27d28a6063a9356fdc052d4418abb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        setAllMovies([...allMovies, ...responseAll.data.results])
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
    const buscadorTop = topMovies.filter(movies=> movies.title.toLowerCase().includes(search.toLocaleLowerCase()))
    const buscadorAll = allMovies.filter(movies=> movies.title.toLowerCase().includes(search.toLocaleLowerCase()))
    const buscadorFav = favourites.filter(movies=> movies.title.toLowerCase().includes(search.toLocaleLowerCase()))


    useEffect(() => {
        apiMovies()
        apiTop()
        totalPeliculas()
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
        buscadorTop,
        buscadorFav,
        buscadorAll,
        totalPeliculas,
        allMovies,
        }}>

            {children}
        </Context.Provider>
    )
}

export default UserProvider