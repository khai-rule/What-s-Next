import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true"
            className="h-40 pt-20 bottom-0 z-10 flex sticky top-[100vh]">
                <div className="flex mr-auto">
                    <h4 className="absolute pt-6 pl-16 text-sm opacity-75">© 2022, nextBook. For readers, by readers </h4>
                </div>
                <div className="flex ml-auto">
                    <a href="https://developer.nytimes.com/" target="_blank" className="flex pt-6 pl-8 pr-16 hover:opacity-50 text-sm transition duration-300 ease-in-out">Powered by NY Times API</a>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;