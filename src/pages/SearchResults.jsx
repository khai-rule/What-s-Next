import Home from "./HomeSearch"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Results = () => {
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([""])

    const {code} = useParams()

    async function fetchShows() {
        const response = await fetch (`https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=SlheFCnWidTnyJMGcupkk6FkcZYvN62F`)
        const data = await response.json();
        // console.log("data title", data.docs[0].title)
        // console.log("data cover", data.docs[0].cover_i)
        // console.log("data subject", data.docs[0].subject)
        console.log("data all", data)
        setResult(data.docs)
    }
    useEffect(() => {
        fetchShows()
    }, [])
    
    // const shows = result.map((item, i) => {
    //     return <>
    //     <p>{item?.title}</p>
    //     </>
    // })

    return (
        <div className="flex items-center flex-col">
        <Link to={"/"}>
        <button>Return</button>
        </Link>
        <h1>Results</h1>

        </div>
    );
}
 
export default Results;


// SlheFCnWidTnyJMGcupkk6FkcZYvN62F