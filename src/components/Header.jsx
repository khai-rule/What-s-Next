const Header = ({ header, subheader }) => {
  return (
    <div>
      <h1
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="text-8xl text-justify leading-[100px] mt-16 mx-16 md:mx-4 md:w-auto md:mt-16 md:text-4xl md:leading-snug md:text-left font-serif"
      >
        {header}
      </h1>
      <h4
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="text-2xl lg:text-xl text-center mt-12 mb-48 md:mb-20 leading-snug ml-16 md:mx-4 md:text-left"
      >
        {subheader}
      </h4>
    </div>
  );
};

export default Header;
