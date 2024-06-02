import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Home/Hero'
import Testimonial from '../component/Home/Testimonial'
import Features from '../component/Home/Features'
import Slider from '../component/Slider/Slider'
import FrequentlyAskedQuestion from '../component/Home/FrequentlyAskedQuestion'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Testimonial/>
      <Features/>
      <Slider/>
      <FrequentlyAskedQuestion/>
      <Footer/>
      
      
    </div>
  )
}

export default Home