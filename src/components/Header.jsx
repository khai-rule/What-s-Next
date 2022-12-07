const Header = ( {image, header, subheader} ) => {
    return (
        <div>
            <h1 data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
            className="text-left leading-snug mt-32 ml-16 md:mx-4 md:w-auto md:mt-16 w-1/2 font-serif">
                {header}
            </h1>
            <h4 data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
            className="text-2xl lg:text-xl text-left mt-8 mb-32 md:mb-20 leading-snug ml-16 md:mx-4 w-1/2">
                {subheader}
            </h4>
        </div>
    );
}
 
export default Header;


