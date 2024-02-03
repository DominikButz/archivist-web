'use client';
import * as React from "react"
import PropTypes from "prop-types"
import Image from "next/image";
import Link  from "next/link"
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from "./themeSwitcher";
import {useTheme} from "next-themes";
import { useIsClient } from "@/util/is-client-ctx";
import windowResizingHandler from "@/util/windowSizeListener";
import { useEffect, useState } from "react";
import IconDark from "/src/images/DrArchiverAppIcon_macOS.png"
import IconLight from "/src/images/ArchivistAppIcon_macOS.png"
import OpenAILogoOnDark from "/src/images/powered-by-openai-badge-filled-on-dark.png"
import OpenAILogoOnLight from "/src/images/powered-by-openai-badge-filled-on-light.png"
import MacOSAppStoreDark from '/src/images/macOS/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import MacOSAppStoreLight from '/src/images/macOS/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg'
import AppStoreDark from '/src/images/iOS/downloadOnAppStoreBadge_black_en.png'
import AppStoreLight from '/src/images/iOS/downloadOnAppStoreBadge_white_en.svg'

const NavigationBar = ({ siteTitle='' }) => {
  const pathname = usePathname();
  const {theme, setTheme} = useTheme();

  const isClient = useIsClient();

  const [windowSize, setWindowSize] = useState([
    isClient ? window.innerWidth : 0,
    isClient ? window.innerHeight : 0,
  ]);


  useEffect(() => {
    return windowResizingHandler(setWindowSize)
  }, [setWindowSize]);


  
  const width = windowSize[0]
  const height = windowSize[1]
  const iconHeight = (width < 768 || height < 480) ?  30 : 36

  const appIcon = theme === 'light' ? IconLight : IconDark
  const appStoreImage = theme === 'light' ?  AppStoreLight : AppStoreDark
  const macAppStoreImage = theme === 'light' ? MacOSAppStoreLight : MacOSAppStoreDark
  const openAiLogo = theme == 'light' ? OpenAILogoOnLight : OpenAILogoOnDark

  return (
    <div className="z-10 w-screen fixed bg-indigo-500 dark:bg-indigo-950 h-12 sm:h-14 mobilePortrait:h-12 mobileLandscape:h-12 flex items-center justify-between top-0">
      <div className="flex flex-row items-center">
        <Link href="/" ><Image height={iconHeight + 2} className='m-2' src={appIcon} alt='Archivist app icon'/></Link>
        <Link href="/" className={`${pathname === '/' ? 'activeLink' : 'inactiveLink' } `}>{siteTitle}</Link>
        <ThemeSwitcher />
      </div>
   
      <div className="flex flex-row items-center justify-end">
        <Image  height={iconHeight} className="m-2" src={appStoreImage} alt="Download on App Store"/>
        <Image height={iconHeight} className='m-2 hidden sm:block' src={macAppStoreImage} alt="Download on Mac App Store"/>
        <Image height={iconHeight} className='m-2 hidden sm:block' src={openAiLogo} alt="Powered by OpenAI"/>
      </div>
   
    </div>
  )
}

NavigationBar.propTypes = {
  siteTitle: PropTypes.string,
}


export default NavigationBar
