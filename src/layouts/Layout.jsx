import { Outlet } from "react-router-dom";
import TopNavbar from "../components/Navbar";
import Footer from "../components/Footer";

//   <footer>footer: Made by:</footer>
function Layout( {shelf} ) {

  shelf 

  return (
    <div className="bg-pale-yellow min-h-screen">
      <TopNavbar shelf={shelf}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
