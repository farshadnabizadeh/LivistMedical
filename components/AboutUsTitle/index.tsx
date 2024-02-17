import React, { FC } from 'react'
interface IndexProps {
    title?: string,
    subTitle?: string,
}
const Index: FC<IndexProps> = ({ title, subTitle }) => {
    return (
        <>
            <div className='text-[#464646] text-[24px] font-extrabold px-[24px]'>
                {title}
            </div>
            <div className='px-[24px] text-[#959595] text-[18px] font-normal'>
                {subTitle}
            </div>
        </>
    )
}

export default Index
