import Footer from "./Footer";
import NavBar from "./NavBar";
import Testimonies from "./Testimonies";
import Facilities from "./facilities";
import BookAtHome from "./homepagebook";
import { FaPlayCircle } from "react-icons/fa";
import MobileHome from "./mobileHome";
import LuxuryRooms from "./luxuriousRooms";
//import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { useQuery } from '@tanstack/react-query';

function Home(){
const { data: Rooms = [], isLoading, error } = useQuery({
  queryKey: ["Rooms"],
  queryFn: async () => {
    const res = await fetch("http://localhost:3000/api/v1/rooms?sort=-price&limit=3");
    if (!res.ok) throw new Error("Failed to fetch");

    const result = await res.json();
    return result.data.Rooms;
  }
});

   {/* const [rooms, setRooms] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/api/v1/rooms?sort=-price&limit=3")
        .then((res)=>res.json())
        .then((data)=> setRooms(data.data.Rooms))
        
    },[]);
  */}
    return(
              <div>
           
        <div className="">
          <MobileNavbar/>
            <div className="hidden md:block">
            <NavBar/>
            </div>
            <div>
            <div className="flex flex-col md:flex-row justify-center md:justify-between gap-30 px-10  md:px-30">
               <div className="mt-40">
                <span className="flex justify-center text-center">Paradise View</span>
                <h1 className="text-2xl md:text-7xl w-80 md:w-120 fl items-center">Hotel for every moment rich in emotion</h1>
                <p>Every moment feels like the first time in paradise view</p>
                <div className=" flex gap-12 mt-8">
                    <button className="py-3 px-5 bg-gray-700 rounded-3xl text-amber-50" type="button">Book now</button>
                    <button className="flex items-center gap-2" type="button"><FaPlayCircle size={30} className="text-[#00A699]"/> Take a tour</button>
                </div>
               </div>
               <div>
                <figure>
                    <img className="h-156 w-140 hidden md:block shadow-2xl  mt-30" src="hero.jpeg" alt="outsideView" />
                </figure>
               </div>
            </div>
            <div className="justify-center flex ">

               <BookAtHome className="sm:hidden"/>
            </div>
            </div>
       
      <Facilities />
      
      <div className="bg-[#F5F5F4] flex flex-col items-center text-white p-6 bg-cover h-120">
          
             <div className="z-50  text-white">
            <h1 className="flex sans-font items-center gap-4 justify-center text-[#8c744f]"><hr className="w-6"/>Luxurious Rooms <hr className="w-6"/></h1>
            <p className="text-3xl serif-font text-[#081628]">All room are design for your comfort</p>
            </div>
            <div className="flex gap-15 mt-8">
              
             {isLoading ? (
    <p>Loading rooms...</p>
  ) : error ? (
    <p>Error loading rooms</p>
  ) : (
    Rooms.map((room) => {
      const firstImage = room?.images?.[0];
      const imageUrl = firstImage
        ? firstImage.startsWith("http")
          ? firstImage
          : `http://localhost:3000/${firstImage}`
        : undefined;

      return (
        <LuxuryRooms
          key={room?._id}
          image={imageUrl}
          price={room?.price}
          name={room?.name}
          amenities={room?.amenities || []}
        />
      );
    })
  )}
            </div>
      </div>
            <div>
       <Testimonies/>
                    </div>

      <Footer/>
       </div>
        </div>
    )
}
export default Home;