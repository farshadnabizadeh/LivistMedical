import React from "react";
import Header from "@/components/Header/Header";
import Blurs from "@/components/Blurs/Blurs";
import MiddleWidgets from "@/components/MiddleWidgets/MiddleWidgets";
import TitleComponent from "@/components/MoreInformationAndContactText";
import ContactSection from "@/components/ContactSection/ContactSection";
import Location from "@/assets/png/Location.png";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import useTrans from "@/Hooks/useTrans";
const Index = () => {
  const t = useTrans();
  const BackgroundDOM = () => {
    return (
      <>
        <div className="w-full h-[50px] border-2"></div>
      </>
    );
  };
  const data = [
    {
      title: t("Make a call!"),
      description: 'You can call us directly, we speak in English, but if you send a message or email, our translators will speak to you in your own language',
      contact: '+90 505 853 9066',
    },
    {
      title: 'Whatsapp',
      description: 'You can leave us a message at any time of the day or night!',
      contact: '+90 505 853 9066',
    },
    {
      title: 'E-Mail',
      description: 'In the subject of the email, write the service you want.',
      contact: 'info@livist-medical.com',
    },
    {
      title: 'Appointment form',
      description: 'You will see the appointment registration form a little lower, you can enter your information in it so that our experts will contact you',
      contact: 'View Form',
    },
  ]
  return (
    <>
      <main className="w-full min-h-screen relative overflow-x-hidden">
        <section className="w-full absolute top-0 min-h-screen z-50">
          <Header
            HeaderTextComponentActivator={false}
            HeaderTextComponent2Activator={false}
            HeaderTextComponent3Activator={true}
            SingleBlurActivatore={false}
            HeaderTextComponent3ActivatorTitle={'Contact us'}
            HeaderTextComponent3ActivatorDescription={'and make an appointment'}
            Height={'h-[740px]'}
          />
          <div className='w-full flex justify-center'>
            <div className='container'>
              <div className='w-full -translate-y-[250px]'>
                <MiddleWidgets data={data} dashLine={true} />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center -translate-y-[150px]">
            <div className="container flex flex-col xl:flex-row xl:justify-between">
              <div className="w-full">
                <div className="w-full">
                  <TitleComponent
                    title={t('Make an appointment and consult')}
                    description={t('Complete the form below to our experts for advice')}
                  />
                </div>
                <div className="w-full mt-[31px]">
                  <ContactSection
                    BtnColor={'bg-[#1D2E66]'}
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <div>
                  <Image src={Location} alt="Location Wallpaper" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </section>
        <section className="w-full absolute top-0 min-h-screen z-0">
          <Blurs
            status={false}
            footerStatus={true}
            footerBlur1PositionX={"translate-x-[1300px]"}
            footerBlur1PositionY={"top-[1750px]"}
            footerBlur2PositionX={"translate-x-[1360px]"}
            footerBlur2PositionY={"top-[1650px]"}
            footerBlur3PositionX={"translate-x-[995px]"}
            footerBlur3PositionY={"top-[1660px]"}
            BigBlur={false}
          />
        </section>
      </main>
    </>
  );
};

export default Index;
