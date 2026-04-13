

function DashboardCard({header,icon,content,color}){
    return(
        <div className={`w-80 h-25 md:w-60 relative flex rounded-l-sm rounded-r-md border border-gray-300 md:h-30 shadow-sm ${color}`}>
            <div className={`w-1.5 ${color} h-full absolute left-0 top-0 rounded-l-xl`}></div>
        <div className="flex flex-col w-full pl-4 rounded-l-md rounded-r-sm  h-full bg-white">
         <div className=" flex flex-col ">
           <div className="pt-4">
                <h2 className="text-[12px] text-gray-400 flex gap-4 items-center"><span className="p-2">{icon}</span>{header}</h2>
            </div>
            <div>
                <h2 className="text-5xl font-bold ">{content}</h2>
            </div>
</div>
        </div>
        </div>
    )
}
export default DashboardCard;