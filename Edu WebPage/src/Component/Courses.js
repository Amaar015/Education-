import React from 'react'
import './../App.css'
import Header from './Home/Header'
import Navbar from './Navbar'
import Course from './Home/Course';
import Online from './Home/Online';
import News from './Home/News';
import {AiFillStar} from 'react-icons/ai';
import {FiRotateCw} from 'react-icons/fi';
import {MdDeveloperMode} from 'react-icons/md';
import me from './Images/Me.jpeg';
import Footer from './Home/Footer';
const Courses = () => {
  return (
  <>
  <div className='allcourse' > 
  <Header/>
  <Navbar/>
  <div className='container'>
                                        <div className='home_content'>
                                                    <h2>Home/Course</h2>
                                                    <h1>Explore Courses</h1>
                                                            
                                        </div>

       </div>                                 
                    
                    </div>
         <Course/>
         <div className='Online_course'>
                                        <article className='online_course_article'>
                                                <div className='heading_icon'>
                                                            <MdDeveloperMode className='online_icon'/>
                                                            <h2>Introduction to Software Engineering</h2>
                                                            </div>
                                                            <ul>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              </ul>
                                                              <div className='instructor'>
                                                                <img src={me} alt='Instructor'/>
                                                                <h5>by M.K.S</h5>

                                                              </div>

                                                              <button>Explore More <FiRotateCw/></button>

                                        </article>

                                        <article className='online_course_article'>
                                                <div className='heading_icon'>
                                                            <MdDeveloperMode className='online_icon'/>
                                                            <h2>Introduction to Software Engineering</h2>
                                                            </div>
                                                            <ul>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              </ul>
                                                              <div className='instructor'>
                                                                <img src={me} alt='Instructor'/>
                                                                <h5>by M.K.S</h5>

                                                              </div>

                                                              <button>Explore More <FiRotateCw/></button>

                                        </article>

                                        <article className='online_course_article'>
                                                <div className='heading_icon'>
                                                            <MdDeveloperMode className='online_icon'/>
                                                            <h2>Introduction to Software Engineering</h2>
                                                            </div>
                                                            <ul>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              <li><AiFillStar/></li>
                                                              </ul>
                                                              <div className='instructor'>
                                                                <img src={me} alt='Instructor'/>
                                                                <h5>by M.K.S</h5>

                                                              </div>

                                                              <button>Explore More <FiRotateCw/></button>

                                        </article>
                    </div>
        <Online/>  
        <News/>
        <Footer/>
  </>
    )
}

export default Courses