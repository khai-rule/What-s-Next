import { useParams } from "react-router-dom";
import HomeBestseller from "../components/HomeBestsellers";
import { useNavigate } from "react-router-dom";
import capitaliseFirstLetter from "../hooks/capitaliseFirstLetter";
import useFetch from "../hooks/useFetch";

const BookInfo = ( {bookInfo} ) => {

    
    const navigate = useNavigate()
    
    //TODO to check if books have reviews link
    const {code} = useParams()
    console.log("parms" , code)
    console.log("info", bookInfo)
    
    const API_KEY = "SlheFCnWidTnyJMGcupkk6FkcZYvN62F";
    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${code}&api-key=${API_KEY}`)
    
    if (status === "loading") return <h1>loading...</h1>;
    if (status === "error") return <button onClick={() => location.reload()}>reload</button>;
    
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
            className="text-1xl text-left py-8 pl-16 hover:opacity-50">Back
            </button>
            <div className="flex m-auto">
                <div className="flex items-center flex-col pl-24 pb-24 m-auto w-1/2">
                    <img className="py-4"
                    src={bookImg} alt={`${bookTitle}-cover`}/>
                </div>
                <div className="w-1/2 pr-32 py-16">
                    <h3 className="text-3xl py-4">{capitaliseFirstLetter(bookTitle)}</h3>
                    <h4 className="text-2xl pb-4">{bookAuthor}</h4>
                    <p className="pb-4"
                    >{bookDescription}</p>
                    <h4 className="pb-2"
                    >Buy it on:</h4>
                    <a className="hover:opacity-50"
                    href={amazon} target="_blank">Amazon</a>
                </div>
            </div>
        </>
    );
}
 
export default BookInfo;


