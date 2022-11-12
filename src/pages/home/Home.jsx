import React from 'react';
import CoreSkills from '../../components/CoreSkills';
import Experience from '../../components/Experience';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
// import './Home.css'

const Home = () => {
	return (
		<section id='hero'>
			<Navbar />
			<Hero />
			<Experience />
			<CoreSkills />
		</section>
	);
};

export default Home;
