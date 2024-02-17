import React, { FC } from "react";
import BlurBox from "./Partials/BlurBox";
import Navbar from "./Partials/Navbar";
import ResponsiveNavbar from "./Partials/ResponsiveNavbar";
import HeaderText from "./Partials/HeaderText";
import HeaderText2 from "./Partials/HeaderText2";
import HeaderText3 from "./Partials/HeaderText3";
interface HeaderProps {
  BackgroundElement?: React.ReactNode;
  HeaderTextComponentActivator?: boolean;
  HeaderTextComponent2Activator?: boolean;
  HeaderTextComponent3Activator?: boolean;
  SingleBlurActivatore?: boolean;
  HeaderTextComponent3ActivatorTitle?: string;
  HeaderTextComponent3ActivatorDescription?: string;
  Height?: string;
  width?: any;
  Title?:any;
}

const Header: FC<HeaderProps> = ({
  BackgroundElement,
  HeaderTextComponentActivator,
  HeaderTextComponent2Activator,
  HeaderTextComponent3Activator,
  HeaderTextComponent3ActivatorTitle,
  HeaderTextComponent3ActivatorDescription,
  SingleBlurActivatore,
  Height,
  width,
  Title,
}) => {
  console.log("HeaderTextComponentActivator", width);

  return (
    <section className={`w-full ${Height} bg-white relative overflow-hidden`}>
      <BlurBox SingleBlurActivatore={SingleBlurActivatore} />
      <Navbar/>
      <ResponsiveNavbar/>
      {HeaderTextComponentActivator && <HeaderText />}
      {HeaderTextComponent2Activator && <HeaderText2 Title={Title}/>}
      {HeaderTextComponent3Activator && (
        <HeaderText3
          HeaderTextComponent3ActivatorTitle={
            HeaderTextComponent3ActivatorTitle
          }
          HeaderTextComponent3ActivatorDescription={
            HeaderTextComponent3ActivatorDescription
          }
        />
      )}
      {BackgroundElement}
    </section>
  );
};

export default Header;
