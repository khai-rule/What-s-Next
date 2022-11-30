const Header = ( {image, header, subheader} ) => {
    return (
        <div>
            <h1 className="text-5xl text-left leading-snug pt-32 pl-16 w-1/2 font-serif">
                {header}
            </h1>
            <h4 className="text-2xl text-left pt-8 pb-32 leading-snug pl-16 w-1/2">
                {subheader}
            </h4>
        </div>
    );
}
 
export default Header;


