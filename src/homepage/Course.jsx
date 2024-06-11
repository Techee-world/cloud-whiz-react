import React from 'react'
import CourseDetails from '../courseDetails/CourseDetails'
import Syllabus from '../courseDetails/syllabus'
import HomeClient from '../component/HomeClient'
import PladedStudents from '../courseDetails/PlacedStudents'
import Certification from '../courseDetails/Certification'
import Companies from '../courseDetails/Companies'
import Free from '../courseDetails/Free'

function Course() {
  return (
    <div className='p-2'>
        <CourseDetails />
        {/* <Syllabus /> */}
        <Free />
        <HomeClient />
        <PladedStudents />
        <Certification />
        <Companies />
    </div>
  )
}

export default Course