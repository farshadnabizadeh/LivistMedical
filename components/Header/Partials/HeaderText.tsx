import useTrans from '@/Hooks/useTrans'
import React from 'react'

const HeaderText = () => {
    const t = useTrans()
    return (
        <div className='absolute w-full flex justify-center top-[216px] z-10'>
            <div className='container'>
                <div className='translate-x-0 xl:translate-x-[99px]'>
                    <span className='text-[#000] text-[30px] ml-5 xl:ml-0 xl:text-[55px] leading-normal font-bold'>{t("MEDICAL TOURISM")}</span>
                    <div className='relative'>
                        <span className='text-[#555] text-[20px] ml-5 xl:ml-0 xl:text-[31px] leading-normal font-medium'>{t("in Türkiye with")}</span>
                        <span className='text-[#4CB8C4] text-[25px] xl:text-[31px] leading-normal font-bold ml-1'>{t("Livist Medical")}</span>
                        <div className='absolute translate-y-[75px] translate-x-[380px] bottom-0 left-0 w-[100px] h-[100px] rounded-full shadow-md bg-gradient-to-br from-white via-white to-gray-200'></div>
                    </div>
                    <div className='bg-[#1D2E66] w-[80px] h-[1px] ml-5 xl:ml-0 my-[15px]'></div>
                    <div className='absolute w-[390px] xl:w-[714px] ml-5 xl:ml-0'>
                        <span className='text-[#000] text-[25px] font-normal leading-normal'>{t("Diverse, cheap, trusted services, with the best doctors and hospitals For your beauty and")}</span>
                        <span className='text-[#1071A9] text-[25px] leading-normal font-semibold mx-1'>{t("health")}</span>
                        <span className='text-[#000] text-[25px] font-normal leading-normal'>!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderText
