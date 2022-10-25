import React from 'react'
import About from './Images/about.jpg';
import Header from './Home/Header';
import Navbar from './Navbar';
import User from './Home/User';
import News from './Home/News';
import Footer from './Home/Footer'
const Contact = () => {
  return (
    
    <>
            <div className='allcourse' > 
  <Header/>
  <Navbar/>
  <div className='container'>
                                        <div className='home_content'>
                                                    <h2>Home/Contact</h2>
                                                    <h1>Contact Us</h1>
                                                            
                                        </div>

       </div>                                 
                    
                    </div>
            
            
            
                  <div className="contact">
            <div className='contact_container'>
              <div className="map">
                        <img src={About} alt="Map_image" />
              </div>
              <div className="contact_form">
                      <div className="text_data">
                        <h2>Contact Us</h2>
                        <p>We're Open for any suggetion or just to have a chat</p>
                        <div className="text_data_add">
                          <article>
                            <h2>Address</h2>
                            <small>House no:14 Mehbob town tando jam Hyd</small>
                          </article>
                          <article>
                            <h2>EMAIL</h2>
                            <small>razaammar582@gmail.com</small>
                          </article>
                          <article>
                            <h2>Phone</h2>
                            <small>+923323498326</small>
                          </article>
                        </div>
                      </div>

                      <form action="">
                        <input type="text" placeholder='Name' />
                        <input type="emial" placeholder='Email' />
                        <input type="phone" placeholder='Phone no:'/>
                        <textarea name="message" id="mesg" cols="30" rows="10" placeholder='enter your message'></textarea>
                       <button type='submit' className='btn'>Send Message</button>
                      </form>
              </div>
            </div>
            </div>
            <User/>
            <News/>
            <Footer/>
            </>
  )
}

export default Contact