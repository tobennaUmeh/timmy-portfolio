import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TutoringHero from '../../components/TutoringHero';
import Students from '../../components/Students';

const TutoringPage = () => {
	return (
		<>
			<Navbar />
			<TutoringHero />
			<Students />
			<Footer />
		</>
	);
};

export default TutoringPage;
