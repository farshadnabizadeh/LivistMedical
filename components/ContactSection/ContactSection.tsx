import React, { FC } from "react";
import useTrans from "@/Hooks/useTrans";
interface ContactSectionProps {
  BtnColor?: string,
}
const ContactSection: FC<ContactSectionProps> = ({ BtnColor }) => {
  const t = useTrans();
  return (
    <div className="w-full translate-x-[10px] xl:translate-x-0">
      <div className="w-full flex">
        <div className="w-[60%] h-[50px]">
          <div className="w-full h-full bg-[#F1F1F1] rounded-[50px] flex">
            <input
              className="bg-transparent cursor-pointer w-full h-full rounded-[50px] pl-[23px] font-normal leading-normal text-[#959595] text-[20px]  placeholder:font-normal placeholder:leading-normal placeholder:text-[#959595] placeholder:text-[12px] xl:placeholder:text-[20px]"
              type="text"
              placeholder={t("Full Name")}
            />
          </div>
        </div>
        <div className="w-[40%] h-[50px] mr-[50px] ml-[15px]">
          <div className="w-full h-full bg-[#F1F1F1] rounded-[50px] flex">
            <input
              className="bg-transparent cursor-pointer w-full h-full rounded-[50px] pl-[10px] xl:pl-[23px] font-normal leading-normal text-[#959595] text-[20px] placeholder:font-normal placeholder:leading-normal placeholder:text-[#959595] placeholder:text-[12px] xl:placeholder:text-[20px]"
              type="text"
              placeholder={t("Whatsapp Number")}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex mt-2">
        <div className="w-[55%] h-[50px]">
          <div className="w-full h-full bg-[#F1F1F1] rounded-[50px] flex">
            <input
              className="bg-transparent cursor-pointer w-full h-full rounded-[50px] pl-[23px] font-normal leading-normal text-[#959595] text-[20px] placeholder:font-normal placeholder:leading-normal placeholder:text-[#959595] placeholder:text-[12px] xl:placeholder:text-[20px]"
              type="text"
              placeholder={t("E-Mail Address")}
            />
          </div>
        </div>
        <div className="w-[45%] h-[50px] flex justify-between">
          <div className="w-full h-full bg-[#F1F1F1] rounded-[50px] flex mx-[15px]">
            <input
              className="bg-transparent cursor-pointer w-full h-full rounded-[50px] pl-[8px] xl:pl-[23px] font-normal leading-normal text-[#959595] text-[20px] placeholder:font-normal placeholder:leading-normal placeholder:text-[#959595] placeholder:text-[12px] xl:placeholder:text-[20px]"
              type="text"
              placeholder={t("Age")}
            />
          </div>
          <div className="w-full h-full bg-[#F1F1F1] rounded-[50px] flex mr-[54px]">
            <input
              className="bg-transparent cursor-pointer w-full h-full rounded-[50px] pl-[8px] xl:pl-[23px] font-normal leading-normal text-[#959595] text-[20px] placeholder:font-normal placeholder:leading-normal placeholder:text-[#959595] placeholder:text-[12px] xl:placeholder:text-[20px]"
              type="text"
              placeholder={t("Sex")}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex mt-2">
        <div className="w-[60%] h-[50px]">
          <div className="w-full h-full bg-[#F1F1F1] rounded-[50px] flex">
            <input
              className="bg-transparent cursor-pointer w-full h-full rounded-[50px] pl-[23px] font-normal leading-normal text-[#959595] text-[20px]  placeholder:font-normal placeholder:leading-normal placeholder:text-[#959595] placeholder:text-[12px] xl:placeholder:text-[20px]"
              type="text"
              placeholder={t("your country")}
            />
          </div>
        </div>
        <div className="w-[40%] h-[50px] mr-[50px] ml-[15px]">
          <div className="w-full h-full bg-[#F1F1F1] rounded-[50px] flex">
            <input
              className="bg-transparent cursor-pointer w-full h-full rounded-[50px] pl-[23px] font-normal leading-normal text-[#959595] text-[20px] placeholder:font-normal placeholder:leading-normal placeholder:text-[#959595] placeholder:text-[12px] xl:placeholder:text-[20px]"
              type="text"
              placeholder={t("Language")}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex mt-[30px]">
        <div className="w-[5%]">
          <input
            className="ml-[10px] mt-[23px] border-none bg-[#D9D9D9] cursor-pointer w-full"
            type="checkbox"
          />
        </div>
        <div className="w-[95%] ml-[20px] mr-[60px] text-[#959595] leading-normal">
          {t("By my decision and accepting the privacy terms of this website, I register my information in this form.")}
        </div>
      </div>
      <div className="w-full mt-[15px] h-[50px]">
        <div className={`${BtnColor} w-[93%] h-full my-[8px] cursor-pointer rounded-[50px] flex justify-center items-center text-[#fff]`}>
          {t("Submit")}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
