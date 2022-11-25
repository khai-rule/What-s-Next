import Home from "./Home"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import HomeBestseller from "../components/HomeBestsellers";
import App from "../App";

const BookInfo = ( {bookInfo1} ) => {

    const {code} = useParams()
    console.log("parms" , code)
    console.log("info", bookInfo1)

    return (
        <div className="flex items-center flex-col">
        <Link to={"/"}>
        <button>Return</button>
        </Link>
        <h1>{code}</h1>

        </div>
    );
}
 
export default BookInfo;


