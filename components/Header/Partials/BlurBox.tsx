import React, { FC } from 'react';
import Blur from '@/assets/png/Blur.png';
import Image from 'next/image';
import greenParticle from '@/assets/svg/greenParticle.svg';
interface BlurBoxProps {
    SingleBlurActivatore?: boolean,
}
const BlurBox: FC<BlurBoxProps> = ({ SingleBlurActivatore }) => {

    return (
        <div className='w-full flex justify-center h-[523px] absolute top-0'>
            <div className='container h-full'>
                <div className='w-full h-full overflow-hidden -translate-y-[97px] translate-x-[189px] blur-lg'>
                    <div className="absolute w-full h-full z-0">
                        <Image
                            src={Blur}
                            alt="Blurred Background"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    {
                        SingleBlurActivatore && <div className='w-[52px] h-[52px] rounded-full bg-[#2BB673] blur-md absolute bottom-[54px] right-[120px] z-10'>
                            <Image src={greenParticle} alt='Green Particle' />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BlurBox;
