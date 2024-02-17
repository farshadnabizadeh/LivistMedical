import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { IdAction } from '@/slices/memo'
interface DropDownServicesProps {
    Widgets?: any,
}
const DropDownServices: FC<DropDownServicesProps> = (Widgets) => {
    const dispatch = useDispatch();
    const init:any = 0;
    return (
        <div className='w-[300px] absolute translate-x-[-80px]'>
            <ul className='bg-white w-full mt-[20px]'>
                {
                    Widgets?.Widgets?.map((item: any, index: any) => (
                        <Link key={index} href={`/service/${item.title.replace(' ', '')}`}>
                            <li onMouseEnter={() => dispatch(IdAction(item.id))} onMouseLeave={() => dispatch(IdAction(init))} key={index} className='w-full hover:bg-blue-900 text-[#1D2E66] hover:text-[#ffffff] flex items-center py-[5px] cursor-pointer border-b-[1px] border-[gray]'>
                                <span className='px-5'>
                                    <Image className='w-[20px]' src={item.icon} alt='item Icon' />
                                </span>
                                <span className=''>{item.title}</span>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default DropDownServices
