import React, { useRef } from 'react';
import './homeComponents.css';
import navIcon from '../Assets/navIcon.svg';
import { NavLink } from 'react-router-dom';
import Be from '../Assets/behance.svg';
import Insta from '../Assets/instagram.svg';
import Linkedin from '../Assets/linkedin.svg';
import Git from '../Assets/github.svg';
import Twitter from '../Assets/twitter.svg';
import hamburger from '../Assets/hamburger.svg';

const Navbar = () => {

	const btnRef = useRef();
	const handleBtn = () => {
		return btnRef.current.classList.toggle('collapse');
	};

	// console.log(navLinks);

	const navEl = [
		{ text: 'About Me', link: '/about', key: 1 },
		{ text: 'Design', link: '/design' },
		{ text: 'Turoring', link: '/tutor' },
	];

	const icons = [
		{ icon: Be, key: 1 },
		{ icon: Insta, key: 2 },
		{ icon: Linkedin, key: 3 },
		{ icon: Git, key: 4 },
		{ icon: Twitter, key: 5 },
	];

	const active = {
		color: 'white',
		textDecoration: 'none',
		listStyleType: 'none',
	};

	const normal = {
		textDecoration: 'none',
		listStyleType: 'none',
		color: '#bdb6b6',
	};

	return (
		<nav>
			<NavLink to='/home'>
				<img src={navIcon} className='navbarBrand' alt='Icon' />
			</NavLink>
			<img
				src={hamburger}
				onClick={handleBtn}
				alt='hamburger'
				className='toggle-button'
			/>
			<div className='navbarEl '>
				<ul ref={btnRef} className='nav-Links collapse'>
					{navEl.map((El) => (
						<li className='nav-link' key={El.text}>
							<NavLink
								style={({ isActive }) =>
									isActive ? active : normal
								}
								to={El.link}
							>
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
