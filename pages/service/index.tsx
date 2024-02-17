import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import BackgroundImageWallpaper from "@/assets/JPG/backgroundImageWallpaper.jpeg";
import ServiceDescription from "@/components/ServiceDescription/ServiceDescription";
import ServiceSecion from "@/components/ServiceSection/ServiceSecion";
import ContactSection from "@/components/ContactSection/ContactSection";
import MoreInformationBlueSection from "@/components/MoreInformationBlueSection/MoreInformationBlueSection";
import BGTransparentImage from "@/components/BackgroundTransparentImage/BGTransparentImage";
import Footer from "@/components/Footer/Footer";
import Blurs from "@/components/Blurs/Blurs";
import { GetStaticProps } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useTrans from "@/Hooks/useTrans";

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch a list of properties from the database
  const {locale} = context
  return {
    props: { ...(await serverSideTranslations(locale as string, ['common'])), },
  };
};

const Index = () => {
  const t = useTrans()
  const BackgroundDOM = () => (
    <div className="w-full h-full absolute top-0">
      <Image
        src={BackgroundImageWallpaper}
        alt="Background-ImageWall-paper"
        layout={'fill'}
        objectFit="cover"
      />
    </div>
  );

  return (
    <main className="w-full min-h-screen relative overflow-x-hidden">
      <section className="w-full absolute top-0 min-h-screen z-50">
        <Header
          HeaderTextComponentActivator={false}
          BackgroundElement={BackgroundDOM()}
          HeaderTextComponent2Activator={true}
          HeaderTextComponent3Activator={false}
          Height={'h-[50em]'}
        />
        <ServiceDescription
          TitleName={t("Hair care services")}
          TitleClassName={"mt-[78px] px-3 xl:px-0 text-[24px] font-bold text-[#464646]"}
          Description={t(`Hair transplantation is a life-changing procedure for those suffering from hair loss or baldness. It's a surgical method of restoring hair growth by transplanting hair follicles from one area of the scalp to the bald or thinning area. At our clinic, we use the latest techniques and technology to ensure the best possible results for our patients. Our highly skilled and experienced team is dedicated to providing high-quality, personalized hair transplantation services that exceed your expectations. We understand that hair loss can be a sensitive issue and we work closely with our patients to develop a customized treatment plan that meets their individual needs and goals. With a commitment to excellence and a focus on patient satisfaction, we guarantee that you will receive the best care possible and achieve the results you desire.`)}
          DescriptionClassName={
            "text-[#959595] px-3 xl:px-0 text-[18px] font-medium text-justify mt-[10px]"
          }
        />
        <div className="w-full flex justify-center mt-[100px]">
          <div className="container">
            <ServiceSecion />
          </div>
        </div>
        <div className="w-full flex justify-center mt-[70px]">
          <div className="container">
            <div className="w-full flex flex-col xl:flex-row justify-between">
              <div className="w-full">
                <div className="text-[#464646]  text-[20px] xl:text-[24px] px-2 xl:px-0 font-extrabold leading-normal">
                  {t('Make an appointment and consult')}
                </div>
                <div className="text-[#959595] text-[18px] px-2 xl:px-0 font-normal leading-normal mt-1">
                  {t('Complete the form below to our experts for advice')}
                </div>
              </div>
              <div className="w-full">
                <div className="text-[#464646] text-[20px] xl:text-[24px] px-2 xl:px-0 font-extrabold leading-normal">
                  {t('More information and contact')}
                </div>
                <div className="text-[#959595]  xl:text-[18px] px-2 xl:px-0 font-normal leading-normal mt-1">
                  {t('We are ready to answer your questions, our support will speak to you in English, German, Arabic, Persian and Turkish!')}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-between mt-3 xl:mt-0">
              <div className="w-full xl:w-[50%] relative">
                <ContactSection BtnColor={'bg-[#2BB673]'} />
              </div>
              <div className="w-full xl:w-[50%] relative">
                <MoreInformationBlueSection
                  ClassName="w-full relative flex justify-center items-center h-[150px] xl:h-[250px] mt-[40px]"
                  Blur={false}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer classname={`w-full relative mt-[100px]`} />
      </section>
      <section className="w-full absolute top-0 left-0 z-10 min-h-screen">
        <div className="container">
          <BGTransparentImage />
        </div>
      </section>
      <section className="w-full absolute top-0">
        <Blurs
          status={false}
          footerStatus={true}
          footerBlur1PositionX={"translate-x-[1300px]"}
          footerBlur1PositionY={"top-[2310px]"}
          footerBlur2PositionX={"translate-x-[1360px]"}
          footerBlur2PositionY={"top-[2200px]"}
          footerBlur3PositionX={"translate-x-[980px]"}
          footerBlur3PositionY={"top-[2210px]"}
          BigBlur={true}
        />
      </section>
    </main>
  );
};

export default Index;
