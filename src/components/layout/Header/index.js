import React from 'react'
import SubNavbar from './SubNavbar'
import MainNavbar from './MainNavbar'
import TopHeader from './TopHeader'

const Header = () => {
  return (
    <div>
        <TopHeader/>
        <SubNavbar/>
        <MainNavbar/>
    </div>
  )
}

export default Header