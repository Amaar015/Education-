import React from 'react';
import Header from './Home/Header';
import Navbar from './Navbar';
import Member from './Member';
import User from './Home/User';
import News from './Home/News';
import Footer from './Home/Footer';
const Team = () => {
  return (
 <section className='team_all'>
   <div className='allcourse' > 
  <Header/>
  <Navbar/>
  <div className='container'>
                                        <div className='home_content'>
                                                    <h2>Home/Team</h2>
                                                    <h1>Our Team</h1>
                                                            
                                        </div>

       </div>                                 
                    
                    </div>
          <div className="team_member">
                   <Member/>
                  
          </div>
          <User/>
                   <News/>
                   <Footer/>

 </section>
    )
}

export default Team