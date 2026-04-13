import { useState, useEffect } from "react";
function Header() {
     const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const date = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });


    return(
        <div className="flex shadow-md fixed bg-white w-full top-0 justify-between items-center p-4 ">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
               <div>
                <p className="text-sm text-gray-500">{date}</p>
                
               </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    Create
                </button>
            </div>
        </div>
    )
}

export default Header;