import React, { FC } from 'react'
import AppoinmentBtn from './AppoinmentBtn'
import useTrans from '@/Hooks/useTrans'
interface HeaderText2Prop {
    Title?: any
}
const HeaderText2: FC<HeaderText2Prop> = (Title) => {
    const t = useTrans()
    const HeaderTextStyle = {
        'border': '2px solid #EAEAEA',
        'background': 'rgba(255, 255, 255, 0.60)',
        'backdropFilter': 'blur(25px)',
    }
    const HeaderBox = {
        'color': '#000',
    }
    const DescriptionStyle = {
        'color': '#464646',
        'fontSize': '20px',
        'fontStyle': 'normal',
        'fontWeight': 500,
    }
    
    return (
        <div className='absolute w-full flex justify-center top-[216px] z-10'>
            <div className='container'>
                <div className='translate-x-[0px] xl:translate-x-[99px]'>
                    <div style={HeaderTextStyle} className='w-[520px] h-[220px] rounded-none sm:rounded-[25px]'>
                        <div style={HeaderBox} className='mt-[35px]  text-[25px] ml-4 font-semibold sm:text-[35px] sm:font-bold sm:leading-normal sm:ml-[42px]'>{Title?.Title == undefined ? t('Hair Transplantation') : Title?.Title}</div>
                        <div style={DescriptionStyle} className='mt-[19px] ml-4 w-[70%] sm:w-[98%] xl:ml-[42px] xl:mr-[34px] xl:leading-normal'>{t("Hair, eyebrow and beard transplant with the latest equipment by a specialist doctor.")}</div>
                    </div>
                    <div className='w-full flex justify-center mt-5 sm:block'>
                    <div className='flex items-center rounded-[50px] cursor-pointer bg-[#2BB673] w-[290px] h-[60px]'>
                        <AppoinmentBtn
                            BtnName={t('Make an Appointment')}
                            ImageSwitcher={false}
                            ClassName={'text-[#fff] text-lg font-medium'}
                            ImageClassName={'mx-[18px]'}
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderText2
