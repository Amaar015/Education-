import React from 'react'
import Header from './Home/Header';
import Navbar from './Navbar';
import Blog from './Home/Blog';
import User from './Home/User';
import News from './Home/News';
import Footer from './Home/Footer';
import blog1 from './Images/blog3.jpg';
import blog2 from './Images/blog2.jpg';
import blog3 from './Images/blog1.jpg';
import {FaUserAlt} from 'react-icons/fa';
import {CgCalendarDates} from 'react-icons/cg';
import {TiMessages} from 'react-icons/ti';

const Journal = () => {
  return (
    <>
    <div className='allcourse' > 
<Header/>
<Navbar/>
<div className='container'>
                                <div className='home_content'>
                                            <h2>Home/Contact</h2>
                                            <h1>Visit Our Blog</h1>
                                                    
                                </div>

</div>                                 
            
            </div>
    <Blog/>
    <div className='blog_course'>

<article className='blog_article'>
        <div className='blog_image'>
                  <img src={blog3} alt='User1'/>
        </div>
    <div className='blog_text'>
      <div className='blog_menu'>
        <small> <FaUserAlt className='blog_icon'/>Admin</small>
        <small> <CgCalendarDates className='blog_icon'/>Jan 18,2022</small>
        <small> <TiMessages className='blog_icon'/>5 COMENTS</small>
      </div>
      <div className='blog_content'>
        <h2>Build your Dream Software Engineering Career</h2>
        <p>The material used in this presentation i.e., pictures/graphs/text, etc. is 
           solely intended for educational/teaching purpose.   </p>
      </div>
    </div>
</article>

<article className='blog_article'>
        <div className='blog_image'>
                  <img src={blog1} alt='User2'/>
        </div>
    <div className='blog_text'>
      <div className='blog_menu'>
        <small> <FaUserAlt className='blog_icon'/>Admin</small>
        <small> <CgCalendarDates className='blog_icon'/>Apr 25,2022</small>
        <small> <TiMessages className='blog_icon'/>25 COMENTS</small>
      </div>
      <div className='blog_content'>
      <h2>Build your Dream Software Engineering Career</h2>
        <p>The material used in this presentation i.e., pictures/graphs/text, etc. is 
           solely intended for educational/teaching purpose.   </p>
      </div>
    </div>
</article>

<article className='blog_article'>
        <div className='blog_image'>
                  <img src={blog2} alt='User3'/>
        </div>
    <div className='blog_text'>
      <div className='blog_menu'>
        <small> <FaUserAlt className='blog_icon'/>Admin</small>
        <small> <CgCalendarDates className='blog_icon'/>Feb 16,2022</small>
        <small> <TiMessages className='blog_icon'/>30 COMENTS</small>
      </div>
      <div className='blog_content'>
      <h2>Build your Dream Software Engineering Career</h2>
      <p>The material used in this presentation i.e., pictures/graphs/text, etc. is 
           solely intended for educational/teaching purpose.   </p>
      </div>
    </div>
</article>

</div>
    <User/>
    <News/>
    <Footer/>

</>
)
}

export default Journal