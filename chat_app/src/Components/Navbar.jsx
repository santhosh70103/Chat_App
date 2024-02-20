import profile from "../assets/profile.jpg"
import { BsThreeDotsVertical } from "react-icons/bs"
import { GrAttachment } from "react-icons/gr";



const Navbar = () => {
    return (
        <>

            <div className=" ml-[24%] flex justify-between w-[76%] pt-3 bg-gray-500 h-full">
                <div className=" flex space-x-3 items ">
                    <div className="flex pb-5  " >
                        <img className="w-9 h-9 rounded-full" src={profile} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <span>FriendName</span>
                        <span>Status</span>
                    </div>
                </div>
                <div className="flex pt-1 gap-8 pr-10">
                    <span><GrAttachment style={{ "fontSize": "20px" }} /></span>
                    <span><BsThreeDotsVertical style={{ "fontSize": "20px" }} /></span>
                </div>
            </div>

        </>
    )
}

export default Navbar;