import Loading from "../components/Loading";
import LoadingFailed from "../components/LoadingFailed";
import useFetch from "../hooks/useFetch";
import GetGenres from "../list/GetGenres";
import { useState } from 'react';
import Results from './SearchResults';

const GenresAll = () => {

    // const API_KEY = "SlheFCnWidTnyJMGcupkk6FkcZYvN62F";

    // //! Fetch Data: Genres
    // const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`)
    // if (status === "loading") return <Loading />;
    // if (status === "error") return <LoadingFailed />;
    const [genresList, setGenresList] = useState()
    const [genresDisplay, setGenresDisplay] = useState([])

    //! Get genres data from api
    const getGenres = (data) => {
        setGenresList(data)
    }

    //! Add to arr, remove if it already exist
    const handleSelect = (gen) => {
        if (genresDisplay.includes(gen)) {
            const titles = genresDisplay.filter(title => title !== gen)
            setGenresDisplay(titles)
        } else {
            setGenresDisplay([...genresDisplay, gen])
        }
    }

    //! Display left column of genres
    const displayGenres = () => {
        return (
            <>
                <h3 className="flex pl-12 pt-8 pb-4">Select Genres</h3>
                {genresList?.results?.map(item => {
                   return (
                    <ul className="flex pl-8">
                        <li onClick={() => {handleSelect(item.list_name)}}
                        className={genresDisplay.includes(item.list_name) ? "px-4 cursor-pointer py-1" : "px-4 opacity-50 cursor-pointer py-1"}>
                            {item.list_name}
                        </li>
                    </ul>
                   ) 
                })}
            </>
        )
    }


    // //! Fetch Data: Books
    // const { booksData, booksDataStatus } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/${genre}.json?api-key=${API_KEY}`)
    // if (booksDataStatus === "loading") return <Loading />;
    // if (booksDataStatus === "error") return <LoadingFailed />;

    const books = () => {
            return (
                <div className="text-left py-16 mx-auto flex justify-center flex-wrap">
                    <p>hello</p>
                </div>
            )
        }

    return (
        <>
            <div className="pt-16 flex justify-center">
                <h1>Browse Genres</h1>
                <p className="font-sans-serif pl-2 pt-2">hi</p>
            </div>
                {displayGenres()}
            {books()}
            <GetGenres genres={getGenres}/>
        </>
    );
}
 
export default GenresAll;