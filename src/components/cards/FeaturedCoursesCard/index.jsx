import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import CardImage from "/public/assets/images/card_img.jpeg";
const FeaturedCoursesCard = () => {
  return (
    <div className={style['courses_card']} >
    <Image src={CardImage} alt='' width={378} height={200} loading='lazy' className={style['card_img']} />  
    <div className={style['courses_card_dtl']}  >
      <div className={style['courses_card_speciality']}  >
          <div>
          <Image src={CardImage} alt='' width={378} height={200} loading='lazy' />  
          </div>
      </div>
      <h3 className='heading-5' >A Comprehensive Overview of The Field of Education.</h3>
    </div>
    </div>
  )
}

export default FeaturedCoursesCard