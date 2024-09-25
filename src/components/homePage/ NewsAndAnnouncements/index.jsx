import React from 'react'
import style from './style.module.scss'
import SectionHeading from '../../comman/sectionHeading'
import AnnouncementsCard from '@/components/cards/AnnouncementsCard'

const  NewsAndAnnouncements = ({sectionGap}) => {
  
  return (
    <div className={`${style['NewsAndAnnouncements_Wrp']} ${sectionGap === 'top' ? 'spacing_top' : sectionGap === 'bottom' ? 'spacing_bottom' : sectionGap === 'both' ?'spacing_both' : ''}`} > 
    <div className='container' >
    <SectionHeading title='Announcements and News' description={ <>Lorem ipsum dolor sit amet consectetur adipiscing elitdolor mattis sit phasellus mollis sit <br />aliquam sit nullam neques.</>}
 />
 <div className={style['Announcements_list']} >
  <AnnouncementsCard/>
  <AnnouncementsCard/>
  <AnnouncementsCard/>
 </div>
    </div>
    </div>
  )
}

export default  NewsAndAnnouncements