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
        const response = await fetch (`http://openlibrary.org/search.json?title=${code}&fields=&limit=20`)
        const data = await response.json();
        console.log("data title", data.docs[0].title)
        console.log("data cover", data.docs[0].cover_i)
        console.log("data subject", data.docs[0].subject)
        console.log("data all", data.docs[0])
        setResult(data.docs)
    }
    useEffect(() => {
        fetchShows()
    }, [])
    
    const shows = result.map((item, i) => {
        return <>
        <p>{item?.title}</p>
        <p>{item?.subject}</p>
        <img key={i}
        src= {`https://covers.openlibrary.org/b/id/${item?.cover_i}-M.jpg`}
        />
        </>
    })

    return (
        <div className="flex items-center flex-col">
        <Link to={"/"}>
        <button>Return</button>
        </Link>
        <h1>Results</h1>
        {shows}
        </div>
    );
}
 
export default Results;