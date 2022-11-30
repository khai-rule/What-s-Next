import Header from '../components/Header';
import HomeSectionOne from '../components/HomeSectionOne';

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
            header={"nextBook is an international collaborative library platform to help readers find their next read. We work with a community of readers for a human-centric approach in suggesting new books to explore."}
            subheader={"Designed by readers, for readers."}/>
            <div>
                <HomeSectionOne datas={getData}/>
            </div>
        </div>
    );
}
    
export default Search;
