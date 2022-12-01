import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import capitaliseFirstLetter from "../hooks/capitaliseFirstLetter";
import Loading from "./Loading";
import LoadingFailed from "./LoadingFailed";

const HomeBestseller = ( {datas} ) => {

    const navigate = useNavigate();

    //! NYT
    // const API_KEY = import.meta.env.VITE_API_KEY;
    const API_KEY = "SlheFCnWidTnyJMGcupkk6FkcZYvN62F";

    //! Fetch Data: Top 5 bestsellers in different categories
    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API_KEY}`)
    
    if (status === "loading") return <Loading />;
    if (status === "error") return <LoadingFailed />;
    
    
    //Combined Print & ebook fiction
    console.log(data?.results?.lists)

    let book = []
    const handleClick = (title, img, description, amazon, author) => {
        navigate(`/bookinfo/title/${title.toLowerCase()}`)
        book = ([title, img, description, amazon, author])
        console.log("book", book)
        datas(book)
    }

    //! Right Column
    const bestsellerRight = data?.results?.lists[0]?.books?.slice(1, 5).map((item, i) => {
    return (

            <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
            className="flex-shrink-0 w-64 max-w-screen-sm min-w-0 ml-24">
                <img
                onClick={() => handleClick(item?.title, item?.book_image, item?.description, item?.amazon_product_url, item?.author)}
                key={item?.title}
                src={item?.book_image}
                className="shrink-0 cursor-pointer hover:opacity-50 transition duration-300 ease-in-out"/>
                <h3 className="pt-4 cursor-pointer">{capitaliseFirstLetter(item?.title)}</h3>
                <p className="pb-8 pt-3">{item?.description}</p>
                </div>
                
                )
            })

            // <h4 className="py-2 pb-2">{item?.author}</h4>
            
    //! Left Column
    const bestsellerLeft = data?.results?.lists[0]?.books?.slice(0, 1).map((item, i) => {
        return (
            <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
            className='flex-shrink-0 w-full min-w-full ml-96'>
                <img
                onClick={() => handleClick(item?.title, item?.book_image, item?.description, item?.amazon_product_url, item?.author)}
                key={item?.title}
                src={item?.book_image}
                className="shrink-0 cursor-pointer w-96 hover:opacity-50 transition duration-300 ease-in-out"/>
                <h1 onClick={() => handleClick(item?.title, item?.book_image, item?.description, item?.amazon_product_url, item?.author)}
                className="pt-6">#1 Recommended</h1>
                <h3 className="pt-1 cursor-pointer">{capitaliseFirstLetter(item?.title)}</h3>
                <p className="pb-8 pt-3 w-80">{item?.description}</p>
                <button onClick={() => navigate("/genres/browse")}
                className="border-solid border-2 border-fgreen py-3 px-4 hover:text-white hover:bg-fgreen transition duration-300 ease-in-out">
                Browse Genres
                </button>
                </div>
                )
            })

    return ( 
        <div className="flex m-auto">
            <div className="m-0 flex justify-center flex-wrap">
                {bestsellerLeft}
            </div>
            <div className="my-0 -ml-12 flex justify-left flex-wrap">
                {bestsellerRight}
            </div>
        </div>
    );
}
    
export default HomeBestseller;