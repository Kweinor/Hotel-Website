import MobileNavbar from "./MobileNavbar"

function MobileHome(){
    return(
        <div>
            <MobileNavbar/>
            <div>
                <input className="border h-4 w-60" type="search" name="search" id="search" />
            </div>
            <div className="mt-4">
                <img  className="p-8" src="sunset-pool.jpg" alt="homeImage" />
            </div>
            <div className="flex justify-end items-center gap-10 px-8">
                <p className="flex text-center text-2xl">Choose one</p>
                <span className="flex text-right">view all</span>
            </div>
        </div>
    )
}
export default MobileHome