import React, { FC } from 'react'
interface MiddleWidgetsProps {
    data?: any,
    dashLine?: boolean,
}
const MiddleWidgets: FC<MiddleWidgetsProps> = ({ data, dashLine }) => {
    const MiddleWidgets = data
    const MiddleWidgetsStyle = {
        'borderRadius': '45px',
        'background': 'rgba(255, 255, 255, 0.60)',
        'boxShadow': '0px 0px 25px -12px rgba(0,0,0,0.25)',
        'backdropFilter': 'blur(5px)',
    }
    return (
        <div className='
        grid
        mx-9
        xl:mx-0
        grid-cols-1 
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-4
        gap-4'>
            {
                MiddleWidgets.map((item: any, index: any) => (
                    <div style={MiddleWidgetsStyle} className='col-span-1 h-[252px] cursor-pointer' key={index}>
                        <div className='pl-[35px] pt-[35px] text-[#000] text-[20px] font-medium leading-normal'>{item.title}</div>
                        <div className='w-[80px] h-[1px] bg-[#2BB673] mt-[5px] ml-[35px]'></div>
                        <div className='px-[28px] mt-[16px] text-[#959595)] text-[18px] font-normal leading-[27px] text-justify'>{item.description}</div>
                        {dashLine &&
                            <div className='w-full px-[28px]'>
                                <span className='text-[#464646] text-[18px] font-bold border-b-2 border-dashed border-[#4CB8C4]'>{item.contact}</span>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default MiddleWidgets
