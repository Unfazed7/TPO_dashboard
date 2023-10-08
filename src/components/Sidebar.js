import React from 'react'
import './CSS/Sidebar.css'
const Sidebar = () => {
  return (
    <div className='Side_bar_cont'>
        <div className="filter">
            <div className="Dept">
                <select name="" className='Dropdown' id="dept-Dropdown">
                    <option value="IT" className='options'>All Departments</option>
                    <option value="IT" className='options'>Information Technology</option>
                    <option value="IT" className='options'>Mechanichal</option>
                    <option value="IT" className='options'>Electrical</option>
                    <option value="IT" className='options'>Civil</option>
                    <option value="IT" className='options'>Electronics</option>
                </select>
            </div>
            <div className="Year">
                <select name="" className='Dropdown' id="dept-Dropdown">
                    <option value="IT" className='options'>Current Batch</option>
                    <option value="IT" className='options'>2021-2022</option>
                    <option value="IT" className='options'>2020-2021</option>
                    <option value="IT" className='options'>2019-2020</option>
                    <option value="IT" className='options'>2018-2019</option>
                    <option value="IT" className='options'>2017-2018</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
