import "remixicon/fonts/remixicon.css";
const Navbar = () => {

    const GetDate = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
        const formattedTime = `${formattedHours}:${minutes}: ${ampm}`;
        return formattedTime;
    }

    return (
        <div className="h-10 font w-full bg-gray-200 text-xl backdrop-blur-3xl flex justify-between p-4 items-center" >

            <div><h1>KRUSHNA</h1></div>

            <div>{GetDate()}</div>

            <div className="gap-2 flex">
               <span><i className="ri-wireless-charging-line cursor-pointer"></i></span>  
                <span><i className="ri-shut-down-line cursor-pointer"></i></span>
            </div>
        </div>
    )
}

export default Navbar