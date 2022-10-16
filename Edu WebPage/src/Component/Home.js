import React from 'react'
import './../App.css';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Navbar from './Navbar';
import Header from './Home/Header';
import About from './Home/About';
import User from './Home/User';
import Course from './Home/Course';
import Online from './Home/Online';
import Team from './Home/Team';
import Blog from './Home/Blog';
import Price from './Home/Price';
import News from './Home/News';
import Footer from './Home/Footer';

const Home = () => {
  return (
  <section className='home'>
                    <Header/>
<Navbar/>

                    
                    <div className='container'>
                                        <div className='home_content'>
                                                    <h2>welcome to academia</h2>
                                                    <h1>Best Online Education Expertise</h1>
                                                    <p>For for away, behinds the words, mountains far from the countries
                                                            Pakistan and Iran. there live the blind tests</p>        
                                               <div className='buttons'>
                                                            <button className='btn1'>Get Started Now <AiOutlineArrowRight/></button>
                                                            <button className='btn2'>View Course <AiOutlineArrowRight/></button>
                                               </div>
                                        </div>
                                        
                    </div>
      <About/>
       <User/>
        <Course/>
        <Online/>
        <Team/> 
         <Blog/>
         <Price/>
         <News/>
         <Footer/>
                  
  </section>
                    )
}

export default Home