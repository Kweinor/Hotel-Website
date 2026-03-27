import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

 
 
 function Layout(){
    return(
    <div>
        <div>
            <NavBar/>
        </div>
        <main>
          <Outlet/>
        </main>
        <div>
          <Footer/>
        </div>
    </div>)
 }
 export default Layout;