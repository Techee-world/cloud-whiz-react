import React from 'react'
import AboutPage from '../aboutComponent/AboutPage'
import AboutMission from '../aboutComponent/AboutMission'
import AboutVision from '../aboutComponent/AboutVision'
import LearnForm from '../aboutLearning/LearnForm'
import AboutAwards from '../aboutComponent/AboutAwards'



function About() {
  return (
    <div className='p-2'>
        <AboutPage />
        <AboutMission />
        <AboutVision />
        <LearnForm />
        <AboutAwards />
    </div>
  )
}

export default About