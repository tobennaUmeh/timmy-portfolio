import React from 'react';
import './AboutPage.css';
import Be from '../Assets/behancesvg.svg';
import Insta from '../Assets/Instasvg.svg';
import Linkedin from '../Assets/Linkedinsvg.svg';
import Git from '../Assets/Git.svg';
import Twitter from '../Assets/twittersvg.svg';
import doodle from '../Assets/doodle.svg';

const abtHero = () => {
	const data = [
		{
			text: "Look at it this way, the feeling you get when you open up a gift and its that thing that you have always wanted is exactly why experience is everything to me. Imagine having that feeling every time you use an app to drive value to yourself. That's my mission. To bring ease of use and delight into everyone's lives.",
			color: '#6D5DF6',
		},
		{
			text: 'Timmy Adubi is a Designer, Artist, & Entrepreneur.First and foremost a human with an eye for details, he primarily works on graphic design  and creative design strategies.',
			color: '#F65DC7',
		},
		{
			text: 'In the past, he worked in tech as a Design Director & Designer for companies like Asseco Nigeria, Nigerian Civil Aviation Authority, & NGcareers.com & an alumna of Walden University, Minnesota where he graduated with a distinction.',
			color: '#5DF6C3',
		},
		{
			text: 'Outside of work, he enjoys eating a good meal, making good music, and training aspiring UXers in Lagos, Nigeria.',
			color: '#F6BF5D',
		},
	];
	const social = [
		{
			svgs: Be,
			key: 1,
		},
		{
			svgs: Insta,
			key: 2,
		},
		{
			svgs: Linkedin,
			key: 3,
		},
		{
			svgs: Git,
			key: 4,
		},
		{
			svgs: doodle,
			key: 5,
		},
		{
			svgs: Twitter,
			key: 6,
		},
	];
	return (
		<section id='abt'>
			<div className='abt-title'>About Me</div>
			<div className='abtHero'>
				<div className='abtHero-flex blk'>
					<div className='blackbox' data-abt='1'>
						<button className='abt-btn'>Get my Resume</button>
					</div>
					<div className='socials'>
						{social.map((svgs) => {
							return (
								<img
									key={svgs.key}
									src={svgs.svgs}
									alt='svg'
									className='socials-svg'
								/>
							);
						})}
					</div>
				</div>

				<div className='abtHero-flex b'>
					<div className='ques'>Why "Timmy?"</div>
					{data.map((txt) => {
						return (
							<div
								key={txt.text}
								style={{ borderLeft: `${txt.color} solid 0.3rem` }}
								className='abt-txt'
							>
								{txt.text}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default abtHero;
