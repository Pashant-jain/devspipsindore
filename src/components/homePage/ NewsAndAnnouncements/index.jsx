import React from 'react'
import style from './style.module.scss'
import SectionHeading from '../../comman/sectionHeading'
import AnnouncementsCard from '@/components/cards/AnnouncementsCard'
import Slider from 'react-slick'

const  NewsAndAnnouncements = ({sectionGap}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: true
    
  };
  return (
    <div className={`${style['NewsAndAnnouncements_Wrp']} ${sectionGap === 'top' ? 'spacing_top' : sectionGap === 'bottom' ? 'spacing_bottom' : sectionGap === 'both' ?'spacing_both' : ''}`} > 
    <div className='container' >
    <SectionHeading title='Announcements and News' description={ <>Lorem ipsum dolor sit amet consectetur adipiscing elitdolor mattis sit phasellus mollis sit <br />aliquam sit nullam neques.</>}
 />
 <div className={`Announcements_list ${style['Announcements_list']}`} >
  <Slider {...settings} >
  <AnnouncementsCard/>
  <AnnouncementsCard/>
  <AnnouncementsCard/>
  <AnnouncementsCard/>
  <AnnouncementsCard/>
  </Slider>
 </div>
    </div>
    </div>
  )
}

export default  NewsAndAnnouncements