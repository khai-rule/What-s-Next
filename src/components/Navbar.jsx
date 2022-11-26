import { NavLink, Link } from "react-router-dom";

function TopNavbar() {
  return (
    <>
        <nav className="h-16 sticky top-0 z-1 bg-pale-yellow">
            <div className="mx-auto">
                <div className="flex justify-between">
                    <div className="flex">
                        <Link to="#" className="flex items-center pt-5 pl-16">Find</Link>
                        <Link to="/bestsellers" className="flex items-center pt-5 pl-16">Bestsellers</Link>
                    </div> 
                    <div>
                        <Link to="/" className="flex items-center pt-5">Logo</Link>
                    </div>
                    <div>
                        <Link to="/bookshelf" className="flex items-center pt-5 pr-16">My Bookshelf</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
}
 
export default TopNavbar;
