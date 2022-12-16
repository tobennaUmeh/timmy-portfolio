import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TutoringHero from '../../components/TutoringHero';
import Students from '../../components/Students';
import TutoringCards from '../../components/TutoringCards';
import TuturingHail from '../../components/TuturingHail';

const TutoringPage = () => {
	return (
		<>
			<Navbar />
			<TutoringHero />
			<Students />
			<TutoringCards />
			<TuturingHail />
			<Footer />
		</>
	);
};

export default TutoringPage;
