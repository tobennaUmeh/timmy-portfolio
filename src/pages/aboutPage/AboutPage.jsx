import React from 'react';
import AboutHero from '../../components/AboutHero';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Approach from '../../components/Approach';

const AboutPage = () => {
	return (
		<>
			<Navbar />
			<AboutHero />
			<Approach />
			<Footer />
		</>
	);
};

export default AboutPage;
