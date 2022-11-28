import { NavLink, Link, useLocation } from "react-router-dom";

function TopNavbar() {

  const location = useLocation();

  return (
    <>
        <nav className="h-16 sticky top-0 z-10 flex">
            <div className="flex mr-auto">
                <Link to="/" className="absolute pt-5 pl-16">Logo</Link>
            </div>
            <div className="flex ml-auto">
                <Link to="#" className="flex pt-5 pl-16 hover:opacity-50">Find</Link>
                <Link to="/bestsellers" className={location.pathname == "/bestsellers" ? "flex pt-5 pl-8 opacity-50" : "flex pt-5 pl-8 hover:opacity-50"}>Bestsellers</Link>
                <Link to="#" className="flex pt-5 pl-8 hover:opacity-50">Reviews</Link>
                <Link to="/bookshelf" className={location.pathname == "/bookshelf" ? "flex pt-5 pl-8 pr-16 opacity-50" : "flex pt-5 pl-8 pr-16 hover:opacity-50"}>My Bookshelf</Link>
            </div>
        </nav>
    </>
  );
}
 
export default TopNavbar;
