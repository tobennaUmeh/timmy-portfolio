import React from 'react';
import AboutHero from '../../components/AboutHero';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Approach from '../../components/Approach';
import UXSection from '../../components/UXSection';
import Testimonials from '../../components/Testimonials';

const AboutPage = () => {
	return (
		<>
			<Navbar />
			<AboutHero />
			<Approach />
			<UXSection />
			<Testimonials />
			<Footer />
		</>
	);
};

export default AboutPage;
