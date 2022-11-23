import Home from "./Home"
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
        console.log("data all", data)
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