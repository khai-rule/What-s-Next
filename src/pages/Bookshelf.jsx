const Bookshelf = ( {shelf} ) => {

    console.log(shelf[0][0])

    return (
        <>
        <h1>My Bookshelf</h1>
        <h1>{shelf[0[0]]}</h1>
        {shelf.map((item) => (
            <>
                <img key={item[0]} src={item[1]} />
                <h1>{item[0]}</h1>
                <p>{item[4]}</p>
                <p>{item[2]}</p>
            </>
        ))}
        </>
    );
}
 
export default Bookshelf;