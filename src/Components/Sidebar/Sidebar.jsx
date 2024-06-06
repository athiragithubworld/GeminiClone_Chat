import React, { useContext, useState } from 'react'
import {assets} from "../../assets/assets"
import { Context } from '../ContextAPI/ContextAPI';

export default function Sidebar() {

  const [extended, setExtended] = useState(false)
  const { onSent, prevPrompt, setRecentPrompt , newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    console.log(prompt)
    setRecentPrompt(prompt)
   await onSent(prompt)
  }
  
  
  

  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px] max-[600px]:hidden">
      {/* top */}
      <div>
        <img
          src={assets.menu_icon}
          alt=""
          className="w-[20px] block ml-[10px] cursor-pointer "
          onClick={() => setExtended((prev) => !prev)}
        />
        {/* new chat */}
        <div
          onClick={() => newChat()}
          className="mt-[50px] inline-flex gap-[10px] bg-[#e6eaf1] py-[10px] px-[15px] font-[14px] text-gray-500 rounded-[50px] cursor-pointer"
        >
          <img src={assets.plus_icon} alt="" className="w-[20px]" />
          {extended && <p>New Chat</p>}
        </div>
        <div className="flex flex-col  ">
          <p className="mt-[30px] mb-[20px]">Recent</p>
          {prevPrompt.map((item, index) => {
            return (
              <div
                onClick={() => loadPrompt(item)}
                key={index}
                className="flex items-center gap-[10px] justify-center p-[10px] pr-[40px] cursor-pointer rounded-[50px] text-[#282828]  hover:bg-[#e2e6eb] "
              >
                <img src={assets.message_icon} alt="" className="w-[20px]" />
                {extended && (
                  <p className="w-[130px] animate-fadeIn">
                    {item.slice(0, 18)}....
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col">
        <div className="flex flex-row items-start gap-[10px]  p-[10px] pr-[10px] cursor-pointer rounded-[50px] text-[#282828] hover:bg-[#e2e6eb]">
          <img src={assets.question_icon} alt="" className="w-[20px] pt-1" />
          {extended && <p>Help</p>}
        </div>
        <div className="flex items-start gap-[10px]  p-[10px] pr-[10px] cursor-pointer rounded-[50px] text-[#282828] hover:bg-[#e2e6eb]">
          <img src={assets.history_icon} alt="" className="w-[20px] pt-1" />
          {extended && <p>Activity</p>}
        </div>
        <div className="flex items-start gap-[10px]  p-[10px] pr-[10px] cursor-pointer rounded-[50px] text-[#282828] hover:bg-[#e2e6eb]">
          <img src={assets.setting_icon} alt="" className="w-[20px] pt-1" />
          {extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  );
}
