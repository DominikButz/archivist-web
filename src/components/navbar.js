'use client';
import * as React from "react"
import PropTypes from "prop-types"
import Image from "next/image";
import Link  from "next/link"
import Icon from "/src/images/DrArchiverAppIcon_macOS.png"
import OpenAILogo from "/src/images/powered-by-openai-badge-outlined-on-dark.png"
import MacOSAppStore from '/src/images/macOS/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import AppStore from '/src/images/iOS/downloadOnAppStoreBadge_black_en.png'

const NavigationBar = ({ siteTitle='' }) => {
  return (
    <div className="z-10 w-screen fixed bg-bgPrimary h-14 flex items-center justify-between top-0">
      <div className="flex flex-row items-center">
        <Link href="/" ><Image width={40} className="m-2" src={Icon}/></Link>
        <Link href="/" className="exactNavLink">{siteTitle}</Link>
      </div>
   
      <div className="flex">
        <Image height={30} className='m-2' src={AppStore} alt="Download on App Store"/>
        <Image height={30} className='m-2 hidden sm:block' src={MacOSAppStore} alt="Download on Mac App Store"/>
        <Image height={30} className='m-2 hidden lg:block' src={OpenAILogo} alt="Powered by OpenAI"/>
      </div>
   
    </div>
  )
}

NavigationBar.propTypes = {
  siteTitle: PropTypes.string,
}


export default NavigationBar
