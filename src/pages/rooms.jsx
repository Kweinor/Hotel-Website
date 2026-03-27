import myVideo from "../assets/video1.mp4";
import RoomsCard from "../roomsCard";
import { useEffect, useState } from "react";
import RoomsCardSkeleton from "../skeleton";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import MobileNavbar from "../MobileNavbar";



function Rooms(){
 const navigate = useNavigate();

 const [rooms, setRooms] = useState([]);
 const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("http://localhost:3000/api/v1/rooms")
    .then((res) => res.json())
    .then((data) => {
      setRooms(data.data.Rooms);
      setLoading(false);   // stop skeleton
    })
    .catch((err) => {
      console.log("Fetch error:", err);
      setLoading(false); // stop loading even on error
    });
}, []);


    return(
        <div >
          <MobileNavbar className="block md:hidden"/>
          <div className="hidden md:block">

           <NavBar className="hidden md:block"/>
          </div>
       
         
            <div className="relative overflow-hidden h-screen w-screen pt-20">
                <div className="z-50 flex flex-col justify-center items-center h-screen text-white relative">
                <h1 className="text-3xl md:text-6xl ">Rooms and Suites</h1>
                <p className="w-80 md:w-120 text-center">The elegant luxury bedrooms in this gallery showcase custom interior 
                designs & decorating ideas.</p>
                </div>
                      <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute top-0 left-0 object-cover z-0 w-full h-full"
                >
                  <source src={myVideo} type="video/mp4" />
                </video>
            </div>
            <div className="flex flex-col md:px-20 lg:px-40 items-center p-10 justify-center bg-orange-50">
              <div className="flex flex-col items-center justify-center ">
                  <h1 className="text-center sans-font flex gap-4 items-center text-[#8c744f]"><hr className="w-12"/>Our Rooms and Suites<hr className="w-12"/></h1>
                  <p className="text-2xl md:text-3xl serif-font ">Spaces Design For Deep Rest </p>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center lg:grid-cols-3  lg:gap-10">
            {loading
               ? Array.from({ length: 6 }).map((_, index) => (
             <RoomsCardSkeleton key={index} />
             ))
             : rooms.map((room) => (
            <RoomsCard
          key={room._id}
          picture={room.images[0]}
          roomName={room.name}
          description={room.description}
          roomPrice={`$${room.price}`}
          status={room.status}
          amenities={room.amenities}
          OnClick= {()=> navigate(`/rooms/${room._id}`)}
        />
      ))}
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Rooms;