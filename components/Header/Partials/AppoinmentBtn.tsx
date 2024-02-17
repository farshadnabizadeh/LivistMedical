import React, { FC } from 'react'
import Image from 'next/image'
import WWW from '@/assets/svg/www.svg'
import WhiteWWW from '@/assets/svg/whiteWWW.svg'
interface AppoinmentBtnProps {
    BtnName?: string,
    ImageSwitcher?: boolean,
    ClassName?: string,
    ImageClassName?: string,
}
const AppoinmentBtn: FC<AppoinmentBtnProps> = ({
    BtnName,
    ImageSwitcher,
    ClassName,
    ImageClassName,
}) => {
    return (
        <>
            <div className={ImageClassName}>
                {ImageSwitcher && <Image src={WWW} alt='global' />}
                {!ImageSwitcher && <Image src={WhiteWWW} alt='global' />}
            </div>
            <div className='mr-[16px] cursor-pointer'>
                <span className={ClassName}>{BtnName}</span>
            </div>
        </>
    )
}

export default AppoinmentBtn
