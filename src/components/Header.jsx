const Header = ( {image, header, subheader} ) => {
    return (
        <div>
            <h1 data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
            className="text-5xl text-left leading-snug pt-32 pl-16 w-1/2 font-serif">
                {header}
            </h1>
            <h4 data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
            className="text-2xl text-left pt-8 pb-32 leading-snug pl-16 w-1/2">
                {subheader}
            </h4>
        </div>
    );
}
 
export default Header;


