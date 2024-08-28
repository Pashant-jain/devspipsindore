import React from 'react'
import style from './style.module.scss'
import ArrowDown from "/public/assets/icons/arrow-down.svg";
import Link from 'next/link';
import Image from 'next/image';

const MainNavbar = () => {
  return (
    <div className={style['MainNavbar']} >
      <Link href={'#'} className={`text-regular`} >Home</Link>
      <Link href={'#'} className={`text-regular Submenu `} >Library</Link>
      <Link href={'#'} className={`text-regular Submenu `} >About SPIPS <Image src={ArrowDown} alt="DownArrow" width={15} height={15} /></Link>
      <Link href={'#'} className={`text-regular Submenu `} >SPIPS@core <Image src={ArrowDown} alt="DownArrow" width={15} height={15} /></Link>
      <Link href={'#'} className={`text-regular Submenu `} >Departments <Image src={ArrowDown} alt="DownArrow" width={15} height={15} /></Link>
      <Link href={'#'} className={`text-regular Submenu `} >IQAC <Image src={ArrowDown} alt="DownArrow" width={15} height={15} /></Link>
      <Link href={'#'} className={`text-regular Submenu `} >NAAC <Image src={ArrowDown} alt="DownArrow" width={15} height={15} /></Link>
      <Link href={'#'} className={`text-regular Submenu `} >Student Corner <Image src={ArrowDown} alt="DownArrow" width={15} height={15} /></Link>
      <Link href={'#'} className={`text-regular Submenu `} >Facilities <Image src={ArrowDown} alt="DownArrow" width={15} height={15} /></Link>
      <Link href={'#'} className={`text-regular Submenu `} >Research <Image src={ArrowDown} alt="DownArrow" width={15} height={15} /></Link>
      <Link href={'#'} className={`text-regular Submenu `} >Contact <Image src={ArrowDown} alt="DownArrow" width={15} height={15} /></Link>

    

    </div>
  )
}

export default MainNavbar