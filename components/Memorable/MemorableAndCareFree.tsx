import React from 'react'
import useTrans from '@/Hooks/useTrans'
const MemorableAndCareFree = () => {
    const t=useTrans();
    return (
        <section className='w-full flex justify-center'>
            <div className='container'>
                <div className='full flex justify-center pt-[70px]'>
                    <span className='text-[#000] text-sm sm:text-base md:text-lg lg:text-[25px] font-medium leading-normal'>{t("A memorable and carefree trip for you...")}</span>
                </div>
            </div>
        </section>
    )
}

export default MemorableAndCareFree
