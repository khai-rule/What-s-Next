import { useState } from "react";
import { useEffect } from "react";

const bestseller = () => {
    
    const [cards, setCards] = useState([]);
    const [status, setStatus] = useState("idle");
  
    useEffect(() => {
      const fetchBestsellers = async () => {
        try {
          const request = await fetch(
            `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=SlheFCnWidTnyJMGcupkk6FkcZYvN62F`
          );
          if (!request.ok) {
            throw new Error("Network error");
          }
          const data = await request.json();
          console.log(data)
          setCards(data);
          setStatus("done");
        } catch (error) {
          console.error(error);
          setStatus("error");
        }
      };
      setStatus("loading");
      fetchBestsellers();
    }, []);
  
    //* return anything -> not JSX
    return { cards, status };
  }

  export default bestseller;
  