import myVideo from "../assets/video1.mp4";
import Footer from "../Footer";
import NavBar from "../NavBar";
import MobileNavbar from "../MobileNavbar";

function Explore(){
    return(
    <div id="explore" className="flex flex-col">
      <div className="hidden md:block">
      <NavBar/>
      </div>
      <div>
        <MobileNavbar/>
      </div>
    <div className="relative h-screen">
      <video
  autoPlay
  muted
  loop
  playsInline
  className=" object-cover z-0 w-full h-full"
>
  <source src={myVideo} type="video/mp4" />
</video>
</div>
<div className="pb-20 ">


  <div className="flex flex-col justify-center items-center py-10 px-8 md:px-30 w-full">
    <img className="my-6 h-30 md:h-min rounded-3xl" src="room-interior-hotel-bedroom.jpg" alt="gym" />
    <div className="flex flex-col justify-center z-auto -mt-20 md:-mt-30 content-center items-center w-70 md:w-120 lg:w-180 bg-[#081628]  rounded-2xl shadow-2xl  ">
      <div className="bg-white p-8 rounded-b-2xl mt-4">
      <h3 className="text-2xl">Accommodation</h3>
      <p className="mt-4 text-sm">The elegant luxury bedrooms in this gallery showcase custom interior designs 
        & decorating ideas. View pictures and find your perfect luxury bedroom design.
        Luxurious bedrooms that will make you never 
        want to leave your room again. See more ideas about luxurious bedrooms, bedroom design</p>
    </div>
    </div>
    </div>
  <div className="flex flex-col justify-center items-center py-10 px-8 md:px-30 w-full">
    <img className="my-6 h-50 md:h-min" src="gym.png" alt="gym" />
    <div className="flex flex-col justify-center z-auto -mt-20 md:-mt-30 content-center items-center w-70 md:w-120 lg:w-180 bg-[#081628]  rounded-2xl shadow-2xl  ">
      <div className="bg-white p-8 rounded-b-2xl mt-4">
      <h3 className="text-2xl">Gym center</h3>
      <p className="mt-4 text-sm">The elegant luxury bedrooms in this gallery showcase custom interior designs 
        & decorating ideas. View pictures and find your perfect luxury bedroom design.
        Luxurious bedrooms that will make you never 
        want to leave your room again. See more ideas about luxurious bedrooms, bedroom design</p>
    </div>
    </div>
    </div>
  <div className="flex flex-col justify-center items-center py-10 px-8 md:px-30 w-full">
    <img className="my-6 h-50 md:h-min" src="Restaurant.png" alt="gym" />
    <div className="flex flex-col justify-center z-auto -mt-20 md:-mt-30 content-center items-center w-70 md:w-120 lg:w-180 bg-[#081628]  rounded-2xl shadow-2xl  ">
      <div className="bg-white p-8 rounded-b-2xl mt-4">
      <h3 className="lg:text-2xl -mt-4">Resturant & Bar</h3>
      <p className="mt-4 text-sm">The elegant luxury bedrooms in this gallery showcase custom interior designs 
        & decorating ideas. View pictures and find your perfect luxury bedroom design.
        Luxurious bedrooms that will make you never 
        want to leave your room again. See more ideas about luxurious bedrooms, bedroom design</p>
    </div>
    </div>
    </div>
  


 </div>
<Footer/>
    </div>
    )
   }
   
   export default Explore;