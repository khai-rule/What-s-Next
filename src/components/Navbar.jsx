import { Link, useLocation } from "react-router-dom";
import LogoActive from "../img/logo-active-01.svg"
import LogoMain from "../img/logo-main-01.svg"
import { useState } from "react";

function TopNavbar( {shelf} ) {

  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  
  // Show number of items in shelf on navbar
  const inShelf = () => {
    if (shelf.length === 0) {
      return
    } else {
      return (
        <p className="font-sans-serif text-sm ml-1"
        >{shelf.length}</p>
      )
    }
  }

  const handleClick = (status) => {
    setOpenMenu(status)
  };


//! Mobile Menu Bar
  const mobileMenu = () => {
    if (openMenu) {
      return (
        <div data-aos="fade-in" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true">
          <div className='fixed inset-0 z-1 bg-fgreen z-50 hidden md:flex flex-col justify-center items-center'>
            <button onClick={() => handleClick(false)}
            className="text-pale-yellow text-lg absolute right-8 top-5">Back</button>
            <div className="justify-center items-center flex text-center">
              <ul>
              <li>
                <Link to="/find" 
                onClick={() => handleClick(false)}
                className={location.pathname === "/find" ? "m-5 opacity-50 text-lg text-pale-yellow" : "text-pale-yellow m-5 hover:opacity-50 text-lg transition duration-300 ease-in-out"}>Find</Link>
              </li>
                <li>
                  <Link to="/books/recommended"
                  className={location.pathname === "/books/recommended" ? "text-lg m-5 text-pale-yellow opacity-50 transition duration-300 ease-in-out" : "text-lg m-5 text-pale-yellow"} 
                  onClick={() => handleClick(false)}
                  >Recommended</Link>
                </li>
                <li>
                  <Link to="/books/allbooks"
                  className={location.pathname === "/books/allbooks" ? "text-lg m-5 text-pale-yellow opacity-50 transition duration-300 ease-in-out" : "text-lg m-5 text-pale-yellow"} 
                  onClick={() => handleClick(false)}
                  >All Books</Link>
                </li>
                <li>
                  <Link to="/reviews" 
                  onClick={() => handleClick(false)}
                  className={location.pathname === "/reviews" ? "m-5 opacity-50 text-lg text-pale-yellow" : "text-pale-yellow m-5 hover:opacity-50 text-lg transition duration-300 ease-in-out"}>Reviews</Link>
                </li>
                <li>
                  <Link to="/bookshelf" 
                  onClick={() => handleClick(false)}
                  className={location.pathname === "/bookshelf" ? "m-5 opacity-50 text-lg text-pale-yellow" : "text-pale-yellow m-5"}>My Bookshelf {inShelf()}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

  // turn arrow up
// d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"


  const genresDropdown = () => {

    return (
      <div className="flex justify-center">
        <div>
          <div className="dropdown relative">
            <a 
              className="dropdown-toggle text-fgreen text-lg hover:opacity-50 transition duration-300 ease-in-out flex items-center m-5" 
              href="#"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Books
              <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512">
                <path fill="currentColor" d= "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
              </svg>
            </a>
            <ul
                className="dropdown-menu min-w-max absolute z-50 float-left py-2 list-none text-left mt-1 hidden m-0"
                aria-labelledby="dropdownMenuButton2">
              <li>
                <Link to="/books/recommended"
                className={location.pathname === "/books/recommended" ? "dropdown-item text-sm py-2 px-4 block w-full text-fgreen opacity-50 transition duration-300 ease-in-out" : "dropdown-item text-sm py-2 px-4 block w-full text-fgreen hover:opacity-50 transition duration-300 ease-in-out"} 
                >Recommended</Link>
              </li>
              <li>
                <Link to="/books/allbooks"
                className={location.pathname === "/books/allbooks" ? "dropdown-item text-sm py-2 px-4 block w-full text-fgreen opacity-50 transition duration-300 ease-in-out" : "dropdown-item text-sm py-2 px-4 block w-full text-fgreen hover:opacity-50 transition duration-300 ease-in-out"} 
                >All Books</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
    <div className="sticky top-0 z-50"
    data-aos="fade-in" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-once="true">
        <nav className="h-16 z-10 flex">
            <div className="flex mr-auto">
                <Link to="/" className="absolute m-5 ml-16 md:ml-8">
                <img className="h-8 opacity-100 hover:opacity-0 transition duration-300 ease-in-out"
                src={location.pathname === "/" ? LogoActive : LogoMain}
                alt="NextBook Logo"/>
                </Link>
                <Link to="/" className="absolute m-5 ml-16 md:ml-8">
                <img className="h-8 opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                src={location.pathname === "/" ? LogoMain : LogoActive}
                alt="NextBook Logo"/>
                </Link>
            </div>
            <div className="flex ml-auto md:hidden">
                <Link to="/find" className={location.pathname === "/find" ? "flex m-5 opacity-50 text-lg" : "flex m-5 hover:opacity-50 text-lg transition duration-300 ease-in-out"}>Find</Link>
                {genresDropdown()}
                <Link to="/reviews" className={location.pathname === "/reviews" ? "flex m-5 opacity-50 text-lg" : "flex m-5 hover:opacity-50 text-lg transition duration-300 ease-in-out"}>Reviews</Link>
                <Link to="/bookshelf" className={location.pathname === "/bookshelf" ? "flex m-5 mr-12 opacity-50 text-lg" : "flex m-5 mr-16 hover:opacity-50 text-lg transition duration-300 ease-in-out"}>My Bookshelf {inShelf()}</Link>
            </div>

            <div className="hidden md:flex">
              <button onClick={() => handleClick(true)}
              className="flex m-5 mr-8 text-lg">Menu</button>
            </div>

            {mobileMenu()}

        </nav>
    </div>

    
    
    
    </>
  );
}
 
export default TopNavbar;
