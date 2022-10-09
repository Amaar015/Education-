import React from 'react'
import './footer.css';
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
             
      <div className='footer'>

                     <div className='Footer_main'>
                                        <h1>ACADEMIA</h1>
                                        <h2>ONLINE EDUCATION & LEARNING</h2>
                                        <p>hello i am from the team of academia from
                                         the world. for the onboard you with us</p>

                                         <div className='footer_social'>
                                                            <BsFacebook/>
                                                            <BsTwitter/>
                                                            <BsInstagram/>
                                         </div>
                     </div>
      </div>
  )
}

export default Footer