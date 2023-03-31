import React from "react";
import "./animation.css";

const InfinitySlider = ({ obj, obj2 }) => {
  return (
    <>
      <div className="grid place-items-center w-[100vw] h-[100vh]">
        <div className="w-[400%] sm:w-[200%] max-w-[1600px] mx-auto my-auto h-[500px] bg-zinc-100 flex-col items-stretch overflow-hidden relative">
          <div className="absolute left-0 right-0 h-[100%] flex justify-center align-center w-[200%] max-w-[1600px]">
            <div className="w-[200%] mx-[48px] mt-[20px] flex flex-row justify-start items-start animation-slider absolute ">
              {obj.map((curElem) => (
                <div
                  className="flex flex-row items-start flex-auto"
                  key={curElem.id}
                >
                  <div className="realtive w-[360px] h-[190px] min-w-0 mx-[20px] rounded-xl shadow-lg bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
                    <div className=" wfull flex">
                      <img
                        src={curElem.imgSrc}
                        alt=""
                        className=" rounded-full w-[18%] m-3  shadow-lg"
                      />
                      <div className="  flex items-center w-full justify-start text-white font-bold">{curElem.heading}</div>
                    </div>
                    <div className="text-white px-10 text-sm">{curElem.para}</div>
                  </div>
                </div>
              ))}
              {obj.map((curElem) => (
                <div
                  className="flex flex-row items-start flex-auto"
                  key={curElem.id}
                >
                  <div className="realtiv w-[360px] h-[190px] min-w-0 mx-[20px] rounded-xl shadow-lg bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
                    <div className="w-full flex">
                      <img
                        src={curElem.imgSrc}
                        alt=""
                        className=" rounded-full w-[18%] m-3  shadow-lg"
                      />
                      <div className=" flex items-center w-full justify-center text-white font-bold">{curElem.heading}</div>
                    </div>
                    <div className="text-white px-10 text-sm">{curElem.para}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* second div code started */}
            <div className="w-[200%] mb-[10px] flex flex-row justify-start items-start animation-slider-reverse absolute bottom-[1rem]">
              {obj2.map((curElem) => (
                <div
                  className="flex flex-row items-start flex-auto"
                  key={curElem.id}
                >
                  <div className="realtiv w-[360px] h-[190px] min-w-0 mx-[20px] rounded-xl shadow-lg bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
                    <div className="w-full flex">
                      <img
                        src={curElem.imgSrc}
                        alt=""
                        className=" rounded-full w-[18%] m-3  shadow-lg"
                      />
                      <div className=" flex items-center w-full justify-center text-white font-bold">{curElem.heading}</div>
                    </div>
                    <div className="text-white px-10 text-sm">{curElem.para}</div>
                  </div>
                </div>
              ))}
              {obj2.map((curElem) => (
                <div
                  className="flex flex-row items-start flex-auto"
                  key={curElem.id}
                >
                  <div className="realtiv w-[360px] h-[190px] min-w-0 mx-[20px] rounded-xl shadow-lg bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100">
                    <div className="w-full flex">
                      <img
                        src={curElem.imgSrc}
                        alt=""
                        className=" rounded-full w-[18%] m-3  shadow-lg"
                      />
                      <div className=" flex items-center w-full justify-center text-white font-bold">{curElem.heading}</div>
                    </div>
                    <div className="text-white px-10 text-sm">{curElem.para}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfinitySlider;
