import React, { FC, forwardRef, useEffect, useRef, useState } from "react";
import { Group, Avatar, Text, Select } from "@mantine/core";
import { useRouter } from "next/router";
// import { useClickOutside } from "~/utils/hooks";
// import useIsMobile from "~/utils/hooks/isMobile";
import { UiPopover } from "@/lib";
import useIsMobile from "@/utils/hooks/isMobile";
import { useClickOutside } from "@/utils/hooks";

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}


// pages changed
const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => {
    return (
      <div ref={ref} {...others}>
        <Group>
          {/* <Avatar src={image} /> */}
          <img
            src={image}
            className="w-8 h-6"
            // @ts-ignore
            crossOrigin="anonymous"
          />

          <div>
            <Text size="sm">{label}</Text>
            <Text size="xs" color="dimmed">
              {description}
            </Text>
          </div>
        </Group>
      </div>
    );
  }
);


  SelectItem.displayName = "SelectItem";


const LangSelect: FC = () => {
  const router = useRouter();
  const {locale} = router
  const [lang, setLang] = useState<string>(locale ?? 'en');
  const [activelangFlag, setActivelangFlag] = useState(data.filter(item => item.value === locale)[0]?.image)
  const [opened, setOpened] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile()

  const close = () => {
    setOpened(false)
  }

  const open = () => {
    setOpened(true)
  }

  const handleFontChange = (lang: string) => {
    const body = document.getElementsByTagName('body')[0]
    if(lang == 'tr') {
      body.id = 'turkish-font'
    } else {
      if(lang !== 'tr') {
        body.id = ''
      }
    }
  }

  const handleLangChange = (e: string) => {
    close()
    setLang((prevLang) => e);
    router.push(`${router.asPath}`, undefined, { locale: e });
    const flag = data.filter(item => item.value === lang)[0]?.image
    
      handleFontChange(e)
    
  };

  const handleClickOutside = () => {
     close()
  } 

  useClickOutside(inputRef, handleClickOutside)

  const clickOntheInput = () => {
    inputRef?.current?.click();
  };

  const handleClick = () => {
    opened ? close() : open()
  }


  const ActiveLang = data.filter(lang => lang.value === locale)[0]

  useEffect(() => {

   const flag = data.filter(item => item.value === lang)[0]?.image
   setActivelangFlag(flag)
    
   handleFontChange(lang)
   
  }, 
  [lang, locale] )
  

  return (
    <div className="inline-flex justify-end " ref={inputRef}>
      {/* <NativeSelect
        value={lang}
        onChange={(event) => setLang(event.currentTarget.value)}
        data={["English", "فارسی", "русский", "العربية"]}
        rightSection={<IconChevronDown size={14} />}
        classNames={{
          wrapper: classes.wrapper,
          input: classes.input,
        }
      /> */}
      <UiPopover position={isMobile ? "bottom-end" : "bottom"} withArrow arrowOffset={100} shadow="md" opened={opened} >
        <UiPopover.Target>
            <button className="w-full md:w-36 border-[3px] border-white px-3 py-1 rounded-[26px] text-sm font-semibold text-white flex items-center justify-center" onClick={handleClick}>
            <img src={activelangFlag} alt='active language flag' className="w-6 mr-2" />
            <span className="text-sm text-[#2BB673] leading-normal font-semibold">
                {ActiveLang.label}
            </span>
            </button>
        </UiPopover.Target>
        <UiPopover.Dropdown className="">
            <div className="grid grid-cols-2 gap-8 gap-x-12 md:gap-x-8 p-2 w-52">
                {
                    data.map(lang => {
                        const {label, value, description, image} = lang;
                        return (
                            <div className="flex space-x-2 cursor-pointer" onClick={() => {handleLangChange(value)}} key={value}>
                                <img src={image} alt={label} className="w-4" />
                                <span className="text-xs font-medium">{label}</span>
                            </div>
                        )
                    })
                }          
            </div>
        </UiPopover.Dropdown>
      </UiPopover>
    </div>
  );
};

const data = [
  {
    image: "/images/unitedKingdomFlag.png",
    // image: "https://countryflagsapi.com/png/united kingdom",
    label: "English",
    value: "en",
    description: "",
  },

  {
    image: "/images/turkeyFlag.svg",
    // image: "https://countryflagsapi.com/svg/turkey",
    label: "Türkçe",
    value: "tr",
    description: "",
  },
  {
    image: "/images/russiaFlag.svg",
    // image: "https://countryflagsapi.com/svg/ru",
    label: "Русский",
    value: "ru",
    description: "",
  },
  {
    image: "/images/iranFlag.svg",
    // image: "https://countryflagsapi.com/svg/iran",
    label: "فارسی",
    value: "fa",
    description: "",
  },
  // {
  //   image: "https://countryflagsapi.com/svg/sa",
  //   label: "العربية",
  //   value: "ar",
  //   description: "",
  // },
];


  LangSelect.displayName = "LangSelect";


export default LangSelect;
