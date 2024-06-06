import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../ContextAPI/ContextAPI";

export default function MainPage() {

  const {
    prevPrompt,
    recentPrompt,
    input,
    setInput,
    onSent,
    showResult,
    loading,
    resultData,
  } = useContext(Context);


  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input) {
      onSent()
    }
  }
  

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative ">
      <div className="flex justify-between items-center p-[20px] font-[22px] text-[#585858]">
        <p>Gemini</p>
        <img src={assets.user_icon} className="w-[40px] rounded-[50%]" />
      </div>
      <div className=" max-w-[900px] m-auto flex flex-col gap-3">
        {!showResult ? (
          <>
            <div className="my-[50px] mx-0 text-[56px] text-[#c4c7c5] p-[20px] font-medium">
              <p>
                <span className="bg-custom-gradient bg-clip-text text-fill-transparent">
                  Hello Dev.
                </span>
              </p>
              <p>How can I help you?</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px]  p-[20px] ">
              <div className="relative h-[200px] p-[15px] rounded-[10px] bg-[#f0f4f9] cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px] ">
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <img
                  src={assets.compass_icon}
                  className="w-[35px] rounded-[20px] bg-white p-[5px] absolute bottom-[10px] right-[10px]"
                />
              </div>
              <div className="relative h-[200px] p-[15px] rounded-[10px] bg-[#f0f4f9] cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px] ">
                  Breifly summarize this concept : Urban Planning
                </p>
                <img
                  src={assets.bulb_icon}
                  className="w-[35px] rounded-[20px] bg-white p-[5px] absolute bottom-[10px] right-[10px]"
                />
              </div>
              <div className="relative h-[200px] p-[15px] rounded-[10px] bg-[#f0f4f9] cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px] ">
                  Brainstorm team bonding activities for our work retreat{" "}
                </p>
                <img
                  src={assets.message_icon}
                  className="w-[35px] rounded-[20px] bg-white p-[5px] absolute bottom-[10px] right-[10px]"
                />
              </div>
              <div className="relative h-[200px] p-[15px] rounded-[10px] bg-[#f0f4f9] cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px] ">
                  Improve the readabilty of the following code
                </p>
                <img
                  src={assets.code_icon}
                  className="w-[35px] rounded-[20px] bg-white p-[5px] absolute bottom-[10px] right-[10px]"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="max-h-[70vh] py-[40px] px-0 overflow-y-scroll scrollbar-hide">
            <div className="my-[40px] mx-0 flex items-center gap-[20px]">
              <img
                className="w-[40px] rounded-[50%]"
                src={assets.user_icon}
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-[20px]">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="w-full flex flex-col gap-[10px]">
                  <hr
                    className="rounded-[4px] border-none bg-[#f6f7f8] h-[20px] bg-[length:800px_20px] animate-loader bg-custom-loadergradient  "
                    style={{
                      background:
                        "linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)",
                    }}
                  />
                  <hr
                    className="rounded-[4px] border-none bg-[#f6f7f8] h-[20px] bg-[length:800px_20px] animate-loader bg-custom-loadergradient  "
                    style={{
                      background:
                        "linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)",
                    }}
                  />
                  <hr
                    className="rounded-[4px] border-none bg-[#f6f7f8] h-[20px] bg-[length:800px_20px] animate-loader bg-custom-loadergradient  "
                    style={{
                      background:
                        "linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)",
                    }}
                  />
                </div>
              ) : (
                <p
                  className="text-[17px] font-light leading-[1.8] whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                >
                  {/* {resultData} */}
                </p>
                // <p className="text-[17px] font-light leading-[1.8] " dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="absolute bottom-0 w-full max-w-[900px] py-0 px-[20px]   ">
          <div className="flex items-center justify-between rounded-[50px] bg-[#f0f4f9] gap-[20px] py-[10px] px-[20px] max-[450px]:gap-[15px] mt-3 ">
            <input
              className="flex-1 border-none outline-none bg-transparent p-[8px] text-[18px] max-[400px]:w-[100px] max-[300px]:w-[90px]"
              type="text"
              placeholder="Enter a promt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="flex items-center min-[450px]:gap-[15px] ">
              <img
                className=" w-[24px] cursor-pointer"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className=" w-[24px] cursor-pointer"
                src={assets.mic_icon}
                alt=""
              />
              {input ? (
                <img
                  className=" w-[24px] cursor-pointer"
                  src={assets.send_icon}
                  alt=""
                  onClick={() => onSent()}
                />
              ) : null}
            </div>
          </div>
          <p className="text-[13px] max-[400px]:text-[9px]  my-[15px] max-[400px]:my-[8px]  mx-auto font-light ">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}
