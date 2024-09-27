import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'

const SubNavbar = () => {
  return (
    <div className={style['sumNavbar']} >
      <Link href={'/liberary'} className="text-regular" >Library</Link>
      <Link href={'/clubs'} className="text-regular" >Clubs</Link>
      <Link href={'#'} className="text-regular" >Students</Link>
      <Link href={'#'} className="text-regular" >Staff</Link>
      <Link href={'#'} className="text-regular" >Photo Gallery</Link>
      <Link href={'/NIRF'} className="text-regular" >NIRF</Link>


    </div>
  )
}

export default SubNavbar