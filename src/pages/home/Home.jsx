import React from 'react';
import CoreSkills from '../../components/CoreSkills';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Innovate from '../../components/Innovate';
import Navbar from '../../components/Navbar';
import VideoPlaylist from '../../components/VideoPlaylist';
// import './Home.css'

const Home = () => {
	return (
		<section id='hero'>
			<Navbar />
			<Hero />
			<Experience />
			<CoreSkills />
			<VideoPlaylist />
			<Innovate />
			<Footer />
		</section>
	);
};

export default Home;
