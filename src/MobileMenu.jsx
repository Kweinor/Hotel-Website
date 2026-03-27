import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function MobileMenu({setOpen}) {

    return(
        <div className="sm:hidden">
        <div className="fixed inset-0 backdrop-blur-lg z-50">
            <div className="fixed top-0 left-0  w-full bg-white  p-6 shadow-lg">

            <button onClick={()=>setOpen(false)} className="">
                <X size={24} />
            </button>
            <nav className="flex flex-col gap-6 py-10 ">
                <a href="/" onClick={() => setOpen(false)} className=" hover:bg-gray-600 hover:text-amber-50 rounded-md p-2 scroll-smooth">Home</a>
                <a href="explore" onClick={() => setOpen(false)} className="hover:bg-gray-600 hover:text-amber-50 rounded-md p-2 scroll-smooth">Explore</a>
                <a href="rooms" onClick={() => setOpen(false)} className="hover:bg-gray-600 hover:text-amber-50 p-2 rounded-md scroll-smooth">Rooms</a>
                <a href="about" onClick={() => setOpen(false)} className=" hover:bg-gray-600 hover:text-amber-50 p-2 rounded-md scroll-smooth">About</a>
                <a href="contact" onClick={() => setOpen(false)} className=" hover:bg-gray-600 hover:text-amber-50 p-2 rounded-md scroll-smooth">Contact</a>
            </nav>
            </div>
        </div>
        </div>
    )
}
export default MobileMenu;