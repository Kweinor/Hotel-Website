

function FacilityCard({icon,FacilityName}){
    return (
        <div className="flex flex-col w-30 p-4 md:w-50 justify-center items-center rounded-sm md:p-10 text-gray-700 bg-gray-200">
          <div className="flex justify-center items-center">{icon}  </div> 
          <span className="flex justify-center">{FacilityName}</span>
        </div>
    )
}
export default FacilityCard;