import React from 'react';

const UXSection = () => {
	const data = [
		{
			header: 'User experience',
			list: [
				'Questionnaires & User Interviews',
				'UI/UX audit',
				'Information architecture',
				'Copy and CTAs',
				'Layout prototypes',
			],
		},
		{
			header: 'Design',
			list: [
				'Visual design & interactions',
				'Brand Manuals',
				'Pitch Decks',
				'Design Systems',
				'Spline 3D design',
			],
		},
		{
			header: 'Technology stack',
			list: ['HTML & CSS', 'WordPress (Elementor & WPBakery)', 'Webflow'],
		},
	];
	return (
		<div id='uxsection' className='uxsect'>
			{data.map((stack) => {
				return (
					<div key={stack.header} className='ux'>
						<div className='uxHeader'>{stack.header}</div>
						<ul>
							{stack.list.map((el) => {
								return <li key={el} className='list-el'>{el}</li>;
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default UXSection;
