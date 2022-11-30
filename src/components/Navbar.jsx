import { NavLink, Link, useLocation } from "react-router-dom";
import LogoActive from "../img/logo-active-01.svg"
import LogoMain from "../img/logo-main-01.svg"
 

function TopNavbar( {shelf} ) {

  //TODO link shelf to here to display items in bookshelf on navbar
  const location = useLocation();
  const inShelf = () => {
    if (shelf.length === 0) {
      return
    } else {
      return (
        <p>2</p>
      )
    }
  }

  return (
    <>
        <nav className="h-16 sticky top-0 z-10 flex">
            <div className="flex mr-auto">
                <Link to="/" className="absolute pt-5 pl-16">
                <img className="h-8 hover:opacity-0"
                src={location.pathname === "/" ? LogoActive : LogoMain}
                alt="NextBook Logo"/>
                </Link>
                <Link to="/" className="absolute pt-5 pl-16">
                <img className="h-8 opacity-0 hover:opacity-100"
                src={location.pathname === "/" ? LogoMain : LogoActive}
                alt="NextBook Logo"/>
                </Link>
            </div>
            <div className="flex ml-auto">
                <Link to="#" className="flex pt-5 pl-16 hover:opacity-50 text-lg">Find</Link>
                <Link to="/genres" className={location.pathname == "/genres" ? "flex pt-5 pl-8 opacity-50 text-lg" : "flex pt-5 pl-8 hover:opacity-50 text-lg"}>Genres</Link>
                <Link to="#" className="flex pt-5 pl-8 hover:opacity-50 text-lg">Reviews</Link>
                <Link to="/bookshelf" className={location.pathname === "/bookshelf" ? "flex pt-5 pl-8 pr-16 opacity-50 text-lg" : "flex pt-5 pl-8 pr-16 hover:opacity-50 text-lg"}>My Bookshelf {inShelf}</Link>
            </div>
        </nav>
    </>
  );
}
 
export default TopNavbar;
