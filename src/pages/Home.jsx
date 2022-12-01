import Header from '../components/Header';
import HomeSectionOne from '../components/HomeSectionOne';

const Search = () => {

    return ( 
        <div className='bg-pale-yellow'>
            <Header
            header={"nextBook is an international collaborative library platform to help readers find their next read. We work with a community of readers for a human-centric approach in suggesting new books to explore."}
            subheader={"Designed for readers, by readers."}/>
            <div>
                <HomeSectionOne/>
            </div>
        </div>
    );
}
    
export default Search;
