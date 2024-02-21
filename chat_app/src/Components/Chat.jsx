import Navbar from "./Navbar"
import { GoSmiley } from "react-icons/go";
import { IoEnter, IoSend } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";


const Chat = () => {

    const [Messages, SetMessages] = useState([])
    const [Msg, SetMsg] = useState()




    const handleKey = (e) => {
        if (e.key == "Enter") {
            SetMessages([...Messages, Msg]);
            SetMsg('');
            

        }
    }

    
  



    return (
        <div className="h-[90vh]">
            <div className="ml-[24%] flex justify-end ">
                <div className="grid grid-cols-1 justify-end overflow-y-scroll absolute top-[15%] h-[70vh]
                 right-[10%]" style={{
                    scrollbarWidth: 'none',  // Firefox
                    
                    '&::-webkit-scrollbar': {
                      width: '0 !important',
                    },
                  }}>
                    {
                        Messages?.map((Message, index) =>
                        (
                            <div key={index} className="text-end p-2 ">
                                <h1 className=" ">
                                    {Message}
                                </h1>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
            <div className="ml-[24%] mt-[80vh] justify-between ">
                <div className="flex p-2.5 pl-12 gap-16 bg-[#f1efed]">
                    <span className="pt-2 cursor-pointer ">
                        <GoSmiley style={{ "fontSize": "20px" }} className="rounded-full  hover:bg-gray-600 " />
                    </span>
                    <input type="text" placeholder="Enter Your Message..." id="p" className="pr-[60%] p-2 rounded-md focus:outline-none border"
                        onKeyDown={(e) => { handleKey(e) }}
                        onChange={(e) => { SetMsg(e.target.value) }} value={Msg}
                    />
                    <div className="pt-1 flex gap-8">
                        <button className=""><IoSend style={{ "fontSize": "20px" }} /></button>
                        <button className=""><IoMdMic style={{ "fontSize": "20px" }} /></button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Chat