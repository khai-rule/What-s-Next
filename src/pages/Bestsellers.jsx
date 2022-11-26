import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BookInfoModal from "../components/BookInfoModal";
import { useState } from "react";
import capitaliseFirstLetter from "../hooks/capitaliseFirstLetter";

const Bestsellers = ( {bookInfo, addShelf } ) => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const API_KEY = "SlheFCnWidTnyJMGcupkk6FkcZYvN62F";

    //! Fetch Data: Bestsellers in different categories (about 10-15 books)
    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${API_KEY}`)
    
    if (status === "loading") return <h1>loading...</h1>;
    if (status === "error") console.log("error");

    console.log(data.results)

    let book = [1, 2, 3, 4, 5]

    const handleClick = (title, img, description, amazon, author) => {
        // navigate(`/bookinfo/title/${title.toLowerCase()}`)
        book = [title, img, description, amazon, author]
        console.log("book", book)
        bookInfo(book);
        setIsOpen(true)
        //TODO To fix > need to render book before open pop up
        //TODO or find other ways to pass the data
    };


    const handleShelf = (title, img, description, amazon, author) => {
        book = [title, img, description, amazon, author]
        console.log("book", book)
        addShelf(book);
        setItem("book", book)
    };

    const setItem = (key, item) => {
        localStorage.setItem(key, JSON.stringify(item));
    }
    setItem("book", [])
    
    //TODO add items to localstorage. should remain when refreshed

    const bookmarkIconOutline = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
  
    const bookmarkIconSolid = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" /></svg>
  

    //! Get The Books by Categories
    const getBooksByCategories = (num) => {
        const booksByCategories = data?.results?.lists[num]?.books?.map((item, i) => {
            return (
                <div className="flex-shrink-0 w-1/5 ml-16">
                    <img onClick={e => handleClick(item?.title, item?.book_image, item?.description, item?.amazon_product_url, item?.author)}
                    key={item?.title}
                    src={item?.book_image}
                    className="cursor-pointer"/>
                    <h1 className="pt-2">{capitaliseFirstLetter(item?.title)}</h1>
                    <p className="py-2 pb-2">{item?.author}</p>
                    <p className="py-2 pb-2">{item?.description}</p>
                    <button onClick={e => handleShelf(item?.title, item?.book_image, item?.description, item?.amazon_product_url, item?.author)}
                    >{bookmarkIconOutline}</button>
                </div>
            );
        });
            return booksByCategories
    };

    //! Laying out the Books
    const displayBooks = (name, num) => {
        return (
            <>
                <div className="text-left py-8 ml-16 flex">
                    <h1 className="text-3xl">{name}</h1>
                    <p className="text-1xl">{getBooksByCategories(num)?.length}</p>
                </div>
                <hr className="mx-16 mb-8"></hr>
                <div className="flex overflow-x-scroll space-x-8">
                    {getBooksByCategories(num)}   
                </div>
            </>
        );
    };

    //! Back Button
    // <button onClick={() => navigate(-1)}
    // className="text-1xl text-left py-8 ml-16">
    // Back
    // </button>

    return (
        <>
        <BookInfoModal open={isOpen} book={book} onClose={() => setIsOpen(false)}>
        </BookInfoModal>

        <div className="bg-pale-yellow">
            <h1 className="text-center text-5xl pt-16">Bestsellers of the Week</h1>
            {displayBooks("Fiction", 0)}
            {displayBooks("Non-Fiction", 1)}
            {displayBooks("Advice, How-To", 6)}
            {displayBooks("Series", 9)}
            {displayBooks("Young-Adult", 10)}
            {displayBooks("Business", 13)}
            {displayBooks("Graphic and Mangas", 14)}
         </div>
        </>
    );
}
 
export default Bestsellers;


