import React from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import FoodCategory from '../Components/HomeComponents/FoodCategory'
import AboutSection from '../Components/HomeComponents/AboutSection'
import Testimonial from '../Components/HomeComponents/Testimonial'
import MeetOurChef from '../Components/HomeComponents/MeetOurChef'
import BlogSection from '../Components/HomeComponents/BlogSection'
import StatsSection from '../Components/HomeComponents/StatsSection'
import MenuSection from '../Components/HomeComponents/MenuSection'
import WhyChooseUs from "../Components/HomeComponents/WhyChooseUs"
import ResActivator from '../Components/HomeComponents/ResActivator'
import StateContext from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

function page() {
  return (
    <StateContext>
      <Toaster />
      <div>
        <HeroSection />
        <AboutSection />
        <FoodCategory />
        <WhyChooseUs />
        <StatsSection />
        <MenuSection />
        <MeetOurChef />
        <Testimonial />
        <ResActivator />
        <BlogSection />
      </div>
    </StateContext>
  )
}

export default page;