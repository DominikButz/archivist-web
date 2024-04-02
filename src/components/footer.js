
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Footer({position}) {
    const pathname = usePathname();
  return (

    <div className={`flex ${position} h-12  bg-indigo-600 dark:bg-indigo-950 w-screen bottom-0 z-0`}>
        <div className='flex flex-row h-10  w-screen items-center md:items-top justify-evenly z-0'> 
            <Link href="/contact" className={`${pathname === '/contact' ? 'activeLink' : 'inactiveLink' } text-xs md:text-sm`}>Contact </Link>
            <Link href="/documentation" className={`${pathname === '/documentation' ? 'activeLink' : 'inactiveLink' } text-xs md:text-sm`}>Documentation</Link>
            <Link href="/legal" className={`${pathname === '/legal' ? 'activeLink' : 'inactiveLink' } text-xs md:text-sm`}>Legal</Link>
            {/* <Link href="/privacy" className={`${pathname === '/privacy' ? 'activeLink' : 'inactiveLink' } text-xs md:text-sm`}>Privacy Policy</Link> */}
        </div>
        <div className='text-stone-900 dark:text-stone-400 text-[10px] absolute bottom-0 right-0 z-30 h-5 text-nowrap mr-2 justify-self-end'>©2024 by Dominik Butz</div>
    </div>
  )
}

export default Footer