const Bookshelf = ( {shelf} ) => {


    const getBooksFromLS = localStorage.getItem("books")
    const booksParsed = JSON.parse(getBooksFromLS)
    console.log(booksParsed)

    return (
        <>
        <h1>My Bookshelf</h1>
        </>
        );
    }
    
    export default Bookshelf;

/*
    // <h1>{shelf[0[0]]}</h1>
    // {shelf.map((item) => (
    //     <>
    //         <img key={item[0]} src={item[1]} />
    //         <h1>{item[0]}</h1>
    //         <p>{item[4]}</p>
    //         <p>{item[2]}</p>
    //     </>
    // ))}
    */