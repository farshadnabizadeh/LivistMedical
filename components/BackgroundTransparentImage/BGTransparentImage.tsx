import React from "react";
import Image from "next/image";
import Star from "@/assets/png/start.svg";
import HairRoot from "@/assets/png/hairRpot.svg";
import HairRootPlatform from '@/assets/png/hairRootPlatform.svg';
const BGTransparentImage = () => {
  return (
    <>
      <div className="absolute top-[750px] right-[497px]">
        <Image className="" src={Star} alt="start" />
      </div>
      <div className="absolute top-[700px] right-[370px]">
        <Image className="" src={HairRoot} alt="HairRoot" />
      </div>
      <div className="absolute top-[1000px] right-[200px]">
        <Image className="" src={HairRootPlatform} alt="HairRootPlatform" />
      </div>
    </>
  );
};

export default BGTransparentImage;
