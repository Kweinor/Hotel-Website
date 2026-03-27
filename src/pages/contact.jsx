import Message from "../mail";
import NavBar from "../NavBar";
import MapComponent from "../map";
import Footer from "../Footer";
import MobileNavbar from "../MobileNavbar";

function Contact(){
    return(
        <div id="contact">
            <MobileNavbar/>
            <div className="hidden md:block">
            <NavBar/>
            </div>
        <img className="h-screen lg:pt-18 w-full object-cover" src="medium-shot-woman-talking-phone.jpg" alt="" />
        <div className="flex justify-center">
<Message/>
        </div>
        <div className="flex justify-center pt-20 mt-10">
            <MapComponent/>
        </div>
        <Footer/>
</div>
    ) 
}
export default Contact;
