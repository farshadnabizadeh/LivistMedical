import React, { FC } from "react";
import Header from "@/components/Header/Header";
import Blurs from "@/components/Blurs/Blurs";
import AboutusTitle from "@/components/AboutUsTitle";
import AboutUsDescription from "@/components/AboutUsDescription";
import LivistAboutUs from "@/assets/png/LivistLogoAboutUs.png";
import AboutusPageLogo from "@/assets/png/Aboutuspagelogo.png"
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
interface SectionProps {
  title?: string,
  subTitle?: string,
  description?: string,
}
const Section: FC<SectionProps> = ({ title, subTitle, description }) => (
  <>
    {title && <AboutusTitle title={title} subTitle={subTitle} />}
    {description && <div className="px-[24px] my-[20px]"><AboutUsDescription description={description} /></div>}
  </>
);

const Index = () => {
  const aboutUsSections = [
    { title: 'Who we are ?', subTitle: 'our team and colleagues', description: `Livist Sağlık, sağlık turizmi hizmetleri alanında tanınmış bir isimdir. 2018 yılından beri, İstanbul'da en üst düzey sağlık turları sağlayıcısı olarak gurur duyuyoruz. Kültürel ve tarihi bir şehirde stratejik bir merkezde bulunmaktan dolayı sizlere eşsiz bir sağlık seyahati deneyimi sunmaktan memnuniyet duyuyoruz. Tıbbi turizm alanındaki uzmanlığımızla, en iyi sağlık hizmetlerini eğlence ve turizmle birleştirmenize olanak tanıyoruz. İleri cerrahi müdahalelerden spa ve güzellik tedavilerine kadar, her zaman yanınızdayız. Ayrıca, sigorta alanındaki birimimizle, her seyahatin mali ve sağlık yönünden güvence altında olduğundan emin oluyoruz. Sağlık ve mutluluk yolculuğunuzda güçlü bir ortak olarak gurur duyuyoruz. Geniş bir gülümseme ve profesyonel hizmetle,Livist Sağlık, sizi sıcak bir şekilde bekliyor. Sağlıklı ve mutlu bir seyahate başlamak için bize sorular sorun.` },
    { title: 'Mission', description: `Livist Sağlık olarak, değerlerimizden ve hedeflerimizden ilham alarak, müşterilerimize yüksek kaliteli [Hizmet Türü] hizmetleri sunmaktan gurur duyuyoruz. Görevimiz, insanların sağlığını ve refahını artırmak, iyileştirmeye yönelik çözümler sunmak ve yaşam kalitesini artırmak için sağlıklı ve olumlu bir ortam yaratmaktır.` },
    { title: 'Vision', description: `Gelecekteki görüşümüzde, sağlıklı ve mutlu bir toplum, hizmetlerimizden faydalanan ve sağlık ve refahlarına büyük önem veren bireyler görülmektedir. Rehberlik ettiğimiz sağlık ve refah yoluyla, inovatif ve etkili hizmetler sunarak, insanların yaşam kalitesini artırmaya yardımcı olmayı amaçlıyoruz. Livist Sağlık olarak bu yolda sizinle birlikte olmaktan ve ortak başarıya ulaşmaktan mutluluk duyuyoruz.` },
  ];

  return (
    <>
      <main className="w-full min-h-screen relative overflow-x-hidden">
        <section className="w-full absolute top-0 min-h-screen z-50">
          <Header
            HeaderTextComponentActivator={false}
            HeaderTextComponent2Activator={false}
            HeaderTextComponent3Activator={true}
            SingleBlurActivatore={false}
            HeaderTextComponent3ActivatorTitle={'About Us'}
            HeaderTextComponent3ActivatorDescription={''}
            Height={'h-[523px]'}
          />
          <div className="w-full flex justify-center">
            <div className="container">
              {aboutUsSections.map((section, index) => (
                <div key={index}>
                  <Section {...section} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center mt-[43px]">
            <div className="container w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-9">
                {[...Array(7)].map((_, index) => (
                  <span key={index} className="flex justify-center">
                    <Image src={LivistAboutUs} alt="livist" />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-[60px]">
            <Footer />
          </div>
        </section>
        <section className="w-full absolute top-0 z-0">
          <Blurs
            status={false}
            footerStatus={true}
            footerBlur1PositionX={"translate-x-[1300px]"}
            footerBlur1PositionY={"top-[1580px]"}
            footerBlur2PositionX={"translate-x-[1360px]"}
            footerBlur2PositionY={"top-[1490px]"}
            footerBlur3PositionX={"translate-x-[995px]"}
            footerBlur3PositionY={"top-[1460px]"}
            BigBlur={false}
          />
        </section>
        <section className="w-full absolute flex justify-center top-0 right-0 translate-y-[150px] z-[50]">
          <div className="container relative">
            <Image src={AboutusPageLogo} alt="LivistAboutUs" className="absolute w-[150px] xl:w-auto top-0 right-[40px]  xl:top-0 xl:right-0 " />
          </div>
        </section>
      </main>
    </>
  );
}

export default Index;
