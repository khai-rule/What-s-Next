import Home from "./Home"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const BookInfo = () => {
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([""])

    const {code} = useParams()

    return (
        <div className="flex items-center flex-col">
        <Link to={"/"}>
        <button>Return</button>
        </Link>
        <h1>Results</h1>

        </div>
    );
}
 
export default BookInfo;


