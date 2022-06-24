import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Video from '../components/Video'


export default function Event() {
  return (
    <div  className='flex flex-col min-h-screen'>
      <Header />
      <main>
        <Video />
        <SideBar/>
      </main>
    </div>
  )
}
