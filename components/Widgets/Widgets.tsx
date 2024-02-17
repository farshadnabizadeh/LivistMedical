import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Image from "next/image";
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
import Link from "next/link";
import useTrans from '@/Hooks/useTrans'
const Widgets = () => {
  const [isHovered, setHovered] = useState<number>(0);
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const handleMouseEnter = (data: number) => {
    setHovered(data);
  };
  
  const handleMouseLeave = (data: number) => {
    setHovered(0);
  };
  const t = useTrans()
  const Widgets = [
    {
      id: 1,
      icon: isHovered === 1 ? HairTransplantHover : HairTransplant,
      title: t("ArmLift Surgery"),
      path: '/service/ArmLift Surgery'
    },
    {
      id: 2,
      icon: isHovered === 2 ? RhinoPlastyHover : RhinoPlasty,
      title: t("Eyelid Aesthetics"),
      path: '/service/EyelidAesthetics'
    },
    {
      id: 3,
      icon: isHovered === 3 ? JawAngulationHover : JawAngulation,
      title: t("Mentoplasty Procedures"),
      path: '/service/MentoplastyProcedures'
    },
    {
      id: 4,
      icon: isHovered === 4 ? BlepharoPlastyHover : BlepharoPlasty,
      title: t("Prominent Ear"),
      path: '/service/ProminentEar'
    },
    {
      id: 5,
      icon: isHovered === 5 ? LipLiftHover : LipLift,
      title: t("Breast Lift"),
      path: '/service/BreastLift'
    },
    {
      id: 6,
      icon: isHovered === 6 ? LipusactionHover : Lipusaction,
      title: t("Mommy Makeover"),
      path: '/service/MommyMakeover'
    },
    {
      id: 7,
      icon: isHovered === 7 ? IVFHover : IVF,
      title: t("Vaginoplasty"),
      path: '/service/Vaginoplasty'
    },
    {
      id: 8,
      icon: isHovered === 8 ? StomachHover : Stomach,
      title: t("Rhinoplasty"),
      path: '/service/Rhinoplasty'
    },
    {
      id: 9,
      icon: isHovered === 9 ? DentalServicesHover : DentalServices,
      title: t("Almond Eye Surgery"),
      path: '/service/AlmondEyeSurgery'
    },
    {
      id: 10,
      icon: isHovered === 10 ? BreastSurgeryHover : BreastSurgery,
      title: t("Tummy Tuck"),
      path: '/service/TummyTuck'
    },
    {
      id: 11,
      icon: isHovered === 11 ? SkinHover : Skin,
      title: t("Lip Lift"),
      path: '/service/LipLift'
    },
    {
      id: 12,
      icon: isHovered === 12 ? AskHover : Ask,
      title: t("Face Lift"),
      path: '/service/FaceLift'
    },
    {
      id: 13,
      icon: isHovered === 13 ? BreastSurgeryHover : BreastSurgery,
      title: t("Breast Aesthetics"),
      path: '/service/BreastAesthetics'
    },
    {
      id: 14,
      icon: isHovered === 14 ? DentalServicesHover : DentalServices,
      title: t("Bichectomy"),
      path: '/service/Bichectomy'
    },

  ];

  return (
    <section className="w-full mt-44 sm:mt-20 flex justify-center">
      <div className="container mt-[35px]">
        <div className="
               grid
               mx-5
               xl:mx-0
               grid-cols-1 
               sm:grid-cols-6 
               md:grid-cols-6 
               lg:grid-cols-8 
               xl:grid-cols-10 
               2xl:grid-cols-12 
               gap-4">
          {Widgets.map((item, index) => (
            <Link href={item.path} key={item.id} className="col-span-2 transition-transform transform hover:scale-105 hover:border hover:border-solid hover:border-gray-300 hover:bg-blue-900 hover:shadow-xl hover:backdrop-blur-md hover:text-white border border-solid border-gray-300 bg-white bg-opacity-60 shadow-xl backdrop-blur-md cursor-pointer flex justify-center items-center rounded-[45px] h-[182px]">
              <motion.div 
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
                id={`widget-${item.id}`} // Ensure ID uniqueness
                className="w-full h-full flex justify-center items-center"
                initial={{ opacity: 0, y: 20 }} // Start from invisible and slightly down
                animate={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
                transition={{ delay: index * 0.1 }} // Delay based on index, adjust timing as needed
              >
                <div className="w-full">
                  <div className="flex justify-center">
                    <Image src={item.icon} alt={item.title} width={50} height={50} /> {/* Ensure your Image component has defined size */}
                  </div>
                  <div className="w-full text-center mt-[12px]">
                    {item.title}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Widgets;
