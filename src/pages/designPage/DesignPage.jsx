import React from 'react';
import DesignBody from '../../components/DesignBody';
import DesignHero from '../../components/DesignHero';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const DesignPage = () => {
	return (
		<>
			<Navbar />
			<DesignHero />
			<DesignBody />
			<Footer />
		</>
	);
};

export default DesignPage;
