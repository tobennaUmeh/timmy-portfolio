import React from 'react';
import './DesignPage.css';
import designImage from '../Assets/designImage.png';
import mandilas from '../Assets/mandilas.png';
import BirBur from '../Assets/BirBur.png';
import ScholarHQ from '../Assets/ScholarHQ.png';
import HighTable from '../Assets/HighTable.png';
import Pay4me from '../Assets/Pay4me.png';
import Chealey from '../Assets/Chealey.png';
import Asseco from '../Assets/ASSECO.png';
import Tailor from '../Assets/Tailor.png';
import AreaExpress from '../Assets/Area.png';
import OddsVikings from '../Assets/OddVikings.png';
import Civil from '../Assets/NigerisCivil.png';
import Clear from '../Assets/Clear assessment.png';
import plugg from '../Assets/Pluggextra.png';
import Jenny from '../Assets/Jenny Sue.png';
import Athe from '../Assets/Atht.png';
import Citi from '../Assets/Citiapp.png';

const DesignHero = () => {
	return (
		<div className='designHero'>
			<div className='designHero-header'>
				<div className='designHero-flex'>
					<div className='designHero-h1'>Design Portfolio</div>
					<div className='designHero-text'>
						Take a look at some of the Interesting experiences that I have
						created in products
					</div>
				</div>
				<img className='designHero-svg' src={designImage} alt='img' />
			</div>
			<div className='designHero-body'>
				<div className='designHero-body--svg'>
					<img className='svg' src={mandilas} alt='mandilas' />
				</div>
				<div className='designHero-card'>
					<div className='designHero-title'>Mandilas Web Application</div>
					<div className='designHero-body'>
						<div className='designHero-sub'>
							Role:
							<span className='designHero-sub-desc'>Product Design Lead</span>
						</div>
						<div className='designHero-sub'>
							Platform: <span className='designHero-sub-desc'>Web</span>
						</div>
						<div className='designHero-sub'>
							Year: <span className='designHero-sub-desc'>2019</span>
						</div>
						<div className='designHero-card-text'>
							I'm extremely proud of my UI/UX students from around the world. We
							ensure a collaborative and friendly environment to get them job
							ready with a portfolio and resume to match the role.
						</div>
						<div className=''>
							<button className='designHero-btn'>View Case Study</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DesignHero;
