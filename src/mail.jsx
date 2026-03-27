function Message(){
    return(
        <div className="w-200 flex flex-col  p-10">
            <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
          <input className="h-10 border p-2 w-80" type="text" name="Name" id="Name" placeholder="Full Name"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
          <input className="h-10 border p-2 w-80" type="email" name="Email" id="Email" placeholder="youremail@gmail.com"/>
          </div>
            </div>
            <div className="flex flex-col justify-center mt-4">
                <label htmlFor="text">Message:</label>
                <textarea className="h-80 p-6 w-80 md:w-full border" name="text" id="text"></textarea>
                <button className="p-3 mt-6 bg-gray-600 text-2xl text-amber-50" type="submit">Send</button>
            </div>
        </div>
    )
}
export default Message;