import React from 'react';
import { Link } from 'react-router-dom';
import heartImg from '../Assets/heart.png';

const Footer = () => {
	return (
		<div id='footer'>
			<div className="footer-header">
        <Link to='/home'>
          <img className='footerImg' src={heartImg} alt='footer' />
        </Link>
        <div className='footer-body'>
          Copyright © Adubi Oluwarotimi of DeeBo!! LLC, 2021-2022.
              </div>
      </div>
      <div>timmy.adubi@gmail.com</div>
		</div>
	);
};

export default Footer;
