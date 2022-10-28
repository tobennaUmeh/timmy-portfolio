import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../lottie/8586-rocket-in-space (1).json';
import './homeComponents.css';

const Hero = () => {
	const lottieStyle = { width: '30vw', zIndex: 1 };
	return (
		<div className='heroHome' id='hero'>
			<div className='lottie-hero'>
				<Lottie style={lottieStyle} animationData={animationData} />
			</div>
			<div className='heroEl'>
				<div className='header'>
					5 Years Of Crafting Beautiful User Experiences
				</div>
				<div className='textBody'>
					Timmy Is A Lagos Based Product Designer & Trainer. I am
					uber proud of the products I have worked on and all the
					clients I have worked with over the years. Check out
					some of the amazing results I have delivered.
				</div>
				<div className='textfooter'>
					<button className='btn btn-chat'>
						Let's Have a Chat!
					</button>
					<button className='btn btn-resume'>
						Get My Resume
					</button>
				</div>
			</div>
			<div className='heroEl'>
				<div className='blackbox'></div>
			</div>
		</div>
	);
};

export default Hero;
