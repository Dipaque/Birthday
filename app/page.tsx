"use client";
import React, { useEffect, useState } from "react";
import { ConfettiButton } from "@/components/magicui/confetti";
import Balloon from "@/components/Balloon";
const Page = () => {
  const [isTapped, setIsTapped] = useState(false);

  useEffect(() => {
    if (isTapped) {
      setTimeout(() => setIsTapped(false), 6000);
    }
  }, [isTapped]);

  return (
    <div className="min-h-screen bg-purple-200 flex items-center justify-center p-4">
      <style jsx>{`
        @keyframes blink {
          0%,
          90% {
            height: 0.71rem;
            opacity: 1;
          }
          95%,
          100% {
            height: 0.125rem;
            opacity: 0.8;
          }
        }
      `}</style>
      <div className="bg-purple-300 p-8 rounded-2xl shadow-lg relative overflow-hidden">
        {/* Background sparkles */}
        <div className="absolute top-4 left-8 text-white text-2xl opacity-60 animate-pulse">
          ✦
        </div>
        <div
          className="absolute top-12 right-12 text-white text-lg opacity-60 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        >
          ✦
        </div>
        <div
          className="absolute bottom-20 left-6 text-white text-xl opacity-60 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          ✦
        </div>
        <div
          className="absolute bottom-8 right-8 text-white text-lg opacity-60 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        >
          ✦
        </div>
        <div
          className="absolute top-1/3 right-4 text-white text-sm opacity-60 animate-pulse"
          style={{ animationDelay: "0.8s" }}
        >
          ✦
        </div>

        {/* Happy Birthday Text */}
        <div className="text-center mb-8">
          <div
            role="heading"
            aria-level={1}
            className="text-4xl font-black text-purple-700 tracking-wider"
          >
            HAPPY
          </div>
          <div
            role="heading"
            aria-level={2}
            className="text-4xl font-black text-purple-700 tracking-wider -mt-2"
          >
            BIRTHDAY
          </div>
          <div
            role="heading"
            aria-level={2}
            className="text-4xl font-black text-purple-700 tracking-wider -mt-2"
          >
            JIV
          </div>
        </div>

        {/* Animated Panda Container */}
        <div className="flex justify-center">
          <div
            className={`relative ${!isTapped ? "animate-bounce" : ""}`}
            style={{ animationDuration: "2s" }}
          >
            {/* Panda Body */}
            <div className="relative">
              {/* Main body */}
              <div className="w-48 h-44 bg-gray-800 rounded-full relative">
                {/* Panda face */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-28 bg-white rounded-full relative border-4 border-gray-800">
                    {/* Ears */}
                    <div className="absolute -top-6 -left-4 w-12 h-12 bg-gray-800 rounded-full"></div>
                    <div className="absolute -top-6 -right-4 w-12 h-12 bg-gray-800 rounded-full"></div>

                    {/* Eyes */}
                    <div className="absolute top-4 left-4">
                      <div
                        className="w-8 h-10 rotate-[25deg] bg-gray-800 rounded-full flex items-center justify-center overflow-hidden"
                        style={{
                          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                        }}
                      >
                        <div
                          className="w-3 h-3 bg-white rounded-full animate-pulse"
                          style={{
                            animation: "blink 3s infinite",
                            animationTimingFunction: "ease-in-out",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div
                        className="w-8 h-10 -rotate-[25deg] bg-gray-800 rounded-full flex items-center justify-center overflow-hidden"
                        style={{
                          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                        }}
                      >
                        <div
                          className="w-3 h-3 bg-white rounded-full"
                          style={{
                            animation: "blink 3s infinite",
                            animationTimingFunction: "ease-in-out",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Nose */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full"></div>

                    {/* Mouth */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-3 h-2 border-b-2 border-gray-800 rounded-full"></div>
                    </div>

                    {/* Cheeks */}
                    <div className="absolute top-12 left-1 w-4 h-4 bg-pink-300 rounded-full opacity-80"></div>
                    <div className="absolute top-12 right-1 w-4 h-4 bg-pink-300 rounded-full opacity-80"></div>
                  </div>
                </div>

                {/* Arms */}
                {/* <div className="absolute top-16 -left-8 w-16 h-20 bg-gray-800 rounded-full transform -rotate-12"></div>
                <div className="absolute top-16 -right-8 w-16 h-20 bg-gray-800 rounded-full transform rotate-12"></div> */}

                {/* Belly */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-white rounded-full"></div>

                {/* Legs */}
                <div className="absolute bottom-4 left-8 w-12 h-16 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-4 right-8 w-12 h-16 bg-gray-800 rounded-full"></div>
              </div>
              <div
                className={`${
                  isTapped ? "block transition ease-in duration-200" : "hidden"
                }`}
              >
                <Balloon />
              </div>
              {/* Birthday Cake */}
              <div
                className={`${
                  isTapped ? "hidden transition ease-out duration-200" : ""
                } absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1`}
              >
                {/* Tap Event */}
                <div
                  className="absolute font-bold cursor-pointer !bg-transparent bottom-2 z-50 left-1/2 transform -translate-x-1/2 translate-y-0"
                  onClick={() => setIsTapped(true)}
                >
                  <ConfettiButton className="!bg-transparent font-bold">
                    Tap Here
                  </ConfettiButton>
                </div>
                {/* Cake base */}
                <div className="w-20 h-16 bg-orange-300 rounded-lg border-4 border-gray-800">
                  {/* Frosting */}
                  <div className="absolute -top-3 left-0 w-full h-6 bg-pink-300 rounded-t-lg border-l-4 border-r-4 border-t-4 border-gray-800">
                    {/* Wavy frosting bottom */}
                    <div className="absolute -bottom-1 left-0 w-full h-2 bg-pink-300"></div>
                    <div className="absolute -bottom-2 left-1 w-2 h-2 bg-pink-300 rounded-full"></div>
                    <div className="absolute -bottom-2 left-3 w-2 h-2 bg-pink-300 rounded-full"></div>
                    <div className="absolute -bottom-2 left-5 w-2 h-2 bg-pink-300 rounded-full"></div>
                    <div className="absolute -bottom-2 left-7 w-2 h-2 bg-pink-300 rounded-full"></div>
                    <div className="absolute -bottom-2 left-9 w-2 h-2 bg-pink-300 rounded-full"></div>
                    <div className="absolute -bottom-2 left-11 w-2 h-2 bg-pink-300 rounded-full"></div>
                  </div>

                  {/* Candle */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-orange-400 rounded-sm border-2 border-gray-800">
                    {/* Flame */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-orange-500 rounded-full animate-pulse">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
