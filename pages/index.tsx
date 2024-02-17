import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import WhatDoWeDo from "@/components/WhatDoWedo/WhatDoWeDo";
import Blurs from "@/components/Blurs/Blurs";
import Widgets from "@/components/Widgets/Widgets";
import MemorableAndCareFree from "@/components/Memorable/MemorableAndCareFree";
import MiddleWidgets from "@/components/MiddleWidgets/MiddleWidgets";
import MoreInformationAndContact from "@/components/MoreInformationAndContact/MoreInformationAndContact";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });
import 'tailwindcss/tailwind.css'
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





export default function Home() {
  const t = useTrans();
  const data = [
    {
      title: t('Treatment plans for you'),
      description: t('Experience personalized care with our tailored treatment plans, designed specifically for your unique needs and goals.')
    },
    {
      title: t('Transfer'),
      description: t('Enjoy stress-free travel with our complimentary car transfer services, available for your convenience.'),
    },
    {
      title: t('Surfing'),
      description: t('Sightseeing in tourist and historical areas of Istanbul, water park, islands, beach and dolphin park.')
    },
    {
      title: t('Insurances'),
      description: t('Worry-free medical services with complete insurance coverage for your peace of mind.')
    },
  ]
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden">
      <Header
        HeaderTextComponentActivator={true}
        HeaderTextComponent2Activator={false}
        HeaderTextComponent3Activator={false}
        SingleBlurActivatore={true}
        Height={'h-[740px]'}
        width={''}
      />
      <WhatDoWeDo />
      <Blurs
        status={true}
        footerStatus={true}
        footerBlur1PositionX={"translate-x-[1400px]"}
        footerBlur1PositionY={"top-[2410px]"}
        footerBlur2PositionX={"translate-x-[1460px]"}
        footerBlur2PositionY={"top-[2330px]"}
        footerBlur3PositionX={"translate-x-[995px]"}
        footerBlur3PositionY={"top-[2300px]"}
        BigBlur={true}
      />
      <Widgets />
      <MemorableAndCareFree />
      <section className='w-full flex justify-center'>
        <div className='container'>
          <div className='w-full mt-[53px]'>
            <MiddleWidgets data={data} dashLine={false}/>
          </div>
        </div>
      </section>
      <MoreInformationAndContact />
      <Footer classname={`w-full relative mt-[500px]`} />
    </main>
  );
}
