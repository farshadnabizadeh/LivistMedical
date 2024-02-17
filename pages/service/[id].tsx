import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Blurs from "@/components/Blurs/Blurs";
import MoreInformationAndContact from "@/components/MoreInformationAndContact/MoreInformationAndContact";
import Footer from "@/components/Footer/Footer";
import { useRouter } from 'next/router'
import { ArmLiftSurgery } from "@/data/services";
import { EyelidAesthetics } from "@/data/services";
import { MentoplastyProcedures } from "@/data/services";
import { ProminentEar } from "@/data/services";
import { BreastLift } from "@/data/services";
import { MommyMakeover } from "@/data/services";
import { Vaginoplasty } from "@/data/services";
import { Rhinoplasty } from "@/data/services";
import { AlmondEyeSurgery } from "@/data/services";
import { TummyTuck } from "@/data/services";
import { LipLift } from "@/data/services";
import { FaceLift } from "@/data/services";
import { BreastAesthetics } from "@/data/services";
import { Bichectomy } from "@/data/services";
import ServicePages from "@/components/Services/ServicePages";
import EyelidAestheticsPage from "@/components/Services/EyelidAestheticsPage";
import MentoplastyProceduresPage from "@/components/Services/MentoplastyProcedures";
import ProminentEarPage from "@/components/Services/ProminentEarPage";
import BreastLiftPage from "@/components/Services/BreastLiftPage";
import MommyMakeoverPage from "@/components/Services/MommyMakeoverPage";
import VaginoplastyPage from "@/components/Services/VaginoplastyPage";
import RhinoplastyPage from "@/components/Services/RhinoplastyPage";
import AlmondEyeSurgeryPage from "@/components/Services/AlmondEyeSurgeryPage";
import TummyTuckPage from "@/components/Services/TummyTuckPage";
import LipLiftPage from "@/components/Services/LipLiftPage";
import FaceLiftPage from "@/components/Services/FaceLiftPage";
import BreastAestheticsPage from "@/components/Services/BreastAestheticsPage";
import BichectomyPage from "@/components/Services/BichectomyPage";
import BackgroundImageWallpaper from "@/assets/JPG/backgroundImageWallpaper.jpeg";
import { GetServerSideProps, GetStaticProps } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AlmondEyeSurgeryJPEG from "@/assets/JPEG/AlmondEyeSurgery .jpeg";
import BichectomyJPEG from "@/assets/JPEG/Bichectomy .jpeg";
import BreastAestheticsJPEG from "@/assets/JPEG/BreastAesthetics .jpeg";
import BreastLiftJPEG from "@/assets/JPEG/BreastLift .jpeg";
import EyelidAestheticsJPEG from "@/assets/JPEG/EyelidAesthetics.jpeg";
import FaceLiftJPEG from "@/assets/JPEG/FaceLift .jpeg";
import LipLiftJPEG from "@/assets/JPEG/LipLift .jpeg";
import MentoplastyProceduresJPEG from "@/assets/JPEG/MentoplastyProcedures .jpeg";
import MommyMakeoverJPEG from "@/assets/JPEG/MommyMakeover .jpeg";
import ProminentEarJPEG from "@/assets/JPEG/ProminentEar .jpeg";
import RhinoplastyJPEG from "@/assets/JPEG/Rhinoplasty .jpeg";
import TummyTuckJPEG from "@/assets/JPEG/TummyTuck .jpeg";
import VaginoplastyJPEG from "@/assets/JPEG/Vaginoplasty .jpeg";
export const getServerSideProps = async (context: any) => {
  // Correctly extract the locale from the context
  const { locale } = context;

  if (!locale) {
    // Handle the case where locale is not available
    throw new Error("Locale is not available in the context");
  }

  // Use the locale in serverSideTranslations
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const Services = () => {
  const [data, setData] = useState<any>();
  const [img, setImg] = useState<any>(BackgroundImageWallpaper);
  /** Service Slices */
  const router = useRouter()
  const pathname = router.asPath.split('/')[2].replace('%20', '');
  console.log('pathname', decodeURI(router.asPath.split('/')[2].replace('%20', ' ')))
  useEffect(() => {
    switch (pathname) {
      case 'ArmLiftSurgery':
        setData(ArmLiftSurgery)
        setImg(BackgroundImageWallpaper)
        break;
      case 'EyelidAesthetics':
        setData(EyelidAesthetics)
        setImg(EyelidAestheticsJPEG)
        break;
      case 'MentoplastyProcedures':
        setData(MentoplastyProcedures)
        setImg(MentoplastyProceduresJPEG)
        break;
      case 'ProminentEar':
        setData(ProminentEar)
        setImg(ProminentEarJPEG)
        break;
      case 'BreastLift':
        setData(BreastLift)
        setImg(BreastAestheticsJPEG)
        break;
      case 'MommyMakeover':
        setData(MommyMakeover)
        setImg(MommyMakeoverJPEG)
        break;
      case 'Vaginoplasty':
        setData(Vaginoplasty)
        setImg(VaginoplastyJPEG)
        break;
      case 'Rhinoplasty':
        setData(Rhinoplasty)
        setImg(RhinoplastyJPEG)
        break;
      case 'AlmondEyeSurgery':
        setData(AlmondEyeSurgery)
        setImg(AlmondEyeSurgeryJPEG)
        break;
      case 'TummyTuck':
        setData(TummyTuck)
        setImg(TummyTuckJPEG)
        break;
      case 'LipLift':
        setData(LipLift)
        setImg(LipLiftJPEG)
        break;
      case 'FaceLift':
        setData(FaceLift)
        setImg(FaceLiftJPEG)
        break;
      case 'BreastAesthetics':
        setData(BreastAesthetics)
        setImg(BreastAestheticsJPEG)
        break;
      case 'Bichectomy':
        setData(Bichectomy)
        setImg(BichectomyJPEG)
        break;
      default:
        setData(ArmLiftSurgery)
        setImg(BackgroundImageWallpaper)
        break;
    }
  }, [pathname])
  console.log(pathname)
  const BackgroundDOM = () => (
    <div className="w-full h-full absolute top-0">
      <Image
        src={img}
        alt="Background-ImageWall-paper"
        fill
      />
    </div>
  );
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden">
      <Header
        HeaderTextComponentActivator={false}
        BackgroundElement={BackgroundDOM()}
        HeaderTextComponent2Activator={true}
        HeaderTextComponent3Activator={false}
        Height={'h-[1000px]'}
        Title={decodeURI(router.asPath.split('/')[2].replace('%20', ' '))}
      />
      <Blurs
        status={false}
        footerStatus={false}
        footerBlur1PositionX={"translate-x-[1400px]"}
        footerBlur1PositionY={"top-[2410px]"}
        footerBlur2PositionX={"translate-x-[1460px]"}
        footerBlur2PositionY={"top-[2330px]"}
        footerBlur3PositionX={"translate-x-[995px]"}
        footerBlur3PositionY={"top-[2300px]"}
        BigBlur={false}
      />
      {
        (pathname === 'ArmLiftSurgery' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'جراحیلیفت بازو') && <ServicePages data={data} />
      }
      {
        (pathname === 'EyelidAesthetics' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'زیباییشناسی پلک') && <EyelidAestheticsPage data={data} />
      }
      {
        (pathname === 'MentoplastyProcedures' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'روشهای منتوپلاستی') && <MentoplastyProceduresPage />
      }
      {
        (pathname === 'ProminentEar' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'گوشبرجسته') && <ProminentEarPage />
      }
      {
        (pathname === 'BreastLift' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'لیفتسینه') && <BreastLiftPage />
      }
      {
        (pathname === 'MommyMakeover' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'مامانآرایش') && <MommyMakeoverPage />
      }
      {
        (pathname === 'Vaginoplasty' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'واژینوپلاستی') && <VaginoplastyPage />
      }
      {
        (pathname === 'Rhinoplasty' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'جراحیبینی') && <RhinoplastyPage />
      }
      {
        (pathname === 'AlmondEyeSurgery' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'جراحیچشم بادام') && <AlmondEyeSurgeryPage />
      }
      {
        (pathname === 'TummyTuck' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'تامیتاک') && <TummyTuckPage />
      }
      {
        (pathname === 'LipLift' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'لیفتلب') && <LipLiftPage />
      }
      {
        (pathname === 'FaceLift' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'لیفتصورت') && <FaceLiftPage />
      }
      {
        (pathname === 'BreastAesthetics' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'زیباییسینه') && <BreastAestheticsPage />
      }
      {
        (pathname === 'Bichectomy' || decodeURI(router.asPath.split('/')[2].replace('%20', ' ')) === 'بیکتومی') && <BichectomyPage />
      }
      <MoreInformationAndContact />
      <Footer classname={`w-full relative mt-[500px]`} />
    </main>
  )
}

export default Services
