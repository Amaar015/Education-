import React from 'react'
import Navbar from './Navbar';
import Header from './Home/Header';
import Price from './Home/Price';
import News from './Home/News';
import Footer from './Home/Footer';
const Prices = () => {
  return (
   <section className='Prices'>
                 <div className='allcourse' > 
  <Header/>
  <Navbar/>
  <div className='container'>
                                        <div className='home_content'>
                                                    <h2>Home/Team</h2>
                                                    <h1>Chose the right plan</h1>
                                                            
                                        </div>

       </div>                                 
                    
                    </div>
                    
                    <Price/>
                    <News/>
                    <Footer/>
                     
   </section>
  )
}

export default Prices