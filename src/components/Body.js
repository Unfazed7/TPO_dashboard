import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import './CSS/Body.css'
const Body = () => {
  return (
    <div className='body_cnt'>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default Body
