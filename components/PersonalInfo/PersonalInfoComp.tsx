import React, { FC, CSSProperties } from 'react';
import Image from 'next/image';
interface IndexProps {
  PersonalInfo?: any;
}
// Personal Info Components
const PersonalInfoComp: FC<IndexProps> = (PersonalInfo) => {
  const directionStyle: CSSProperties = {
    direction: PersonalInfo?.PersonalInfo?.id ? 'rtl' : 'ltr',
  };
  return (
    <div style={directionStyle} className='w-full'>
      <div style={{direction:'ltr'}} className='w-full xl:w-[988px] h-[400px] xl:h-[229px] flex flex-col xl:flex-row rounded-0 xl:rounded-[25px] border border-gray-300 bg-white shadow-md p-6 mb-[40px]'>
        <div className='w-full xl:w-[20%] h-full flex justify-center items-center'>
           <Image src={PersonalInfo.PersonalInfo.img} alt="img"/>
        </div>
        <div className='w-full xl:w-[80%] overflow-y-scroll'>
          <div className='text-black text-justify font-Cairo font-semibold text-sm xl:text-base  leading-normal'>{PersonalInfo.PersonalInfo.title}</div>
          <div className='mt-[10px] text-gray-700 text-justify font-Cairo text-sm xl:text-base font-normal leading-normal'>{PersonalInfo.PersonalInfo.description}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoComp;
