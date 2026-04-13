import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function NavBar(){
   const navigate = useNavigate();
   return(
    <div className="fixed flex items-center z-100 sans-font bg-white justify-between shadow p-20 w-full py-4">
      
     <div>
         <h1 className={`font-bold arvo-font text-xl `}><span >KINGSLAND HOTEL</span></h1>
     </div>
     <div className="w-100 flex justify-between capitalize text-md">
        <Link className="hover:border-b-2 capitalize text-sm" to="/">HOME</Link>
        <Link className="hover:border-b-2 capitalize text-sm" to="/explore">EXPLORE</Link>
        <Link className="hover:border-b-2 capitalize text-sm" to="/rooms">ROOMS</Link>
        <Link className="hover:border-b-2 capitalize text-sm" to="/contact">CONTACT</Link>
        <Link className="hover:border-b-2 capitalize text-sm" to="/about">ABOUT</Link>
     </div>
     <div>
        <button onClick={()=>navigate('/rooms')} className=" pointer bg-[#081628] py-2 px-4 text-amber-50">Book now</button>
     </div>
    </div>)
}
export default NavBar;