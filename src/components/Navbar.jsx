import { NavLink, Link } from "react-router-dom";

function TopNavbar() {
  return (
    <>
        <nav className="h-16 sticky top-0 z-1 flex">
            <div className="flex mr-auto">
                <Link to="/" className="absolute pt-5 pl-16">Logo</Link>
            </div>
            <div className="flex ml-auto">
                <Link to="#" className="flex pt-5 pl-16">Find</Link>
                <Link to="/bestsellers" className="flex pt-5 pl-8">Bestsellers</Link>
                <Link to="#" className="flex pt-5 pl-8">Reviews</Link>
                <Link to="/bookshelf" className="flex pt-5 pl-8 pr-16">My Bookshelf</Link>
            </div>
        </nav>
    </>
  );
}
 
export default TopNavbar;
