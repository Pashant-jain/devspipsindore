import React from 'react'
import style from './style.module.scss'

const SectionHeading = ({title,description}) => {
  return (
    <div className={`text-center ${style['SectionHeading']} `} >
     <h2 className='heading-2' >{title}</h2>
    {description &&  <p className='text-regular' >{description}</p>}
     </div>
  )
}

export default SectionHeading