import Home from "./Home"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import HomeBestseller from "../components/HomeBestsellers";
import App from "../App";
import { useNavigate } from "react-router-dom";

const BookInfo = ( {bookInfo} ) => {

    const navigate = useNavigate()

    const {code} = useParams()
    console.log("parms" , code)
    console.log("info", bookInfo)

    return (
        <div className="flex items-center flex-col bg-pale-yellow">

        <button
            onClick={() => navigate(-1)}
            className="text-3xl
            text-left
            pt-8
            w-1/2
            ">Back
        </button>
        <img src={bookInfo[1]} />
        <h1 className="text-5xl">{code}</h1>
        <h3 className="text-2xl">{bookInfo[4]}</h3>
        <p>{bookInfo[2]}</p>
        <h4>Buy it:</h4>
        <a href={bookInfo[3]} target="_blank">Amazon</a>
         </div>
    );
}
 
export default BookInfo;


