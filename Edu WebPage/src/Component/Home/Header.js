import React from 'react';

import {FiTwitter} from "react-icons/fi";
import{FaInstagram} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';
import {CgMail} from 'react-icons/cg'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
             <header className='header'>
              <div className='logo'>
                <h1>ACADEMIA</h1>
                <h2>Online Education and Learners</h2>
              </div>
               <div className='social'>
                <Link className='icon'><i><FiTwitter className='icons'/></i></Link>
                <Link className='icon'><i><FaInstagram className='icons'/></i></Link>
                <Link className='icon'><i><FiFacebook className='icons'/></i></Link>
                <Link className='icon'><i><CgMail className='icons'/></i></Link>
               </div>
             </header>
    )
}

export default Header