import React, { FC } from "react";
import Header from "@/components/Header/Header";
import Blurs from "@/components/Blurs/Blurs";
import AboutusTitle from "@/components/AboutUsTitle";
import AboutUsDescription from "@/components/AboutUsDescription";
import PersonalInfoComp from "@/components/PersonalInfo/PersonalInfoComp";
import Person0 from "@/assets/png/img0.png"
import Person1 from "@/assets/png/img1.png";
import Person2 from "@/assets/png/img2.png";
import Person3 from "@/assets/png/img4.png"
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
    const PersonalInfo = [
        {
            title: 'Veronnica',
            description: `Livist ile olağanüstü bir deneyim yaşadım. Ekiplerinin gösterdiği profesyonellik ve özveri seviyesi gerçekten takdire şayan. Onlarla etkileşimde bulunduğum andan itibaren ihtiyaçlarımın en üst öncelik olduğuna dair güven duydum. Saç ekimi hizmetlerinin kalitesi beklentilerimi aştı. Livist'i özel kılan şey, sadece uzmanlıkları değil, aynı zamanda müşteri memnuniyeti konusundaki samimi ilgileridir. Kişisel dokunuşla sunulan kaliteli kaş ekimi hizmeti arayan herkese Livist'i kesinlikle öneriyorum. Deneyimimi bu kadar olumlu kırdıkları için teşekkür ederim!`,
            img: Person0,
            id: false,
        },
        {
            title: 'Tantania',
            description: `Rinoplasti operasyonumda Livist ile çalışmak gerçekten harika bir deneyimdi. Ekipleri sadece profesyonel değil, aynı zamanda samimi bir şekilde müşteri memnuniyetine odaklanmıştı. Onlarla iletişime geçtiğim ilk andan itibaren, ihtiyaçlarıma duydukları özel ilgi beni etkiledi. Burun estetiği hizmetlerinin kalitesi beklentilerimi aştı. Livist'i tercih eden herkese, kişisel bir dokunuşla sunulan üstün hizmetleri kesinlikle öneririm. Harika bir deneyim için teşekkür ederim!`,
            img: Person1,
            id: true,
        },
        {
            title: 'Terrisha',
            description: `Rinoplasti operasyonumda Livist ile çalışmak gerçekten harika bir deneyimdi. Ekipleri sadece profesyonel değil, aynı zamanda samimi bir şekilde müşteri memnuniyetine odaklanmıştı. Onlarla iletişime geçtiğim ilk andan itibaren, ihtiyaçlarıma duydukları özel ilgi beni etkiledi. Burun estetiği hizmetlerinin kalitesi beklentilerimi aştı. Livist'i tercih eden herkese, kişisel bir dokunuşla sunulan üstün hizmetleri kesinlikle öneririm. Harika bir deneyim için teşekkür ederim!`,
            img: Person2,
            id: false,
        },
        {
            title: 'Manuel',
            description: `Rinoplasti operasyonumda Livist ile çalışmak gerçekten harika bir deneyimdi. Ekipleri sadece profesyonel değil, aynı zamanda samimi bir şekilde müşteri memnuniyetine odaklanmıştı. Onlarla iletişime geçtiğim ilk andan itibaren, ihtiyaçlarıma duydukları özel ilgi beni etkiledi. Burun estetiği hizmetlerinin kalitesi beklentilerimi aştı. Livist'i tercih eden herkese, kişisel bir dokunuşla sunulan üstün hizmetleri kesinlikle öneririm. Harika bir deneyim için teşekkür ederim!`,
            img: Person3,
            id: true,
        },
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
                        HeaderTextComponent3ActivatorTitle={'Reviews'}
                        HeaderTextComponent3ActivatorDescription={`Our customers' opinion`}
                        Height={'h-[523px]'}
                    />
                    <div className="w-full flex justify-center">
                        <div className="container relative">
                            {
                                PersonalInfo.map((item: any, index: any) => (
                                    <PersonalInfoComp key={index} PersonalInfo={item} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-[152px]">
                        <Footer />
                    </div>
                </section>
                <section className="w-full absolute top-0 z-0">
                    <Blurs
                        status={false}
                        footerStatus={true}
                        footerBlur1PositionX={"translate-x-[1300px]"}
                        footerBlur1PositionY={"top-[2020px]"}
                        footerBlur2PositionX={"translate-x-[1360px]"}
                        footerBlur2PositionY={"top-[1910px]"}
                        footerBlur3PositionX={"translate-x-[995px]"}
                        footerBlur3PositionY={"top-[1900px]"}
                        BigBlur={false}
                    />
                </section>
            </main>
        </>
    );
}

export default Index;
