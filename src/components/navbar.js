'use client';
import * as React from "react"
import PropTypes from "prop-types"
import Image from "next/image";
import Link  from "next/link"
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from "./themeSwitcher";
import {useTheme} from "next-themes";
// import { useEffect } from "react";
import Icon from "/src/images/DrArchiverAppIcon_macOS.png"
import OpenAILogoOnDark from "/src/images/powered-by-openai-badge-filled-on-dark.png"
import OpenAILogoOnLight from "/src/images/powered-by-openai-badge-filled-on-light.png"
import MacOSAppStoreDark from '/src/images/macOS/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import MacOSAppStoreLight from '/src/images/macOS/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg'
import AppStoreDark from '/src/images/iOS/downloadOnAppStoreBadge_black_en.png'
import AppStoreLight from '/src/images/iOS/downloadOnAppStoreBadge_white_en.svg'

const NavigationBar = ({ siteTitle='' }) => {
  const pathname = usePathname();
  const {theme, setTheme} = useTheme();

  
  // useEffect(() => {
  //   themeCheck();
  // }, [theme]);

  // // check theme on component mount
  // useEffect(() => {
  //   themeCheck();
  // }, []);

  // // check and reset theme
  // const themeCheck = () => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //     setTheme('dark')
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     setTheme('light');
  //   }
  // }

  const appStoreImage = theme === 'light' ?  AppStoreLight : AppStoreDark
  const macAppStoreImage = theme === 'light' ? MacOSAppStoreLight : MacOSAppStoreDark
  const openAiLogo = theme == 'light' ? OpenAILogoOnLight : OpenAILogoOnDark

  return (
    <div className="z-10 w-screen fixed bg-bgPrimary h-14 flex items-center justify-between top-0">
      <div className="flex flex-row items-center">
        <Link href="/" ><Image width={40} className="m-2" src={Icon}/></Link>
        <Link href="/" className={`${pathname === '/' ? 'activeLink' : 'inactiveLink' }`}>{siteTitle}</Link>
        <ThemeSwitcher />
      </div>
   
      <div className="flex">
        <Image height={34} className='m-2' src={appStoreImage} alt="Download on App Store"/>
        <Image height={34} className='m-2 hidden sm:block' src={macAppStoreImage} alt="Download on Mac App Store"/>
        <Image height={34} className='m-2 hidden lg:block' src={openAiLogo} alt="Powered by OpenAI"/>
      </div>
   
    </div>
  )
}

NavigationBar.propTypes = {
  siteTitle: PropTypes.string,
}


export default NavigationBar
