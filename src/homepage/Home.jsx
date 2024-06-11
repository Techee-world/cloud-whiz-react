import React from 'react'
import HomePage from '../component/HomePage'
import HomeServices from '../component/HomeServices'
import HomeTech from '../component/HomeTech'
import HomeClient from '../component/HomeClient'
import HomeOppo from '../component/HomeOppo'
import TotalResult from '../component/TotalResult'

function Home() {
  return (
    <div className='p-2'>
        <HomePage/>
        <HomeServices/>
        <HomeTech/>
        <HomeClient/>
        <HomeOppo/>
        <TotalResult/>


    </div>
  )
}

export default Home