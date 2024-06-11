import React from 'react'
import ImageSection from '../aboutLearning/ImageSection'
import CourseExplore from '../aboutLearning/CourseExplore'
import OurStudent from '../aboutLearning/OurStudent'
import Mentor from '../aboutLearning/Mentor'
import LearnForm from '../aboutLearning/LearnForm'
import TotalResult from '../component/TotalResult'
import WhyWhize from '../aboutLearning/WhyWhize'

function Learning() {
  return (
    <div className='p-2'>
        <ImageSection/>
        <CourseExplore />
        <OurStudent />
        <Mentor />
        <LearnForm />
        <WhyWhize />
    </div>
  )
}

export default Learning