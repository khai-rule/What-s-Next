import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";


const BestsellersDisplay = ( {num, title, datas} ) => {

    const navigate = useNavigate()

    const API_KEY = "SlheFCnWidTnyJMGcupkk6FkcZYvN62F";

    //! Fetch Data: Bestsellers in different categories (about 10-15 books)
    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${API_KEY}`)

    if (status === "loading") return <h1>loading...</h1>;
    if (status === "error") return <button onClick={() => location.reload()}>reload</button>;

    let book = []
    const handleClick = (title, img, description, amazon, author) => {
        navigate(`/bookinfo/title/${title.toLowerCase()}`)
        book = ([title, img, description, amazon, author])
        console.log("book", book)
        datas(book)
    }

    const display = data?.results?.lists[num]?.books?.map((item, i) => {
        return (
            <div
            className="flex-shrink-0 w-1/5 ml-16"
            >
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

    return (
        <>
            <h1
            className="text-3xl
            text-left
            py-8
            ml-16"
            >
            {title}
            </h1>
            <hr className="mx-16 mb-8"></hr>
            <div className="flex overflow-x-scroll space-x-8">
            {display}   
        </div>
        </>
    );
}
 
export default BestsellersDisplay;
