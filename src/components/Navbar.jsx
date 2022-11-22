import { NavLink, Link } from "react-router-dom";

function TopNavbar() {
  return (
    <>
    <nav className="bg-gray-300 h-14">
        <div className="mx-auto">
            <div className="flex justify-between">
                <div>
                    <Link to="#" className="flex items-center pt-4 pl-10">Search</Link>
                </div> 
                <div>
                    <Link to="/" className="flex items-center pt-4">Logo</Link>
                </div>
                <div>
                    <Link to="#" className="flex items-center pt-4 pr-10">Favourites</Link>
                </div>
            </div>
        </div>
    </nav>

    <div className="py-10 text-center">
    </div>
    </>
  );
}
 
export default TopNavbar;
