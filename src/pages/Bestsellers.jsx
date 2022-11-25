import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Bestsellers = ( {bookInfo} ) => {

    const navigate = useNavigate()

    const API_KEY = "SlheFCnWidTnyJMGcupkk6FkcZYvN62F";

    //! Fetch Data: Bestsellers in different categories (about 10-15 books)
    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${API_KEY}`)
    
    if (status === "loading") return <h1>loading...</h1>;
    if (status === "error") console.log("error");

    console.log(data.results)

    let book = []
    const handleClick = (title, img, description, amazon, author) => {
        navigate(`/bookinfo/title/${title.toLowerCase()}`)
        book = ([title, img, description, amazon, author])
        console.log("book", book)
        bookInfo(book)
    }

    //! Get The Books by Categories
    const getBooksByCategories = (num) => {
        const booksByCategories = data?.results?.lists[num]?.books?.map((item, i) => {
            return (
                <div
                    className="flex-shrink-0 w-1/5 ml-16">
                <img
                    onClick={e => handleClick(item?.title, item?.book_image, item?.description, item?.amazon_product_url, item?.author)}
                    key={item?.title}
                    src={item?.book_image}
                    className="cursor-pointer"
                    />
                    <h1 className="pt-2">{item?.title}</h1>
                    <p className="py-2 pb-2">{item?.author}</p>
                    <p className="py-2 pb-2">{item?.description}</p>
                </div>
            )
            })
            return booksByCategories
    }

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
        )
    }

    return (
        <div className="bg-pale-yellow">
            <button onClick={() => navigate(-1)}
            className="text-3xl text-left py-8 ml-16">
            Back
            </button>
            <h1 className="text-center text-5xl">Bestsellers of the Week</h1>
            {displayBooks("Fiction", 0)}
            {displayBooks("Non-Fiction", 1)}
            {displayBooks("Advice, How-To", 6)}
            {displayBooks("Series", 9)}
            {displayBooks("Young-Adult", 10)}
            {displayBooks("Business", 13)}
            {displayBooks("Graphic and Mangas", 14)}
         </div>
    );
}
 
export default Bestsellers;


