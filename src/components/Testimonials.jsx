import React from 'react';


const Testimonials = () => {
	const data = [
		{
			name: 'Busayo',
			company: 'CEO Formplus',
			location: 'Lagos, NG',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#2484F1',
		},
		{
			name: 'Akintunde',
			company: 'CEO Oddsvikings',
			location: 'Helsinki, FI',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#0E8411',
		},
		{
			name: 'Damilola',
			company: 'Business Analyst ASSECO',
			location: 'Lagos, NG',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#91C1FF',
		},
		{
			name: 'Paul',
			company: 'CEO NGCareers',
			location: 'Lagos, NG',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#FFB635',
		},
		{
			name: 'Christian',
			company: 'CEO Areaexpress Nigeria',
			location: 'Lagos, NG',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#FF5050',
		},
		{
			name: 'Sunday Paul',
			company: 'CEO Pay4Me Inc',
			location: 'Idaho, US',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#1EED77',
		},
		{
			name: 'Ridwan',
			company: 'CEO Hightable Africa',
			location: 'Lagos, NG',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#FF5050',
		},
		{
			name: 'Olufunsho',
			company: 'CEO Infinion Technologies',
			location: 'Lagos, NG',
			message:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			color: '#1EED77',
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
									border: `0.2rem solid ${card.color}`,
								}}
							></div>
							<div className='testimonials-text'>
								<div className='testimonials--name'>{card.name}</div>
								<div className='testimonials--company'>
									{card.company} ,<span>{card.location}</span>
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

export default Testimonials;
