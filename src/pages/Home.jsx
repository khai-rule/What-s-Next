import Header from '../components/Header';
import HomeBestsellers from '../components/HomeBestsellers';
import useFetch from "../hooks/useFetch";

const Search = ( {bookInfo} ) => {

    // const API_KEY = import.meta.env.VITE_API_KEY;
    // const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`)
    // console.log("home", BookInfo)

    const getData = (data) => {
        bookInfo(data)
    }

    return ( 
        <div className='bg-pale-yellow'>
        <Header
        header={"Nextread is a book searching platform created to help readers find their next read. Browse through the bestsellers to discover new books."}
        subheader={"Designed by readers, for readers."}
        />
        <div>
            <HomeBestsellers datas={getData}/>
        </div>
        </div>
    );
}
    
export default Search;
