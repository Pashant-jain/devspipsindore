import React from 'react'
import style from './style.module.scss'

const AnnouncementsCard = () => {
  return (
    <div className={`${style['AnnouncementsCard_wrp']}`} >
        <div className={style['Announcement_date']} >
            <strong className='heading-2' >17</strong>
            <span className='.text-regular' >August</span>
        </div>
       <p className='text-regular' >Lorem ipsum dolor sit amet consectetur adipiscing elidolor</p>
        <div className={style['tag']} >News</div>
    </div>
  )
}

export default AnnouncementsCard