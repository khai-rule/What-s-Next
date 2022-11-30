import Loading from "../components/Loading";
import LoadingFailed from "../components/LoadingFailed";
import useFetch from "../hooks/useFetch";
import GetGenres from "../list/GetGenres";
import { useState } from 'react';
import capitaliseFirstLetter from "../hooks/capitaliseFirstLetter";

const GenresAll = () => {

    const [genresList, setGenresList] = useState()
    const [genresDisplay, setGenresDisplay] = useState([])

    const genre = "Manga"
    const API_KEY = "SlheFCnWidTnyJMGcupkk6FkcZYvN62F";

    //! Fetch Data: Books
    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/${genre}.json?api-key=${API_KEY}`)
    if ( status === "loading") return <Loading />;
    if ( status === "error") return <LoadingFailed />;

    console.log(data?.results?.books)

    //! Display Books on the right column
    const displayBooks = () => {
        const display = data?.results?.books?.map(item => {
            const img = item.book_image
            const title = item.title
            const author = item.author
            const description = item.description
            console.log(description)
            return (
                <div className="flex-shrink-0 w-1/6 ml-16">
                    <img onClick={() => handleClick(item?.title, item?.book_image, item?.description, item?.amazon_product_url, item?.author)}
                    key={title}
                    src={img}
                    className="cursor-pointer -z-10 hover:opacity-50 hover:z-0 transition duration-300 ease-in-out"/>
                    <h3 onClick={() => handleClick(item?.title, item?.book_image, item?.description, item?.amazon_product_url, item?.author)}
                    className="py-2 cursor-pointer">{capitaliseFirstLetter(title)}</h3>
                    <h4 className="hover:opacity-50 cursor-pointer transition duration-300 ease-in-out">{author}</h4>
                    <p className="py-2 pb-4">{description}</p>
                </div>
            )
        })
    }

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
                <h3 className="flex pl-16 pt-8 pb-4">Select Genres</h3>
                {genresList?.results?.map(item => {
                   return (
                    <ul className="flex pl-16">
                        <li onClick={() => {handleSelect(item.list_name)}}
                        className={genresDisplay.includes(item.list_name) ? "cursor-pointer hover:opacity-80 transition duration-300 ease-in-out py-1" : "opacity-40 cursor-pointer hover:opacity-80 transition duration-300 ease-in-out py-1"}>
                            {item.list_name}
                        </li>
                    </ul>
                   ) 
                })}
            </>
        )
    }

    return (
        <>
            <div className="pt-16 flex justify-center">
                <h1>Browse Genres</h1>
                <p className="font-sans-serif pl-2 pt-2">hi</p>
            </div>
                {displayGenres()}
                {displayBooks()}
            <GetGenres genres={getGenres}/>
        </>
    );
}
 
export default GenresAll;