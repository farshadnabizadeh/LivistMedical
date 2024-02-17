import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import navLogo from '@/assets/svg/navLogo.svg';
import search from '@/assets/svg/search.svg';
import whatsapp from '@/assets/svg/whatsapp.svg';
import AppoinmentBtn from './AppoinmentBtn';
import DropDownServices from './DropDownServices';
import HairTransplant from "@/assets/svg/HairTransplant.svg";
import HairTransplantHover from "@/assets/svg/HairTransplantHover.svg";
import RhinoPlasty from "@/assets/svg/Rhinoplasty.svg";
import RhinoPlastyHover from "@/assets/svg/RhinoPlastyHover.svg";
import JawAngulation from "@/assets/svg/jawAngulation.svg";
import JawAngulationHover from "@/assets/svg/JawAngulationHover.svg";
import BlepharoPlasty from "@/assets/svg/Blepharoplasty.svg";
import BlepharoPlastyHover from "@/assets/svg/BlepharoPlastyHover.svg";
import LipLift from "@/assets/svg/LipLift.svg";
import LipLiftHover from "@/assets/svg/LipLiftHover.svg";
import IVF from "@/assets/svg/ivf.svg";
import IVFHover from "@/assets/svg/IVFHover.svg";
import Stomach from "@/assets/svg/stomach.svg";
import StomachHover from "@/assets/svg/StomachHover.svg";
import DentalServices from "@/assets/svg/DentalServices.svg";
import DentalServicesHover from "@/assets/svg/DentalServicesHover.svg";
import BreastSurgery from "@/assets/svg/breastSurgery.svg";
import BreastSurgeryHover from "@/assets/svg/BreastSurgeryHover.svg";
import Lipusaction from "@/assets/svg/Lipusuction.svg";
import LipusactionHover from "@/assets/svg/LipusactionHover.svg";
import Skin from "@/assets/svg/skin.svg";
import SkinHover from "@/assets/svg/SkinHover.svg";
import Ask from "@/assets/svg/Ask.svg";
import AskHover from "@/assets/svg/AskHover.svg";
import { useSelector } from 'react-redux';
import LangSelect from '@/components/LangPicker/LangPicker';
import useTrans from '@/Hooks/useTrans';
const Navbar = () => {
    const t = useTrans();
    const isHovered = useSelector((state: any) => state.Memo?.id?.payload);
    const [serviceHover, setServiceHover] = useState<boolean>(false)
    const router = useRouter();
    const pathname = router.pathname;
    const NavbarStyle = {
        'background': 'rgba(255, 255, 255, 0.70)',
        'box-shadow': '0px 0px 16px -7px rgba(0, 0, 0, 0.20)',
        'backdropFilter': 'blur(67.5px)',
    }
    const navigationItems = [
        { path: '/', label: t("Home") },
        { path: '/service', label: t("Services") },
        { path: '/review', label: t("Reviews") },
        { path: '#', label: t("Portfolio") },
        { path: '#', label: t("Hotels") },
        { path: '/aboutus', label: t("About") },
        { path: '/contactus', label: t("Contact us") },
    ];

    const handleMouseEnter = (data: any) => {
        console.log(data)
        if (data == 'Services' || data == 'خدمات') {
            setServiceHover(true)
        }
    };

    const handleMouseLeave = (data: any) => {
        if (data == 'Services' || data == 'خدمات') {
            setServiceHover(false)
        }
    };
    const Widgets = [
        {
            id: 1,
            icon: isHovered === 1 ? HairTransplantHover : HairTransplant,
            title: t("Arm Lift Surgery"),
        },
        {
            id: 2,
            icon: isHovered === 2 ? RhinoPlastyHover : RhinoPlasty,
            title: t("Eyelid Aesthetics"),
        },
        {
            id: 3,
            icon: isHovered === 3 ? JawAngulationHover : JawAngulation,
            title: t("Mentoplasty Procedures"),
        },
        {
            id: 4,
            icon: isHovered === 4 ? BlepharoPlastyHover : BlepharoPlasty,
            title: t("Prominent Ear"),
        },
        {
            id: 5,
            icon: isHovered === 5 ? LipLiftHover : LipLift,
            title: t("Breast Lift"),
        },
        {
            id: 6,
            icon: isHovered === 6 ? LipusactionHover : Lipusaction,
            title: t("Mommy Makeover"),
        },
        {
            id: 7,
            icon: isHovered === 7 ? IVFHover : IVF,
            title: t("Vaginoplasty"),
        },
        {
            id: 8,
            icon: isHovered === 8 ? StomachHover : Stomach,
            title: t("Rhinoplasty"),
        },
        {
            id: 9,
            icon: isHovered === 9 ? DentalServicesHover : DentalServices,
            title: t("Almond EyeSurgery"),
        },
        {
            id: 10,
            icon: isHovered === 10 ? BreastSurgeryHover : BreastSurgery,
            title: t("Tummy Tuck"),
        },
        {
            id: 11,
            icon: isHovered === 11 ? SkinHover : Skin,
            title: t("Lip Lift"),
        },
        {
            id: 12,
            icon: isHovered === 12 ? AskHover : Ask,
            title: t("Face Lift"),
        },
        {
            id: 13,
            icon: isHovered === 13 ? BreastSurgeryHover : BreastSurgery,
            title: t("Breast Aesthetics"),
        },
        {
            id: 14,
            icon: isHovered === 14 ? DentalServicesHover : DentalServices,
            title: t("Bichectomy"),
        },

    ];

    return (
        <div className='w-full h-[70px] absolute top-[30px] z-50 hidden xl:flex justify-center'>
            <div className='container'>
                <div style={NavbarStyle} className='rounded-[50px] border-[1px] border-[#fff] h-[70px] flex items-center justify-between bg-[rgba(255, 255, 255, 0.70)] shadow-md backdrop-blur-md'>
                    <div className='flex'>
                        <Link href='/'>
                            <div className='pl-[30px] w-[130px] cursor-pointer'>
                                <Image src={navLogo} alt='NavBar Logo' />
                            </div>
                        </Link>
                        <div className='flex items-center pl-[16px] cursor-pointer text-sm text-[#2BB673] leading-normal font-semibold'>
                            <LangSelect />
                        </div>
                    </div>
                    <div>
                        <ul className='flex list-none'>
                            {navigationItems.map((item, index) => (
                                <Link key={index} href={item.path}>
                                    <li key={index} onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={() => handleMouseLeave(item.label)} className={`mx-3 cursor-pointer ${pathname === item.path ? 'text-[#1D2E66]' : 'text-[#7E7E7E]'} text-lg font-medium relative`}>
                                        {item.label}
                                        {item.path === '/service' && serviceHover && <DropDownServices Widgets={Widgets} />}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className='flex'>
                        <div className='w-[38px] cursor-pointer h-[38px] rounded-full mr-[15px] bg-[rgba(255,255,255,0.60)] flex justify-center items-center'>
                            <Image src={search} alt='Search' />
                        </div>
                        <div className='w-[38px] cursor-pointer h-[38px] rounded-full mr-[15px] bg-[rgba(255,255,255,0.60)] flex justify-center items-center'>
                            <Image src={whatsapp} alt='whatsapp' />
                        </div>
                        <div className='bg-[rgba(255,255,255,0.60)] flex items-center mr-[16px] rounded-[50px] cursor-pointer'>
                            <AppoinmentBtn BtnName={t('Appointment')} ImageSwitcher={true} ClassName={'text-[#2BB673] text-lg font-medium'} ImageClassName={'mx-[13px]'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
