const Header = ( {image, header, subheader} ) => {
    return (
        <div>
            <h1 className="text-5xl text-left leading-snug pt-32 pl-16 w-1/2">
                {header}
            </h1>
            <p className="text-2xl text-left pt-8 pb-32 leading-snug pl-16 w-1/2">
                {subheader}
            </p>
        </div>
    );
}
 
export default Header;