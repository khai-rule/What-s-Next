import Header from '../components/Header';
import HomeBestsellers from '../components/HomeBestsellers';
import useFetch from "../hooks/useFetch";

const Search = () => {

    const API_KEY = import.meta.env.VITE_API_KEY;
    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`)


    return ( 
        <div className='bg-pale-yellow'>
        <Header
        header={"Nextread is a book searching platform created to help readers find their next read. Browse through hundereds of genres to discover thousands of books."}
        subheader={"Designed for readers, by a reader."}
        />
        <div>
            <HomeBestsellers />
        </div>
        </div>
    );
}
    
export default Search;
