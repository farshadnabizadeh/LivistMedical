import React,{FC} from "react";
interface HeaderText3Props{
  HeaderTextComponent3ActivatorTitle?:string,
  HeaderTextComponent3ActivatorDescription?:string,
}
const HeaderText3:FC<HeaderText3Props> = ({
  HeaderTextComponent3ActivatorTitle,
  HeaderTextComponent3ActivatorDescription,
}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="container">
        <div className="mt-[281px] ml-[76px]">
            <div className="text-black font-Cairo text-5xl font-bold leading-normal">{HeaderTextComponent3ActivatorTitle}</div>
            <div className="text-gray-700 font-Cairo text-lg font-medium leading-normal">{HeaderTextComponent3ActivatorDescription}</div>
            <div className="bg-[#1D2E66] w-[80px] h-[1px] mt-[18px]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderText3;
