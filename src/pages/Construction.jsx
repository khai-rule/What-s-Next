import { useNavigate } from 'react-router-dom';
const Construction = () => {
    
const navigate = useNavigate();

    return (
        <div onClick={() => navigate(-1)}
        data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
        className='fixed inset-0 z-1 bg-pale-yellow flex flex-col justify-center items-center z-50 text-center'>
            <h2>Oops ... It's not ready yet.</h2>
            <div className="flex flex-col">
                <p className='py-2 z-50'>Look out for further developments in the future!</p>  
                <h4 className='py-2 z-50'>Click anywhere to go back.</h4>  
            </div>
        </div>
    );
}
 
export default Construction;