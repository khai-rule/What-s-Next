import useFetch from "../hooks/useFetch";
import BookInfoModal from "../components/BookInfoModal";
import { useState } from "react";
import capitaliseFirstLetter from "../utilities/capitaliseFirstLetter";
import Loading from "../components/Loading";
import LoadingFailed from "../components/LoadingFailed";
import ReactTooltip from 'react-tooltip';

const Bestsellers = ( {addShelf, shelf, removeFromShelf} ) => {

    const [isOpen, setIsOpen] = useState(false)
    const [bookModal, setBookModal] = useState([])

    const API_KEY = "SlheFCnWidTnyJMGcupkk6FkcZYvN62F";

    //! Fetch Data: Bestsellers in different categories (about 10-15 books)
    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${API_KEY}`)
    
    if (status === "loading") return <Loading />;
    if (status === "error") return <LoadingFailed />;

    //! Save Icons
    const bookmarkIconOutline = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
    const bookmarkIconSolid = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" /></svg>
    
    //! Open Pop up
    const handleClick = (title, img, description, amazon, author) => {
        setBookModal([title, img, description, amazon, author])
        setIsOpen(true)
    };

    //! Add/remove items to/fro bookshelf
    const handleShelf = (title, img, description, amazon, author) => {
        // Find the index of item in shelf (if any)
        const getIndex = () => {
            for (let item of shelf) {
                if (item[0] === title) {
                    let i = shelf.indexOf(item)
                    console.log("index", i)
                    return i
                } else {
                    continue
                }
            }
        }
        // If item is in shelf, remove it, otherwise add it to shelf
        shelf.some(ele => ele[0] === title) ? removeFromShelf(getIndex())
        : addShelf([title, img, description, amazon, author])
    };

    //! Get The Books by Categories
    const getBooksByCategories = (num) => {
        const booksByCategories = data?.results?.lists[num]?.books?.map(item => {
            const title = item?.title
            const img = item?.book_image
            const author = item?.author
            const description = item?.description
            const amazon = item?.amazon_product_url
            return (
                <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
                className="flex-shrink-0 w-1/6 ml-16 md:w-1/3">
                    <img onClick={() => handleClick(title, img, description, amazon, author)}
                    key={title}
                    src={img}
                    className="cursor-pointer -z-10 hover:opacity-50 hover:z-0 transition duration-300 ease-in-out"/>
                    <h3 onClick={() => handleClick(title, img, description, amazon, author)}
                    className="py-2 cursor-pointer">{capitaliseFirstLetter(item?.title)}</h3>
                    <h4 className="hover:opacity-50 cursor-pointer transition duration-300 ease-in-out">{author}</h4>
                    <p className="py-2">{description}</p>
                    <button data-tip={shelf.some(title => title[0] === item?.title) ? "Remove from Bookshelf" : "Add to Bookshelf"}
                    className="hover:opacity-50 transition duration-300 ease-in-out py-2"
                    onClick={() => handleShelf(title, img, description, amazon, author)}
                    >{shelf.some(title => title[0] === item?.title) ? bookmarkIconSolid : bookmarkIconOutline}
                    </button>
                    <ReactTooltip className="!bg-fgreen !rounded-none !ml-6" arrowColor="!fgreen" place="right"/> 
                </div>

            );
        });
            return booksByCategories
    };

    //! Laying out the Books
    const displayBooks = (name, num) => {
        return (
            <>
                <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
                className="text-left pb-4 pt-16 ml-16 flex">
                    <h2>{name}</h2>
                    <p className="font-sans-serif">{getBooksByCategories(num)?.length}</p>
                </div>
                <hr data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
                className="mx-16 mb-8 border-fgreen"></hr>
                <div className="flex overflow-x-scroll space-x-8 ">
                    {getBooksByCategories(num)}   
                </div>
            </>
        );
    };

    const booksToDisplay = [
        ["Fiction", 0],
        ["Non-Fiction", 1],
        ["Advice, How-To", 6],
        ["Series", 9],
        ["Young-Adult", 10],
    ]

    return (
        <div>

        <BookInfoModal open={isOpen} bookModal={bookModal} onClose={() => setIsOpen(false)} shelf={shelf} addShelf={addShelf} removeFromShelf={removeFromShelf}>
        </BookInfoModal>

        <div className="bg-pale-yellow my-16">

            <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
            className="flex flex-row pt-16 align-center justify-between mx-16 my-24 md:flex-col md:my-10">
                <h1 className="text-left mr-8 md:mb-8 lg:text-5xl">Recomended</h1>
                <p className="text-left font-sans-serif text-2xl ml-8 md:ml-0">nextBook works with established writers and avid readers to put together a collection of books that are true to heart. We continue to push boundaries in the way we approach our collection — looking beyond traditional bestsellers and shortlived trends, into the obscure and locked treasures. Here's just but a glimpse to other worlds.</p>
            </div>
            
            {booksToDisplay.map((item) => {
                return displayBooks(item[0], item[1])
            })}
         </div>
        </div>
    );
}
 
export default Bestsellers;