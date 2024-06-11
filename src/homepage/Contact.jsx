import React from 'react'
import ContactUs from '../contact/ContactUs'
import LearnForm from '../aboutLearning/LearnForm'
import Map from '../contact/Map'

function Contact() {
  return (
    <div className='p-2'>
        <ContactUs />
        <LearnForm />
        <Map />
    </div>
  )
}

export default Contact