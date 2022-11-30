import 'tw-elements';

const LoadingFailed = () => {
    return (
        <>
            <div className='fixed inset-0 z-1 bg-pale-yellow bg-opacity-75 flex flex-col justify-center items-center z-50 text-center'>
                <h2>Oops ... Network Error.</h2>
                <button onClick={() => location.reload()}
                className="text-lg hover:opacity-50 transition duration-300 ease-in-out"
                >Try Again?</button>
            </div>
        </>
    );
}
 
export default LoadingFailed;


