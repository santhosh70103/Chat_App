import React, { useEffect, useState, useTransition } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import profile from "../assets/profile.jpg"
import { MdOutlineMessage } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs"







const Menu = () => {
  const navigate = useNavigate();
  const [friends, Setfriends] = useState()
  const Location = useLocation()

  const [search, Setsearch] = useState("")

  useEffect(() => {
   
    Setfriends(Location.state.Data.friends)
  }, [])

  const handleChange=(e)=>
  {
    var s=e.target.value   
    
  }





  return (
    <>
      <div className="w-[24%] absolute ">

        <div className="flex justify-between items-start bg-[#e9eaeb] pb-5 pt-3 border-r border-solid border-[#bdb9b9]" >
          <div>
            <img className="w-9 h-9" src={profile} alt="" />
          </div>
          <div className="flex space-x-7  pt-1 pr-5">
            <MdOutlineMessage style={{ "fontSize": "25px" }} />
            <BsThreeDotsVertical style={{ "fontSize": "20px" }} />
          </div>
        </div>

        <div className="h-10 w-[100%]"><input className="w-[100%] h-[100%] pl-2" onChange={(e) => { handleChange(e)}} type="text" placeholder="search " /></div>
        <div className="flex ">

          <div className=" text-start  grid  overflow-y-auto max-h-[80vh]" style={{
            scrollbarWidth: 'none',  // Firefox
            
            '&::-webkit-scrollbar': {
              width: '0 !important',
            },
          }}>


            {friends?.map((friend, k) => {
              return (
                <div key={k} className="flex space-x-1.5 rounded-[5px] pl-5 pr-[100px] pt-3 pb-3 border border-none hover:bg-[#e9eaeb]  hover: border-solid border-inherit">
                  <span><img className="w-9 h-9" src={profile} alt="" /></span>
                  <span className="pt-1">{friend}</span>

                </div>

              )
            })}
          </div>





        </div>
      </div>
    </>


  );
};

export default Menu;
