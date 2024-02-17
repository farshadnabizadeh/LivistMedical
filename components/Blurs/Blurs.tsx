import React, { FC } from "react";
import GrayBlur from "@/assets/svg/grayBlur.svg";
import greenParticle from "@/assets/svg/greenParticle.svg";
import whiteBlur from "@/assets/svg/whiteBlur.svg";
import lightBlue from "@/assets/svg/lightBlue.svg";
import Image from "next/image";
interface BlursProps {
  status?: boolean;
  footerStatus?: boolean;
  footerBlur1PositionX?: string;
  footerBlur1PositionY?: string;
  footerBlur2PositionX?: string;
  footerBlur2PositionY?: string;
  footerBlur3PositionX?: string;
  footerBlur3PositionY?: string;
  BigBlur?: boolean;
}
const Blurs: FC<BlursProps> = ({
  status,
  footerStatus,
  footerBlur1PositionX,
  footerBlur1PositionY,
  footerBlur2PositionX,
  footerBlur2PositionY,
  footerBlur3PositionX,
  footerBlur3PositionY,
  BigBlur,
}) => {
  const BlurPositions = [
    {
      name: "Gray-Blur",
      X: "translate-x-[519px]",
      Y: "top-[540px]",
      src: GrayBlur,
      W: "",
      H: "",
      style: {},
      status: status,
    },
    {
      name: "Gray-Blur",
      X: "translate-x-[640px]",
      Y: "top-[1910px]",
      src: GrayBlur,
      W: "",
      H: "",
      style: {},
      status: status,
    },
    {
      name: "Green-Blur",
      X: "translate-x-[76px]",
      Y: "top-[736px]",
      src: greenParticle,
      W: "",
      H: "",
      style: {},
      status: status,
    },
    {
      name: "Green-Blur",
      X: footerBlur1PositionX,
      Y: footerBlur1PositionY,
      src: greenParticle,
      W: "",
      H: "",
      style: {},
      status: footerStatus,
    },
    {
      name: "Gray-Blur",
      X: footerBlur2PositionX,
      Y: footerBlur2PositionY,
      src: GrayBlur,
      W: "",
      H: "",
      style: {},
      status: footerStatus,
    },
    {
      name: "Green-Blur",
      X: "translate-x-[1230px]",
      Y: "top-[1040px]",
      src: greenParticle,
      W: "w-[50px]",
      H: "h-[50px]",
      style: {},
      status: status,
    },
    {
      name: "whiteBlur",
      X: "",
      Y: "top-[1730px]",
      src: whiteBlur,
      W: "",
      H: "",
      style: {
        fill: "radial-gradient(111% 111% at 50% 50%, #FFF 0%, #F3F3F3 100%)",
        filter: "drop-shadow(3px 3px 16px rgba(0,0,0,0.25))",
      },
      status: status,
    },
    {
      name: "lightBlue",
      X: footerBlur3PositionX,
      Y: footerBlur3PositionY,
      src: lightBlue,
      W: "",
      H: "",
      style: {
        fill: "var(--colors-sea-1, #4CB8C4)",
        filter: "blur(19.5px)",
      },
      status: footerStatus,
    },
  ];
  return (
    <>
      {BlurPositions.map((item: any, index: any) => (
        <section
          className={`w-full absolute ${item.Y} flex justify-center z-0`}
          key={index}
        >
          <div className="container">
            {item.status && (
              <div className={`${item.X}`}>
                <Image
                  style={item.style}
                  className={`${item.W} ${item.H}`}
                  src={item.src}
                  alt={item.name}
                />
              </div>
            )}
          </div>
        </section>
      ))}
      {
        BigBlur && <section className="w-full flex justify-center absolute z-0 top-[1450px]">
          <div className="container">
            <div className="w-[543px] h-[543px] rounded-full border-[1px] border-[#F2F2F2]"></div>
          </div>
        </section>
      }
    </>
  );
};

export default Blurs;
