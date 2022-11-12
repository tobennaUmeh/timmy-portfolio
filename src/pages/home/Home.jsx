import React from 'react';
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
		</section>
	);
};

export default Home;
