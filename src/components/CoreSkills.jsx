import React from 'react';

const CoreSkills = () => {
	const data = [
		{ text: 'Mobile Design' },
		{ text: 'Usability Testing' },
		{ text: 'User Research' },
		{ text: 'Design Planning' },
		{ text: 'Design Planning' },
		{ text: 'Team Management' },
		{ text: 'UI Design' },
		{ text: 'Human Computer Interaction' },
		{ text: 'Workshop Facilitation' },
		{ text: 'Responsive Design' },
		{ text: 'Teaching/Mentoring' },
	];
	return (
		<section id='coreSkills'>
			<div className='coreSkillsContent'>
				<div className='title-skill'>CORE SKILL SET</div>
			</div>
			{data.map((txt) => {
				return (
					<div key={txt.text} className='skillText'>
						{txt.text}
						<hr />
					</div>
				);
			})}
			{/* <div className='blackBox'></div> */}
		</section>
	);
};

export default CoreSkills;
