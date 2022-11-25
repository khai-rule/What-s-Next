import { NavLink, Link } from "react-router-dom";

function TopNavbar() {
  return (
    <>
        <nav className="h-16 sticky top-0 z-50">
            <div className="mx-auto">
                <div className="flex justify-between">
                    <div>
                        <Link to="#" className="flex items-center pt-5 pl-16">Find</Link>
                    </div> 
                    <div>
                        <Link to="/" className="flex items-center pt-5">Logo</Link>
                    </div>
                    <div>
                        <Link to="#" className="flex items-center pt-5 pr-16">My Bookshelf</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
}
 
export default TopNavbar;
