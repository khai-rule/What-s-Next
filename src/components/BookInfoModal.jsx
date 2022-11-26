const BookInfoModal = ( {open, children, onClose, book} ) => {
    
    if (!open) return null

    return (
        <div className='fixed inset-0 z-1000 bg-black bg-opacity-50'>
            <div className="flex items-center flex-col z-1000 p-32 m-40 bg-pale-yellow">
                <div className="flex items-center flex-col">
                <img src={book[1]} />
                <h1 className="text-5xl">{book[0]}</h1>
                <h3 className="text-2xl">{book[4]}</h3>
                <p>{book[2]}</p>
                <h4>Buy it:</h4>
                <a href={book[3]} target="_blank">Amazon</a>
            </div>
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </div>
    );
}
 
export default BookInfoModal;