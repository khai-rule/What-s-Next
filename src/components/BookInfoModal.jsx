import capitaliseFirstLetter from "../utilities/capitaliseFirstLetter"
import ReactTooltip from 'react-tooltip';

const BookInfoModal = ( {open, onClose, bookModal, shelf, addShelf, removeFromShelf} ) => {
    
    
    // Book Info
    const bookImg = bookModal[1]
    const bookTitle = bookModal[0]
    const bookAuthor = bookModal[4] 
    const bookDescription = bookModal[2]
    // Buy
    const amazon = bookModal[3]

    //! Save Icons
    const bookmarkIconOutline = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
    const bookmarkIconSolid = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" /></svg>
    
  
    //! Add/remove items to/fro bookshelf
    const handleShelf = (title, img, description, amazon, author) => {
        // Find the index of item in shelf (if any)
        const getIndex = () => {
            for (let item of shelf) {
                if (item[0] === title) {
                    let i = shelf.indexOf(item)
                    console.log("index", i)
                    return i
                } else {
                    continue
                }
            }
        }
        //! If item is in shelf, remove it, otherwise add it to shelf
        shelf.some(ele => ele[0] === title) ? removeFromShelf(getIndex())
        : addShelf([title, img, description, amazon, author])
    };

    if (!open) return null

    return (
        <div className="z-50"
        data-aos="fade-in" data-aos-duration="200" data-aos-easing="ease-in-out" data-aos-once="true">
            <div className='fixed h-screen w-screen inset-0 z-50 bg-pale-yellow bg-opacity-75 md:overflow-auto'>

                <div className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 w-8/12 md:w-full h-min bg-fgreen">
                    <button onClick={onClose}
                    className="text-left relative md:absolute md:top-16 top-8 left-8 hover:opacity-50 z-50 text-pale-yellow transition duration-300 ease-in-out">Back
                    </button>

                    <div className="flex justify-center m-auto md:block">
                        <div className="flex items-center flex-col mx-8 my-16">
                            <img src={bookImg} alt={`${bookTitle}-cover`} />
                        </div>
                        <div className="w-1/3 py-auto mx-8 my-16 md:w-3/4">
                            <h1 className="text-4xl md:text-2xl text-pale-yellow">{capitaliseFirstLetter(bookTitle)}</h1>
                            <h4 className="py-4 hover:opacity-50 cursor-pointer text-pale-yellow transition duration-300 ease-in-out">{bookAuthor}</h4>
                            <p className="pb-4 text-pale-yellow"
                            >{bookDescription}</p>
                            <h3 className="pb-2 text-pale-yellow"
                            >Check it out on:</h3>
                            <h4>
                            <a className="hover:opacity-50 text-pale-yellow transition duration-300 ease-in-out font-sans-serif"
                            href={amazon} target="_blank">Amazon</a>
                            </h4>
                            <h4 className="pt-1">
                            <a className="hover:opacity-50 text-pale-yellow transition duration-300 ease-in-out font-sans-serif"
                            href={`https://www.goodreads.com/search?q=${bookTitle}`} target="_blank">Good Reads</a>
                            </h4>
                            <button data-tip={shelf.some(title => title[0] === bookTitle) ? "Remove from Bookshelf" : "Add to Bookshelf"}
                            className="hover:opacity-50 transition duration-300 ease-in-out pt-4"
                            onClick={() => handleShelf(bookTitle, bookImg, bookDescription, amazon, bookAuthor)}
                            >{shelf.some(title => title[0] === bookTitle) ? bookmarkIconSolid : bookmarkIconOutline}
                            </button>
                            <ReactTooltip className="!bg-pale-yellow !rounded-none !ml-6 !text-fgreen" arrowColor="!pale-yellow" place="right"/> 
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
 
export default BookInfoModal;