import React from 'react'
import Header from './Home/Header';
import Navbar from './Navbar';
import Abouts from './Home/Abouts';
import User from './Home/User';
import News from './Home/News';
import Footer from './Home/Footer';
const About = () => {
  return (
    <section className='allabout'>
    <div className='allcourse' > 
  <Header/>
  <Navbar/>
  <div className='container'>
                                        <div className='home_content'>
                                                    <h2>Home/About</h2>
                                                    <h1>About Us</h1>
                                                            
                                        </div>

       </div>                                 
                    
                    </div>
                    <Abouts/>
                    <User/>
                    <News/>
                    <Footer/>       
                    </section>
  )
}

export default About