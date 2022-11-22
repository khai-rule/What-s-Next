import { Outlet } from "react-router-dom";
import TopNavbar from "../components/Navbar";

//   <footer>footer: Made by:</footer>
function Layout() {
  return (
    <>
      <TopNavbar />
      <main>
        <Outlet />
      </main>
      </>
  );
}

export default Layout;
