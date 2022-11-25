import React from 'react';
import './DesignPage.css';
import designImage from '../Assets/designImage.png';
import mandilas from '../Assets/mandilas.png';

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
