import React, { useState } from 'react';
import './../App.css';
import {AiOutlineBars} from 'react-icons/ai';
import {ImCross} from 'react-icons/im';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
     const [click,setClick]=useState(false);
     return (
<div className='navbar'>
       <nav className='flexSB'>

            <ul className={click?'mobile-nav':'flexSB'} onClick={()=>setClick(false)}>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Course'>All Courses</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Team'>Team</Link></li>
                    <li><Link to='/Price'>Pricing</Link></li>
                    <li><Link to='/Journal'>Journal</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                   
                    </ul> 
                    <div className='start'>
                                        <div className='button'>Get Certificate</div>
                                 </div>
                        <button className='toggle' onClick={()=>setClick(!click)}>
                             {click?<ImCross/>:<AiOutlineBars/>}

                        </button>
   
       </nav>
       <Outlet />
  </div>
  )
}

export default Navbar;