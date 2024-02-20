import Navbar from "./Navbar"
import { GoSmiley } from "react-icons/go";
import { IoEnter, IoSend } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { useState } from "react";


const Chat = () => {
    const [Messages, SetMessages] = useState()
    const [Msg, SetMsg] = useState()

    const hadleSend = (e) => {

    }

    const handleKey = (e) => {
        if (e.key == "Enter") {
            SetMsg()
        }

    }
    return (
        <div>
            <div className="ml-[24%] flex justify-end ">
                <div className=" flex flex-col justify-end">
                    {
                        () => {
                            SetMessages.map((Message) => {
                                return (
                                    <div className="">
                                        <span>{Message}</span>
                                    </div>
                                )
                            })
                        }
                    }
                </div>
            </div>
            <div className="ml-[24%] justify-between ">
                <div className="flex p-2.5 pl-12 gap-16 bg-[#f1efed]">
                    <span className="pt-2 ">
                        <GoSmiley style={{ "fontSize": "20px" }} className="rounded-full  hover:bg-gray-600 " />
                    </span>
                    <input type="text" placeholder="Enter Your Message..." className="pr-[60%] p-2 rounded-md focus:outline-none border"
                        onKeyDown={(e) => { handleKey(e) }}
                        onChange={(e) => { SetMessages(e.target.value) }}
                    />
                    <div className="pt-2 flex gap-8">
                        <span className=""><IoSend style={{ "fontSize": "20px" }} /></span>
                        <span className=""><IoMdMic style={{ "fontSize": "20px" }} /></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Chat