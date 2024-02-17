import React, { useState } from "react";
import Image from "next/image";
import navLogo from "@/assets/svg/navLogo.svg";
import MenuResponsive from "@/assets/svg/menu-responsive.svg";
import Link from "next/link";
import DropDown from '@/assets/png/down-arrow.png'
import { useSelector } from 'react-redux';
import useTrans from '@/Hooks/useTrans';
const ResponsiveNavbar = () => {
  const [menuList, setMenuList] = useState<boolean>(false)
  const t = useTrans();
  const isHovered = useSelector((state: any) => state.Memo?.id?.payload);
  const [ServicesHover, setServicesHover] = useState<any>(false);
  const handleMouseEnter = () => {
    setServicesHover(!ServicesHover)
  };
  const Widgets = [
    {
      id: 1,
      title: t("Arm Lift Surgery"),
    },
    {
      id: 2,
      title: t("Eyelid Aesthetics"),
    },
    {
      id: 3,
      title: t("Mentoplasty Procedures"),
    },
    {
      id: 4,
      title: t("Prominent Ear"),
    },
    {
      id: 5,
      title: t("Breast Lift"),
    },
    {
      id: 6,
      title: t("Mommy Makeover"),
    },
    {
      id: 7,
      title: t("Vaginoplasty"),
    },
    {
      id: 8,
      title: t("Rhinoplasty"),
    },
    {
      id: 9,
      title: t("Almond EyeSurgery"),
    },
    {
      id: 10,
      title: t("Tummy Tuck"),
    },
    {
      id: 11,
      title: t("Lip Lift"),
    },
    {
      id: 12,
      title: t("Face Lift"),
    },
    {
      id: 13,
      title: t("Breast Aesthetics"),
    },
    {
      id: 14,
      title: t("Bichectomy"),
    },

  ];
  console.log(ServicesHover)
  const toggle = () => {
    setMenuList(!menuList)
  }
  return (
    <div className="w-full absolute top-0 z-20 block xl:hidden justify-center">
      <div className="w-full flex items-center justify-between">
        <div className="w-full flex items-center p-[20px]">
          <Image src={navLogo} alt="navLogo" />
        </div>
        <div className="w-full flex justify-end items-center p-[20px]">
          <Image
            onClick={toggle}
            className="w-[20px] cursor-pointer"
            src={MenuResponsive}
            alt="MenuResponsive"
          />
        </div>
      </div>
      <div className={`w-full ${menuList ? 'block' : 'hidden'}`}>
        <ul className="w-full list-item py-4 px-5 bg-[#ffffff]">
          <Link href={'/'}><li className="text-gray-600 font-cairo text-base font-medium my-3 border-b-[1px] border-[#ededed] py-3">Home</li></Link>

          <li className="text-gray-600 font-cairo text-base font-medium my-3 border-b-[1px] border-[#ededed] py-3">
            <div  className="w-full h-full cursor-pointer flex justify-between">
                <div><Link href={'/service'}>Services</Link></div>
                <div onClick={handleMouseEnter} className="w-full h-full flex justify-end">
                  <Image src={DropDown} alt="dropdown" className={`w-[5%] ${ServicesHover?'rotate-180':''}`}/>
                </div>
            </div>
            <ul className={`w-full  mt-4 ${ServicesHover ? 'grid grid-cols-2 gap-3' : 'hidden'}`}>
              {
                Widgets?.map((item: any, index: any) => (
                  <Link key={index} className="border-1 border-[gray] py-2 flex justify-center items-center w-full rounded-md text-sm tracking-[0.01rem] bg-slate-600 text-[#fff]" href={`/service/${item.title.replace(' ', '')}`}>
                    <li>
                      <div className='w-full'>{item.title}</div>
                    </li>
                  </Link>
                ))
              }
            </ul>
          </li>

          <Link href={'/review'}><li className="text-gray-600 font-cairo text-base font-medium my-3 border-b-[1px] border-[#ededed] py-3">Reviews</li></Link>
          <li className="text-gray-600 font-cairo text-base font-medium my-3 border-b-[1px] border-[#ededed] py-3">Portfolio</li>
          <li className="text-gray-600 font-cairo text-base font-medium my-3 border-b-[1px] border-[#ededed] py-3">Hotels</li>
          <Link href={'/aboutus'}><li className="text-gray-600 font-cairo text-base font-medium my-3 border-b-[1px] border-[#ededed] py-3">About</li></Link>
          <Link href={'/contactus'}><li className="text-gray-600 font-cairo text-base font-medium my-3 py-3">Contact Us</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
