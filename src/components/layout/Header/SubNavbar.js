import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'

const SubNavbar = () => {
  return (
    <div className={style['sumNavbar']} >
      <Link href={'#'} className="text-regular" >Library</Link>
      <Link href={'#'} className="text-regular" >Students</Link>
      <Link href={'#'} className="text-regular" >Students</Link>
      <Link href={'#'} className="text-regular" >Staff</Link>
      <Link href={'#'} className="text-regular" >Photo Gallery</Link>
      <Link href={'#'} className="text-regular" >NIRF</Link>


    </div>
  )
}

export default SubNavbar