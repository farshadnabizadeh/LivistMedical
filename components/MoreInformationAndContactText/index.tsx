import React, { FC } from 'react'
interface IndexProps {
    title?: string,
    description?: string,
}
const Index: FC<IndexProps> = ({ title, description }) => {
    return (
        <div className="w-full mx-2 lg:mx-0">
            <div className="text-base  lg:text-[24px] font-extrabold leading-normal text-[#464646]">
                {title}
            </div>
            <div className="w-full pr-[31px] pt-[9px] mb-2 lg:mb-0 text-[#959595] text-justify leading-[28px] px-3 text-sm lg:text-[18px] font-normal">
                {description}
            </div>
        </div>
    )
}

export default Index
