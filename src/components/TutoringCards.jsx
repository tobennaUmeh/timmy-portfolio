import React from 'react';

const TutoringCards = () => {
	const data = [
		{
			name: 'Busayo',
			location: 'Lagos, NG',
			role: 'Product Designer',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#2484F1',
		},
		{
			name: 'Akintunde',
			location: 'Helsinki, FI',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#0E8411',
			role: 'Product Designer',
		},
		{
			name: 'Damilola',
			location: 'Lagos, NG',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#91C1FF',
			role: 'Product Designer',
		},
		{
			name: 'Paul',
			location: 'Lagos, NG',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#FFB635',
			role: 'Product Designer',
		},
		{
			name: 'Christian',
			location: 'Lagos, NG',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#FF5050',
			role: 'Product Designer',
		},
		{
			name: 'Sunday Paul',
			location: 'Idaho, US',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#1EED77',
			role: 'Product Designer',
		},
		{
			name: 'Ridwan',
			location: 'Lagos, NG',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#FF5050',
			role: 'Product Designer',
		},
		{
			name: 'Olufunsho',
			location: 'Lagos, NG',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#1EED77',
			role: 'Product Designer',
		},
	];
	return (
		<div className='testimonials' id='testimonials'>
			{data.map((card) => {
				return (
					<div className='testimonials-card'>
						<div className='testimonials-header'>
							<div
								className='testimonials-dot'
								style={{
									width: '2rem',
									height: '2rem',
									backgroundColor: 'black',
									borderRadius: '50%',
									border: `0.2rem solid #F091FF`,
								}}
							></div>
							<div className='testimonials-text'>
								<div className='testimonials--name'>{card.name}</div>
								<div className='testimonials--company'>
									{card.role} , <span>{card.location}</span>
								</div>
							</div>
						</div>
						<div className='testimonials-body'>{card.message}</div>
					</div>
				);
			})}
		</div>
	);
};

export default TutoringCards;
