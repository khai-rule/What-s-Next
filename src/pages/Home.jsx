import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import Results from './SearchResults';
import bestseller from '../API/bestseller';

const Search = () => {

    const [bs, setBs] = useState([]);
    const [status, setStatus] = useState("idle");
  
    useEffect(() => {
      const fetchBestsellers = async () => {
        try {
          const request = await fetch(
            `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=SlheFCnWidTnyJMGcupkk6FkcZYvN62F`
          );
          if (!request.ok) {
            throw new Error("Network error");
          }
          const data = await request.json();
          setBs(data.results.books);
          setStatus("done");
        } catch (error) {
          console.error(error);
          setStatus("error");
        }
      };
      setStatus("loading");
      fetchBestsellers();
    }, []);

    const bestseller = bs.slice(0, 4).map((item, i) => {
    return (
        <div className='py-4'>
        <img key={i}
        src={item?.book_image}
        />
        <h3>{item?.title}</h3>
        </div>
    )
    })

    return ( 
        <div className="h-screen p-16 grid grid-cols-2 grid-rows-4 gap-6">

            {bestseller}
        </div>
    );
}
    
export default Search;
