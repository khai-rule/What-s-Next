import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import Results from './SearchResults';

const Search = () => {

    const [text, setText] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search-results/${text}`) 
    }

    return ( 
        <div className="flex items-center flex-col">
            <form onSubmit={handleSubmit}>
            <h1>Search Books</h1>
                <label>
                    <input type="text" name="search" placeholder='Enter a book name...' onChange={e => setText(e.target.value)} />
                </label>
                <input type="submit" value="Search" />
            </form>
            </div>
    );
}
    
export default Search;