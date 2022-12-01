    import capitaliseFirstLetter from "../hooks/capitaliseFirstLetter"

const BookInfoModal = ( {open, onClose, bookModal} ) => {
    
    // Book Info
    const bookImg = bookModal[1]
    const bookTitle = bookModal[0]
    const bookAuthor = bookModal[4] 
    const bookDescription = bookModal[2]
    // Buy links
    const amazon = bookModal[3]

    if (!open) return null

    return (
        <div className="z-100"
        data-aos="fade-in" data-aos-duration="200" data-aos-easing="ease-in-out" data-aos-once="true">
        <div className='fixed inset-0 z-50 bg-pale-yellow bg-opacity-75'>

            <div className="z-1000 m-auto mt-36 max-w-screen-lg bg-fgreen">

                <button onClick={onClose}
                className="text-left py-8 pl-16 hover:opacity-50 z-50 text-pale-yellow transition duration-300 ease-in-out">Back
                </button>

                <div className="flex m-auto justify-center">
                    <div className="flex items-center flex-col pb-24 mx-0 h-5/6">
                        <img src={bookImg} alt={`${bookTitle}-cover`} />
                    </div>
                    <div className="w-1/3 py-16 pl-16">
                        <h1 className="text-4xl text-pale-yellow">{capitaliseFirstLetter(bookTitle)}</h1>
                        <h4 className="py-4 hover:opacity-50 cursor-pointer text-pale-yellow transition duration-300 ease-in-out">{bookAuthor}</h4>
                        <p className="pb-4 text-pale-yellow"
                        >{bookDescription}</p>
                        <h3 className="pb-2 text-pale-yellow"
                        >Buy it on:</h3>
                        <a className="hover:opacity-50 text-pale-yellow transition duration-300 ease-in-out"
                        href={amazon} target="_blank">Amazon</a>
                    </div>
                </div>

            </div>

        </div>
        </div>
    );
}
 
export default BookInfoModal;