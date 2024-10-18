import React, { useState } from 'react'
import style from './style.module.scss'
import SectionHeading from '../../comman/sectionHeading'
import { Tab, Tabs } from 'react-bootstrap'
import FeaturedCoursesCard from '@/components/cards/FeaturedCoursesCard'
import Slider from 'react-slick'

const FeaturedCourses = ({sectionGap}) => {
  const [key, setKey] = useState('tab1');

  const TabContent = () =>{
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      adaptiveHeight: true
    };
    return(
      <div className={style['FeaturedCourses_list']} >
         <Slider {...settings} >
        <FeaturedCoursesCard/>
        <FeaturedCoursesCard/>
        <FeaturedCoursesCard/>
        <FeaturedCoursesCard/>
        <FeaturedCoursesCard/>
        <FeaturedCoursesCard/>
        </Slider>
      </div>
    )
  }
  return (
    <div className={`${style['FeaturedCourses']} ${sectionGap === 'top' ? 'spacing_top' : sectionGap === 'bottom' ? 'spacing_bottom' : sectionGap === 'both' ?'spacing_both' : ''} `} >
<div className='container' >
  <SectionHeading title='Explore Featured Online Courses' description={ <>Lorem ipsum dolor sit amet consectetur adipiscing elitdolor mattis sit phasellus mollis sit <br />aliquam sit nullam neques.</>} />
  <div className={`FeaturedCourses_list_wrp text-center ${style['FeaturedCourses_inner']}`} >
  <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="tab1" title="Management">
       <TabContent/>
      </Tab>
      <Tab eventKey="tab2" title="Computer Science">
      <TabContent/>
      </Tab>
      <Tab eventKey="tab3" title="Social Science">
      <TabContent/>
      </Tab>
      <Tab eventKey="tab4" title="Faculty Members">
      <TabContent/>
      </Tab>
    </Tabs>
  </div>
</div>
    </div>
  )
}

export default FeaturedCourses