import { NavLink, Link, useLocation } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="h-40 pt-20 bottom-0 z-10 flex sticky top-[100vh]">
                <div className="flex mr-auto">
                    <h4 className="absolute pt-6 pl-16 text-sm opacity-75">BrandName copyright 2022</h4>
                </div>
                <div className="flex ml-auto">
                    <Link to="/bookshelf" className="flex pt-5 pl-8 pr-16 hover:opacity-50 text-md">About</Link>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;