import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import capitaliseFirstLetter from "../hooks/capitaliseFirstLetter";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import LoadingFailed from "../components/LoadingFailed";

const BookInfo = ( {bookInfo} ) => {

    
    const navigate = useNavigate()
    
    //TODO to check if books have reviews link
    const {code} = useParams()
    console.log("parms" , code)
    console.log("info", bookInfo)
    
    const API_KEY = "SlheFCnWidTnyJMGcupkk6FkcZYvN62F";
    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${code}&api-key=${API_KEY}`)
    
    if (status === "loading") return <Loading />;
    if (status === "error") return <LoadingFailed />;
    
    console.log("data ", data)

    //Book Info
    const bookImg = bookInfo[1]
    const bookTitle = bookInfo[0]
    const bookAuthor = bookInfo[4] 
    const bookDescription = bookInfo[2]
    // Buy links
    const amazon = bookInfo[3]

    return (
        <>
            <button onClick={() => navigate(-1)}
            className="text-1xl text-left py-8 pl-16 hover:opacity-50 transition duration-300 ease-in-out">Back
            </button>
            <div className="flex m-auto">
                <div className="flex items-right flex-col pl-24 pb-24 ml-auto mr-8 w-1/3">
                    <img className="py-4"
                    src={bookImg} alt={`${bookTitle}-cover`}/>
                </div>
                <div className="w-1/2 pr-32 py-16">
                    <h2 className="py-2">{capitaliseFirstLetter(bookTitle)}</h2>
                    <h4 className="pb-4">{bookAuthor}</h4>
                    <p className="pb-4 w-1/2"
                    >{bookDescription}</p>
                    <h3 className="pb-2"
                    >Buy it on:</h3>
                    <p>
                    <a className="hover:opacity-50 font-sans-serif transition duration-300 ease-in-out"
                    href={amazon} target="_blank">Amazon</a>
                    </p>
                </div>
            </div>
        </>
    );
}
 
export default BookInfo;


