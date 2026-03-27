import { Link } from "react-router-dom";


function NavBar(){
   return(
    <div className="fixed flex items-center z-50 sans-font bg-white justify-between shadow p-20 w-full py-4">
      
     <div>
        <img src="logo.png" alt="Hotel Logo"/>
     </div>
     <div className="w-100 flex justify-between capitalize text-md">
        <Link className="hover:border-b-2 capitalize text-sm" to="/">HOME</Link>
        <Link className="hover:border-b-2 capitalize text-sm" to="/explore">EXPLORE</Link>
        <Link className="hover:border-b-2 capitalize text-sm" to="/rooms">ROOMS</Link>
        <Link className="hover:border-b-2 capitalize text-sm" to="/contact">CONTACT</Link>
        <Link className="hover:border-b-2 capitalize text-sm" to="/about">ABOUT</Link>
     </div>
     <div>
        <button  className=" pointer bg-[#081628] py-2 px-4 text-amber-50">Book now</button>
     </div>
    </div>)
}
export default NavBar;