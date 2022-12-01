import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
    
const navigate = useNavigate();

    return (
        <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
        className='fixed inset-0 z-1 bg-pale-yellow flex flex-col justify-center items-center z-50 text-center'>
            <h2>Oops ... Page not Found.</h2>
            <div className="flex">
                <button onClick={() => navigate("/")}
                className="text-lg hover:opacity-50 transition duration-300 ease-in-out px-2"
                >Take Me Home</button>    
            </div>
        </div>
    );
}
 
export default PageNotFound;