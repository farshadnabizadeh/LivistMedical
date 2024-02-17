import React from "react";
import Image from "next/image";
import Service1 from "@/assets/png/service1.png";
import Service2 from "@/assets/png/service2.png";
import Service3 from "@/assets/png/service3.png";
import useTrans from "@/Hooks/useTrans";
const ServiceSecion = () => {
  const t = useTrans()
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-10">
      <div className="relative">
        <div className="w-full absolute top-0 z-0 flex justify-center items-center">
          <div className="w-[357px] h-[357px] rounded-[50px]">
            <Image src={Service1} alt="service-1" />
          </div>
        </div>
        <div className="w-full h-[375px] relative">
          <div className="w-full absolute flex justify-center bottom-0 z-20">
            <div className="w-[306px] h-[70px] bg-[rgba(43,182,115,0.60)] rounded-[50px] flex justify-center items-center">
              <span className="text-[#fff] text-[20px] font-bold leading-none">
                {t('Hair mesotherapy')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-full absolute top-0 z-0 flex justify-center items-center">
          <div className="w-[357px] h-[357px] rounded-[50px]">
            <Image src={Service2} alt="service-2" />
          </div>
        </div>
        <div className="w-full h-[375px] relative">
          <div className="w-full absolute bottom-0 z-20 flex justify-center">
            <div className="w-[306px] h-[70px] bg-[rgba(43,182,115,0.60)] rounded-[50px] flex justify-center items-center">
              <span className="text-[#fff] text-[20px] font-bold leading-none">
                {t('Hair transplantation')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-full absolute top-0 z-0 flex justify-center items-center">
          <div className="w-[357px] h-[357px] rounded-[50px]">
            <Image src={Service3} alt="service-3" />
          </div>
        </div>
        <div className="w-full h-[375px] relative">
          <div className="w-full absolute bottom-0 z-20 flex justify-center">
            <div className="w-[306px] h-[70px] bg-[rgba(43,182,115,0.60)] rounded-[50px] flex justify-center items-center">
              <span className="text-[#fff] text-[20px] font-bold leading-none">
                {t('Hair PRP')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSecion;
