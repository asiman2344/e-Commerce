import React from 'react'
import CategoriesContainer from './categoriesContainer.jsx'
import './component.css'
import Banner from '../assets/banner.png';
import { Outlet, useLocation } from 'react-router-dom';
import Card from '../components/card.jsx'

function generalContainer({ isBlurred }) {
  const location = useLocation();
  const isSubCategoryRoute = location.pathname.includes('subCategory2') ||
    location.pathname.includes('advertisement') ||
    location.pathname.includes('card');

  const homeContainerClass = location.pathname.includes('card') ? 'home-container w-[100%] mx-auto' : 'home-container w-[85%] mx-auto';

  return (
    <div className={isBlurred ? 'general-wrapper general-blur-wrapper' : 'general-wrapper'}>
      <div className="banner-wrapper w-[11%] h-[100vh] fixed left-0"><img className='w-[100%] h-[100vh]' src={Banner} alt="" /></div>
      <div className="banner-wrapper w-[11%] h-[100vh] fixed right-0"><img className='w-[100%] h-[100vh]' src={Banner} alt="" /></div>
      <div className='general-container w-[1300px] mx-auto px-[20px] mt-[60px]' >
        <div className={homeContainerClass}>
          {!isSubCategoryRoute && <CategoriesContainer />}
          {!isSubCategoryRoute && <Card />}
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default generalContainer