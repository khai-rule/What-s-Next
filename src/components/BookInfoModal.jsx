    import capitaliseFirstLetter from "../hooks/capitaliseFirstLetter"

const BookInfoModal = ( {open, children, onClose, bookModal} ) => {
    
    // Book Info
    const bookImg = bookModal[1]
    const bookTitle = bookModal[0]
    const bookAuthor = bookModal[4] 
    const bookDescription = bookModal[2]
    // Buy links
    const amazon = bookModal[3]

    if (!open) return null

    return (
        <>
        <div className='fixed z-1000 bg-black bg-opacity-50'>
            <div className="z-1000 mx-16 bg-pale-yellow">

                <button onClick={onClose}
                className="text-1xl text-left py-8 pl-16 hover:opacity-50">Back
                </button>

                <div className="flex m-auto">
                    <div className="flex items-center flex-col pl-24 pb-24 m-auto w-1/2">
                        <img src={bookImg} />
                    </div>
                    <div className="w-1/2 pr-32 py-16">
                        <h3 className="text-3xl py-4">{capitaliseFirstLetter(bookTitle)}</h3>
                        <h4 className="text-2xl pb-4">{bookAuthor}</h4>
                        <p className="pb-4"
                        >{bookDescription}</p>
                        <h4 className="pb-2"
                        >Buy it on:</h4>
                        <a className="hover:opacity-50"
                        href={amazon} target="_blank">Amazon</a>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}
 
export default BookInfoModal;