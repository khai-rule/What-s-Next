import Loading from "../components/Loading";
import LoadingFailed from "../components/LoadingFailed";
import useFetch from "../hooks/useFetch";

const GetGenres = ( {genres} ) => {
    const API_KEY = "SlheFCnWidTnyJMGcupkk6FkcZYvN62F";

    //! Fetch Data: Genres
    const { data, status } = useFetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`)
    if (status === "loading") return <Loading />;
    if (status === "error") return <LoadingFailed />;

    genres(data)
}
 
export default GetGenres;
