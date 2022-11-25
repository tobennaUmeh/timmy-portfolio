import React from 'react';

const Approach = () => {
	const data = [
		{
			header: 'Approach',
			body: 'I work as an extension of my client’s teams. I use a project-based approach, and once the new website goes live, we can make arrangements to provide ongoing website maintenance that includes dedicated designer updates  and analytics audits  supporting the website or app growth.',
		},
		{
			header: 'Capabilities',
			body: 'Our web design process generates a consistent website or app that reflects the brand strategy, visual identity, and verbal identity of the brand. It also helps to establish a prominent position on the market.',
		},
	];
	return (
		<>
			{data.map((line) => {
				return (
					<div key={line.header} className='approach-main'>
						<div className='apporach-header'>{line.header}</div>
						<div className='apporach-body'>{line.body}</div>
					</div>
				);
			})}
		</>
	);
};

export default Approach;
