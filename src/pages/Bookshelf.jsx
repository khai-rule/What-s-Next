import capitaliseFirstLetter from "../hooks/capitaliseFirstLetter"
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const Bookshelf = ( {removeFromShelf, shelf} ) => {

    const navigate = useNavigate();

    //! Get Items from localstorage and parse
    const getBooksFromLS = localStorage.getItem("books")
    const booksParsed = JSON.parse(getBooksFromLS)


    //! Save Icon
    const bookmarkIconSolid = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" /></svg>

    //! Remove from localstorage
    const handleShelf = (i) => {
        removeFromShelf(i)
    }
    
    //TODO organise the item index
    const books = () => {
        if (shelf.length <= 0) {
            return (
                <div className="text-center pt-16">
                    <h1>You have not added anything in your bookshelf</h1>
                    <button onClick={e => navigate("/bestsellers")}
                    className="border-solid border-2 border-black p-2 px-4 mt-6">
                    Browse Bestsellers
                    </button>
                </div>
            )
        } else {
            return (
                <div className="text-left py-16 mx-auto flex justify-center flex-wrap">
                {shelf.map((item, i) => (
                    <div className="flex-shrink-0 w-1/5 ml-8 pt-8">
                        <img className="" key={item[0]} src={item[1]} />
                        <h1 className="py-2 pb-2">{capitaliseFirstLetter(item[0])}</h1>
                        <p>{item[4]}</p>
                        <p className="py-2 pb-2">{item[2]}</p>
                        <p>Buy it on:</p>
                        <p><a href={item[3]} target="_blank">Amazon</a></p>
                        <button onClick={e => handleShelf(i)}
                        >{bookmarkIconSolid}</button>
                    </div>
                ))}
                </div>
            )
        }
    }

    useEffect(() => {books()}, [shelf])

    return (
        <>
            <h1 className="text-center text-5xl pt-16">My Bookshelf</h1>
            {books()}
        </>
        );
    }
    
    export default Bookshelf;
