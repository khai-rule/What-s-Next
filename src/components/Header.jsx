const Header = ( {image, header, subheader} ) => {
    return (
        <div>
            <h1 data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
            className="text-left leading-snug pt-32 ml-16 md:mx-8 md:w-full w-1/2 font-serif">
                {header}
            </h1>
            <h4 data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
            className="text-2xl lg:text-xl text-left pt-8 pb-32 leading-snug ml-16 md:mx-8 w-1/2">
                {subheader}
            </h4>
        </div>
    );
}
 
export default Header;


