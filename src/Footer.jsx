import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="bg-[#081628] text-sm text-gray-600">
            <div className="flex flex-col md:flex-row gap-10 w-full p-10 lg:p-20 justify-center bg-[#081628] text-gray-600" >
            <div className=" w-80 md:w-100 ">
     <h3 className="text-large bold text-[#8c744f]">Paradise view</h3>
     <p>The service at the Hotel Monteleone was exceptional. There was absolutely no issue that
         was not addressed timely and with satisfactory results. We were particulary impressed with how the 
        hotel staff anticipated our needs (periodically coming by the Board Room to check with us)</p>
        </div>
        <div className="flex text-sm flex-col space-y-2">
            <h4 className="text-sm text-[#8c744f] sans-font">QUICK LINKS</h4>
            <Link to="/bookings">Room booking</Link>
            <Link to="/rooms" >Rooms</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/explore">Explore</Link>
        </div>
        <div className="flex text-sm flex-col space-y-2">
            <h4 className="text-sm text-[#8c744f] sans-font">COMPANY</h4>
            <Link to="/bookings">Privacy policy</Link>
            <Link to="/bookings">Refund policy</Link>
            <Link to="/bookings">F.A.Q</Link>
            <Link to="/bookings">About</Link>
        </div>
        <div className="flex-col text-sm w-80 md:w-100">
            <h4 className="text-md text-[#8c744f] sans-font">Social media</h4>
        <p className="pt-2">Kindly subscribe to our newsletter to get
           latest deals on our rooms and vacation
           discount.</p>
           <input type="text" className="border-2"/>
        </div>
        </div>
<div className=" bottom-2 text-sm border-t w-full p-5 text-center">
   <span>&copy; 2024 Paradise View. All rights reserved.</span> 
</div>
        </div>

    )
}
export default Footer;