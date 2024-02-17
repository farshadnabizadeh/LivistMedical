import React from "react";
import MoreInformationBlueSection from "../MoreInformationBlueSection/MoreInformationBlueSection";
import TextComponent from "../MoreInformationAndContactText";
import useTrans from "@/Hooks/useTrans";
const MoreInformationAndContact = () => {
  const t = useTrans();
  return (
    <section className="w-full mt-[70px] flex justify-center absolute">
      <div className="container">
        <div className="w-full block lg:flex">
          <div className="w-full lg:w-[50%] flex items-center">
            <TextComponent
              title={t('More information and contact')}
              description={t('We are ready to answer your questions, our support will speak to you in English, German, Arabic, Persian and Turkish!')}
            />
          </div>
          <MoreInformationBlueSection
            ClassName="w-full lg:w-[50%] relative flex justify-center items-center h-[150px] lg:h-[250px]"
            Blur={true}
          />
        </div>
      </div>
    </section>
  );
};

export default MoreInformationAndContact;
