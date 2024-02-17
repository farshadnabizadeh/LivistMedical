import React, { FC } from "react";
import BannerLogo from "@/assets/svg/banerLogo.svg";
import Image from "next/image";
import BannerWhatsApp from "@/assets/svg/bannerWhatsapp.svg";
import Telegram from "@/assets/svg/telegram.svg";
import Telephon from "@/assets/svg/Telephon.svg";
interface MoreInformationBlueSectionProps {
  ClassName?: string;
  Blur?: boolean;
}
const MoreInformationBlueSection: FC<MoreInformationBlueSectionProps> = ({
  ClassName,
  Blur,
}) => {
  const InfoBoxStyle = {
    borderRadius: "45px",
    background: "#1D2E66",
    boxShadow: "0px 0px 25px -7px #4CB8C4",
    backdropFilter: "blur(5px)",
  };
  const TelephonBannerBlur = {
    fill: "radial-gradient(111% 111% at 50% 50%, #FFF 0%, #F3F3F3 100%)",
    filter: "drop-shadow(3px 3px 16px rgba(0,0,0,0.25))",
  };
  return (
    <div className={ClassName}>
      <div className="w-[95%] lg:w-full h-full absolute top-0 z-0">
        <div
          className="w-full h-full relative flex justify-between"
          style={InfoBoxStyle}>
          <div className="w-[20%] lg:w-[45%] flex justify-center items-center mx-2 lg:mx-0">
            <Image src={BannerLogo} alt="Banner Logo" />
          </div>
          <div className="w-[50%] lg:w-[45%]">
            <div className="w-full mt-5 lg:mt-[37px] mb-[13px]">
              <span className="text-sm md:text-[20px] xl:text-[30px] text-[#fff] font-extrabold leading-normal">
                +90 553 890 6612
              </span>
              <div className="w-full">
                <ul className="flex">
                  <li className="text-[#fff] text-sm font-normal leading-normal mx-2 cursor-pointer">
                    English
                  </li>
                  <li className="text-[#fff] text-sm font-normal leading-normal mx-2 cursor-pointer">
                    Deutsch
                  </li>
                  <li className="text-[#fff] text-sm font-normal leading-normal mx-2 cursor-pointer">
                    Türkçe
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full mt-[15px] mb-[13px]">
              <span className="text-sm md:text-[20px] xl:text-[30px] text-[#fff] font-extrabold leading-normal">
                +90 553 890 6612
              </span>
              <div className="w-full">
                <ul className="flex">
                  <li className="text-[#fff] text-sm font-normal leading-normal mx-2 cursor-pointer">
                    پارسی
                  </li>
                  <li className="text-[#fff] text-sm font-normal leading-normal mx-2 cursor-pointer">
                    عربی
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[20%] flex justify-center items-center">
            <ul className="w-full mx-3 lg:mx-0">
              <li className="my-4">
                <Image src={BannerWhatsApp} alt="Banner-Whats-App" />
              </li>
              <li className="my-4">
                <Image src={Telegram} alt="Telegram" />
              </li>
              <li className="my-4">
                <Image src={Telephon} alt="Telephon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {Blur && (
        <div
          className="absolute translate-x-[340px] translate-y-[140px] w-[100px] h-[100px] bg-[#fff] rounded-full z-50"
          style={TelephonBannerBlur}
        ></div>
      )}
    </div>
  );
};

export default MoreInformationBlueSection;
