import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import CardImage from "/public/assets/images/card_img.jpeg";
const FeaturedCoursesCard = () => {
  return (
    <div className={style['courses_card']} >
    <Image src={CardImage} alt='' width={378} height={200} loading='lazy' className={style['card_img']} />  
    <div className={style['']} >
    </div>  I
    </div>
  )
}

export default FeaturedCoursesCard