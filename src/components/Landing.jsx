import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative flex justify-center">
      <div className="w-screen h-screen flex justify-center">
        <Image
          src="/bg.jpg"
          className="absolute z-0"
          layout="fill"
          objectFit="fill"
          alt="img"
        ></Image>
        <div className="z-20 absolute top-[20%] ">
          <h1 className="text-5xl lg:text-8xl text-white text-center font-extrabold drop-shadow-[0_3.2px_1.2px_rgb(0,0,0)]">
            Sign-Bridge
          </h1>
        </div>
      </div>
      <div className="absolute bottom-[39%] flex justify-center">
        <h1 className="text-white text-2xl font-bold">Bridging Silence, Building Connection</h1>
      </div>
      <div className="absolute bottom-[20%] flex justify-end w-[50%]">
        <h1 className="text-white text-lg font-thin text-center">Sign-Bridge is a digital platform uniting deaf and mute individuals with the wider community through sign language interpretation and text-based communication. It serves as a bridge, enabling seamless interaction and understanding between different modes of expression, fostering genuine connections and enriching lives.</h1>
      </div>
    </div>
  );
};

export default Landing;
