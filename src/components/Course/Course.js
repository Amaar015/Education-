import React from 'react'
import './course.css';
import './../online/online.css';
import {AiOutlineInteraction} from 'react-icons/ai';
import {SiApollographql} from 'react-icons/si';
import {RiComputerLine} from 'react-icons/ri';
import {FaHistory} from 'react-icons/fa';
import {FaLaptopCode} from 'react-icons/fa';
import {FiTablet} from 'react-icons/fi';
import {AiOutlineHeart} from 'react-icons/ai';
import {GoGraph} from 'react-icons/go';
import {HiOutlinePhotograph} from 'react-icons/hi';
import {GiMusicalNotes} from 'react-icons/gi';
import {GrBusinessService} from 'react-icons/gr';
import {CgWebsite} from 'react-icons/cg';
const Course = () => {
  return (
    <div className='course'>
                     <p>OUR COURSES</p>
                    <h2 className='online_heading'>Browse The Our  Online Courses</h2>

          <div className='course_container'>
          <AiOutlineInteraction/>
                    <h2 className='title'>UI/UX Design Course</h2>
                    <button className='btn_course'>25 Courses</button>
          </div>

          <div className='course_container'>
          <SiApollographql/>
                    <h2 className='title'>Art And Design</h2>
                    <button className='btn_course'>30 Courses</button>
          </div>
          <div className='course_container'>
          <RiComputerLine/>
                    <h2 className='title'>Computer Science</h2>
                    <button className='btn_course'>18 Courses</button>
          </div>

          <div className='course_container'>
          <FaHistory/>
                    <h2 className='title'>History and archiologic</h2>
                    <button className='btn_course'>45 Courses</button>
          </div>
          <div className='course_container'>
          <FaLaptopCode/>
                    <h2 className='title'>Software Engineering</h2>
                    <button className='btn_course'>10 Courses</button>
          </div>
          <div className='course_container'>
          <FiTablet/>
                    <h2 className='title'>Information Software</h2>
                    <button className='btn_course'>30 Courses</button>
          </div>

          <div className='course_container'>
               <AiOutlineHeart/>        
                    <h2 className='title'>Health and Fitness</h2>
                    <button className='btn_course'>100 Courses</button>
          </div>
          <div className='course_container'>
                    <GoGraph/>
                    <h2 className='title'>Marketing</h2>
                    <button className='btn_course'>43 Courses</button>
          </div>

          <div className='course_container'>
          <HiOutlinePhotograph/>
                    <h2 className='title'>graphic Design</h2>
                    <button className='btn_course'>55 Courses</button>
          </div>
          <div className='course_container'>
          <GiMusicalNotes/>
                    <h2 className='title'>Music</h2>
                    <button className='btn_course'>129 Courses</button>
          </div>

          <div className='course_container'>
          <GrBusinessService/>
                    <h2 className='title'>Business Administration</h2>
                    <button className='btn_course'>70 Courses</button>
          </div>
          <div className='course_container'>
          <CgWebsite/>
                    <h2 className='title'>Web Management</h2>
                    <button className='btn_course'>90 Courses</button>
          </div>
    </div>
  )
}

export default Course