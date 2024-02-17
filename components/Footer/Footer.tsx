import React, { FC } from "react";
import FooterWallpaper from "@/assets/svg/footerWallpaper.svg";
import Image from "next/image";
import useTrans from "@/Hooks/useTrans";
interface FooterProps {
  classname?: string;
}
const Footer: FC<FooterProps> = ({ classname }) => {
  const t = useTrans();
  const TitleStyles = {
    color: "var(--colors-titles, #464646)",
    fontWeight: 700,
    lineHeight: "normal",
  };
  const ListStyle = {
    color: "var(--colors-texts, #959595)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "34px",
  };
  return (
    <section className={classname}>
      <div className="container">
        <div className="w-full">
          <div className="w-full block xl:flex relative">
            <div className="w-[40%] flex justify-center items-center">
              <Image
                className="translate-x-[60px] ml-[150px]"
                src={FooterWallpaper}
                alt="Footer wallpaper"
              />
            </div>
            <div className="w-[20%] ml-5 mt-8 xl:mt-0 xl:ml-[200px] float-left xl:float-none">
              <div style={TitleStyles} className="text-[14px] xl:text-[24px]">{t('Services')}</div>
              <div className="w-[45px] h-[1px] bg-[#000] my-3"></div>
              <div>
                <ul>
                  <li style={ListStyle}>{t('Services')}1</li>
                  <li style={ListStyle}>{t('Services')}2</li>
                  <li style={ListStyle}>{t('Services')}3</li>
                  <li style={ListStyle}>{t('Services')}4</li>
                  <li style={ListStyle}>{t('Services')}5</li>
                  <li style={ListStyle}>{t('Services')}6</li>
                  <li style={ListStyle}>{t('Services')}7</li>
                  <li style={ListStyle}>{t('Services')}8</li>
                </ul>
              </div>
            </div>
            <div className="w-[40%] mt-8 xl:mt-0 xl:w-[20%] float-right xl:float-none">
              <div style={TitleStyles} className="text-[14px] xl:text-[24px]">{t('Last reviews')}</div>
              <div className="w-[45px] h-[1px] bg-[#000] my-3"></div>
              <div>
                <ul>
                  <li style={ListStyle}>{t('Alireza from Iran')}</li>
                  <li style={ListStyle}>{t('Alina from Russia')}</li>
                  <li style={ListStyle}>{t('Trisha from Ukraine')}</li>
                  <li style={ListStyle}>{t('Muhammad from Qatar')}</li>
                </ul>
              </div>
            </div>
            <div className="w-[20%] xl:mt-0 ml-5 xl:ml-0">
              <div  style={TitleStyles} className="text-[14px] xl:text-[24px]">{t('Links')}</div>
              <div className="w-[45px] h-[1px] bg-[#000] my-3"></div>
              <div>
                <ul>
                  <li style={ListStyle} className="text-[14px] xl:text-[24px]">{t('Privacy and polices')}</li>
                  <li style={ListStyle} className="text-[14px] xl:text-[24px]">{t('About us')}</li>
                  <li style={ListStyle} className="text-[14px] xl:text-[24px]">{t('Contact us')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="container">
          <div className="border-t-[1px] border-[#4CB8C4] mt-[49px] flex justify-between pt-[23px] pb-[45px]">
            <div className="text-[#959595] text-[16px] font-normal leading-[33px] ml-[18px]">
              All rights reserved. 2023 © - Livist Medical
            </div>
            <div className="text-[#959595] text-[16px] font-normal leading-[33px]">
              Design and developed by Alper Media
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
