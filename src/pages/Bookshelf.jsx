import capitaliseFirstLetter from "../hooks/capitaliseFirstLetter"
import { useNavigate } from "react-router-dom";

const Bookshelf = ( {removeFromShelf, shelf} ) => {

    const navigate = useNavigate();

    //! Save Icon
    const bookmarkIconSolid = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" /></svg>

    //! Remove from shelf
    const handleShelf = (i) => {
        removeFromShelf(i)
    }
    
    //TODO organise the item index
    const books = () => {
        if (shelf.length <= 0) {
            return (
                <div className="text-center">
                    <h2 data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true">
                    You have not added anything in your bookshelf</h2>
                    <button onClick={() => navigate("/books/recommended")}
                    data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
                    className="border-solid border-2 border-fgreen py-3 px-4 mt-6 hover:text-white hover:bg-fgreen transition duration-300 ease-in-out">
                    Browse Recommended
                    </button>
                </div>
            )
        } else {
            return (
                <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
                className="text-left py-16 mx-auto flex justify-center flex-wrap">
                {shelf.map((item, i) => (
                    <div className="flex-shrink-0 w-1/5 ml-8 pt-8">
                        <img className="" key={item[0]} src={item[1]} />
                        <h1 className="py-2 pt-3 text-2xl">{capitaliseFirstLetter(item[0])}</h1>
                        <h4 className="hover:opacity-50 cursor-pointer"
                        >{item[4]}</h4>
                        <p className="py-2">{item[2]}</p>
                        <h3 className="text-xl pb-2">Check it out on:</h3>
                        <h4 className="hover:opacity-50"
                        ><a href={item[3]} target="_blank">Amazon</a></h4>
                        <h4 className="pt-1">
                        <a className="hover:opacity-50 transition duration-300 ease-in-out font-sans-serif"
                        href={`https://www.goodreads.com/search?q=${item[0]}`} target="_blank">Good Reads</a>
                        </h4>
                        <button onClick={() => handleShelf(i)}
                        className="hover:opacity-50 pt-3"
                        >{bookmarkIconSolid}</button>
                    </div>
                ))}
                </div>
            )
        }
    }

    return (
        <>
            <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
            className="my-24 flex justify-center">
                <h1>My Bookshelf</h1>
                <p className="font-sans-serif pl-2 pt-2">{shelf.length}</p>
            </div>
            {books()}
        </>
        );
    }
    
    export default Bookshelf;
