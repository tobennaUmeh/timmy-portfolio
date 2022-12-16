import React from 'react';
import Neon from '../Assets/neon.png';
import './css/TutoringPage.css';

const TuturingHail = () => {
	return (
		<div className='container'>
			<img src={Neon} className='img' alt='neon' />
			<div className='content'>
				<h1>Ready to become a master UI/UX designer?</h1>
				<p>
					I'm ready to help you reach the best potential for yourself and your
					<br />
					career. I would love to have you join my next Bootcamp!
				</p>
				<button className='btn-join'>Join Now</button>
			</div>
		</div>
	);
};

export default TuturingHail;
