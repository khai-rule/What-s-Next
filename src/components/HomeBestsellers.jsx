import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const HomeBestseller = ( {datas} ) => {

    const navigate = useNavigate();

    //! NYT
    // const API_KEY = import.meta.env.VITE_API_KEY;
    const API_KEY = "SlheFCnWidTnyJMGcupkk6FkcZYvN62F";

    //! Top 5 in different categories
    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API_KEY}`)
    
    if (status === "loading") return <h1>loading...</h1>;
    if (status === "error") console.log("error");
    
    
    //Combined Print & ebook fiction
    console.log(data?.results?.lists)

    let book = []
    const handleClick = (title, img, description) => {
        navigate(`/bookinfo/title/${title}`)
        book = ([title, img, description])
        console.log("book", book)
        datas(book)
    }

    //! Amazon - item.buy_links[0].url
    //! Author - item.author

    //! Right Column
    const bestsellerRight = data?.results?.lists[0]?.books?.slice(1, 5).map((item, i) => {
    return (
        <div
        className="w-1/6 flex-wrap shrink-0 p-4">
        <img
            onClick={e => handleClick(item?.title, item?.book_image, item?.description)}
            key={item?.title}
            src={item?.book_image}
            className="shrink-0 cursor-pointer"
            />
            <h1 className="pt-2">{item?.title}</h1>
            <p className="py-2 pb-2">{item?.author}</p>
            <p className="py-2 pb-2">{item?.description}</p>
        </div>
    )
    })

    //! Left Column
    const bestsellerLeft = data?.results?.lists[0]?.books?.slice(0, 1).map((item, i) => {
        return (
                <div className='w-1/2 shrink-0 p-24'>
                <img
                onClick={e => handleClick(item?.title, item?.book_image, item?.description)}
                key={item?.title}
                src={item?.book_image}
                className="shrink-0 cursor-pointer"
                />
                <h1 className="py-2">{item?.title}</h1>
                <p className="py-2 pb-2">{item?.author}</p>
                <p className="py-2 pb-2">{item?.description}</p>
                <button
                className="border-solid border-2 border-black p-2">All Bestsellers</button>
            </div>
        )
        })

    return ( 
        <div className="flex flex-wrap pt-16">
            {bestsellerLeft}
            {bestsellerRight}
        </div>
    );
}
    
export default HomeBestseller;