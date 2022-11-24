import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const HomeBestseller = () => {

    const API_KEY = import.meta.env.VITE_API_KEY;

    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`)

    if (status === "loading") return <h1>loading...</h1>;
    if (status === "error") console.log(error);



    const handleClick = () => {
        console.log("hello")
    }

    const bestsellerRight = data?.results?.books?.slice(1, 5).map((item, i) => {
    return (
        <div
        onClick={handleClick}
        className="w-1/6 flex-wrap shrink-0 p-4">
            <img
            key={item?.title}
            src={item?.book_image}
            className="shrink-0"
            />
            <h1 className="pt-2">{item?.title}</h1>
            <p className="py-2 pb-2">{item?.description}</p>
        </div>
    )
    })

    const bestsellerLeft = data?.results?.books?.slice(0, 1).map((item, i) => {
        return (
                <div className='w-1/2 shrink-0 p-24'>
                <img
                key={item?.title}
                src={item?.book_image}
                className="shrink-0"
                />
                <h1 className="py-2">{item?.title}</h1>
                <p className="py-2 pb-2">{item?.description}</p>
                <button
                className="border-solid border-2 border-black p-2">All Bestsellers</button>
            </div>
        )
        })

    return ( 
        <div className="flex flex-wrap pt-16">
            <button onClick={handleClick}>Hello</button>
            {bestsellerLeft}
            {bestsellerRight}
        </div>
    );
}
    
export default HomeBestseller;