'use client';
import React from 'react'
import Link from 'next/link';

function Footer({position}) {
  return (


    <div className={`flex ${position} h-18 bg-bgPrimary w-screen bottom-0 z-0`}>
        <div className='flex flex-row h-16 w-screen items-center justify-evenly z-0'> 
            <Link href="/contact" className='exactNavLink text-xs md:text-sm'>Contact </Link>
            {/* <Link href="/terms" className='exactNavLink text-xs md:text-sm'>Terms & Conditions </Link>
            <Link href="/privacy" className='exactNavLink text-xs md:text-sm'>Privacy Policy</Link> */}
        </div>
        <div className='text-slate-400 text-xs absolute bottom-0 right-0 z-30 h-5 text-nowrap mr-2 justify-self-end'>©2024 by Dominik Butz</div>
    </div>
  )
}

export default Footer