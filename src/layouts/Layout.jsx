import { Outlet } from "react-router-dom";
import TopNavbar from "../components/Navbar";

//   <footer>footer: Made by:</footer>
function Layout() {
  return (
    <div className="bg-pale-yellow">
      <TopNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
