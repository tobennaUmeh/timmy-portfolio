import React from 'react';
import './homeComponents.css';
import navIcon from '../Assets/navIcon.svg';
import { NavLink } from 'react-router-dom';
import Be from '../Assets/behance.svg';
import Insta from '../Assets/instagram.svg';
import Linkedin from '../Assets/linkedin.svg';
import Git from '../Assets/github.svg';
import Twitter from '../Assets/twitter.svg';
import hamburger from '../Assets/hamburger.svg';
import { useEffect } from 'react';

const Navbar = () => {
	useEffect(() => {
		const togglebtn = document.querySelector('.toggle-button');
		const navLinks = document.querySelector('.navbarEl');

		togglebtn.addEventListener('click', () => {
			return navLinks.classList.toggle('collapse');
		});
	}, []);

	// console.log(navLinks);

	const navEl = [
		{ text: 'About Me', link: '/', key: 1 },
		{ text: 'Design', link: '/' },
		{ text: 'Turoring', link: '/' },
	];

	const icons = [
		{ icon: Be, key: 1 },
		{ icon: Insta, key: 2 },
		{ icon: Linkedin, key: 3 },
		{ icon: Git, key: 4 },
		{ icon: Twitter, key: 5 },
	];

	return (
		<nav>
			<NavLink to='/home'>
				<img src={navIcon} className='navbarBrand' alt='Icon' />
			</NavLink>
			<img src={hamburger} alt='hamburger' className='toggle-button' />
			<div className='navbarEl collapse'>
				<ul className='nav-Links'>
					{navEl.map((El) => (
						<li key={El.text}>
							<NavLink className='nav-link' to={El.link}>
								{El.text}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			<div className='navIcons'>
				{icons.map((icon) => (
					<img
						className='icon'
						key={icon.key}
						src={icon.icon}
						alt='icon'
					/>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
