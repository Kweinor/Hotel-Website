import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function Footer(){
    const Navigate = useNavigate();
    return(
        <div className="bg-[#081628] text-sm text-gray-600">
            <div className="flex flex-col md:flex-row gap-10 lg:gap-30 w-full p-10 lg:p-20 justify-center bg-[#081628] text-gray-600" >
            <div className=" w-80 md:w-100 ">
     <h3 className="text-large bold text-[#8c744f]">Paradise view</h3>
     <p>The service at the Hotel Monteleone was exceptional. There was absolutely no issue that
         was not addressed timely and with satisfactory results. We were particulary impressed with how the 
        hotel staff anticipated our needs (periodically coming by the Board Room to check with us)</p>
        </div>
        <div className="flex flex-col md:flex-row gap-15">
        <div className="flex text-sm flex-col space-y-2">
            <h4 className="text-sm text-[#8c744f] sans-font">QUICK LINKS</h4>
            <Link to="/">Home</Link>
            <Link to="/rooms" >Rooms</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/explore">Explore</Link>
        </div>
        <div className="flex text-sm flex-col space-y-2">
            <h4 className="text-sm text-[#8c744f] sans-font">COMPANY</h4>
            <Link to="">Privacy policy</Link>
            <Link to="">Refund policy</Link>
            <Link to="">F.A.Q</Link>
            <Link to="">About</Link>
        </div>
        <div className="flex-col text-sm w-80 md:w-100">
            <h4 className="text-md text-[#8c744f] sans-font">Social media</h4>
      <div className="flex gap-4 mt-4">
        <FaFacebookF onClick={()=>Navigate('https://www.facebook.com')} size={40} className="text-gray-600 hover:text-gray-400 border p-3 border-gray-600 cursor-pointer"/>
        <FaTwitter onClick={()=>Navigate('https://www.twitter.com')} size={40} className="text-gray-600 hover:text-gray-400 border p-3 border-gray-600 cursor-pointer"/>
        <FaInstagram onClick={()=>Navigate('https://www.instagram.com')} size={40} className="text-gray-600 hover:text-gray-400 border p-3 border-gray-600 cursor-pointer"/>
        <FaLinkedinIn onClick={()=>Navigate('https://www.linkedin.com')} size={40} className="text-gray-600 hover:text-gray-400 border p-3 border-gray-600 cursor-pointer"/>
      </div>
      </div>
        </div>
        </div>
<div className=" bottom-2 text-sm border-t w-full p-5 text-center">
   <span>&copy; 2024 Paradise View. All rights reserved.</span> 
</div>
        </div>

    )
}
export default Footer;