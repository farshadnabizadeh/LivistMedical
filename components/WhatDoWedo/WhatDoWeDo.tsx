import React from 'react'
import useTrans from '@/Hooks/useTrans'
const WhatDoWeDo = () => {
    const t = useTrans()
    const WhatDoWeDoStyle = {
        'background': 'rgba(255, 255, 255, 0.80)',
        'box-shadow': '0px 0px 25px -12px rgba(0, 0, 0, 0.25)',
        'backdropFilter': 'blur(5px)',
    }
    return (
        <section className='w-full absolute top-[617px] flex justify-center z-20'>
            <div className='container'>
                <div className='w-full h-[190px] rounded-[20px]' style={WhatDoWeDoStyle}>
                    <div className='pt-[20px] pl-[35px] pb-[24px] text-[#000] text-[25px] font-normal'>{t("What do we do?")}</div>
                    <div className='mb-[20px] ml-[35px] w-[80px] h-[1px] bg-[#2BB673]'></div>
                    <div className='ml-[35px] mr-[38px] mb-[37px]'>
                        <span className='text-[#959595] text-[18px] font-normal leading-[30px]'>{t("We specialize in medical tourism services in Turkey, providing you with access to top-rated healthcare providers for your beauty and health needs. Our team will help you every step of the way for a seamless and affordable experience.")}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatDoWeDo
