import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import './Welcome.css';
import animationData from '../../lottie/106433-bird-flock-test (1).json';
import WelcomeBtn from '../../Assets/welcomebtn.svg';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
	const navigate = useNavigate();
	const nextPage = () => navigate('/home');
	useEffect(() => {
		setTimeout(() => {
			navigate('/home');
		}, 10000);
	});

	const lottieStyle = {
		width: '100vw',
		height: '100vh',
	};
	return (
		<div onClick={nextPage} className='hero'>
			<div className='lottie'>
				<Lottie style={lottieStyle} animationData={animationData} />
			</div>
			<div className='text'>
				<div className='wlcm'>Welcome</div>
				<div className='footer'>
					<img src={WelcomeBtn} alt='btn' />
					<div className='address'>www.timmyadubi.com</div>
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
