import React from 'react';
import mandilas from '../Assets/mandilas.png';
import BirBur from '../Assets/BirBur.png';
import ScholarHQ from '../Assets/ScholarHQ.png';
import HighTable from '../Assets/HighTable.png';
import Pay4me from '../Assets/Pay4me.png';
import Chealey from '../Assets/Chealey.png';
import Asseco from '../Assets/ASSECO.png';
import Tailor from '../Assets/Tailor.png';
import AreaExpress from '../Assets/AreaExpress.png';
import { Link } from 'react-router-dom';

const Experience = () => {
	const data = [
		{
			img: mandilas,
			text: 'Mandilas Nigeria Website',
			color: '#0CA234',
			orientation: 'horizontal',
		},
		{
			img: BirBur,
			text: 'BirBur Eide Sharing / Rental Website',
			color: '#3290D8',
			orientation: 'horizontal',
		},
		{
			img: ScholarHQ,
			text: 'ScholarsHQ Mobile App',
			color: '#6D60DD',
			orientation: 'vertical',
		},
		{
			img: HighTable,
			text: 'HighTable Complete Product',
			color: '#C38710',
			orientation: 'vertical',
		},
		{
			img: Pay4me,
			text: 'Pay4me Complete Product',
			color: '#0CA234',
			orientation: 'horizontal',
		},
		{
			img: Chealey,
			text: 'Chealey Mobile Ecommerce App',
			color: '#E03434',
			orientation: 'vertical',
		},
		{
			img: Asseco,
			text: 'ASSECO Sales Management SAAS App',
			color: '#3BACF6',
			orientation: 'horizontal',
		},
		{
			img: Tailor,
			text: 'Tailor On the Go Mobile App',
			color: '#F02727',
			orientation: 'veritcal',
		},
		{
			img: AreaExpress,
			text: 'AreaExpress Complete Product',
			color: '#D00004',
			orientation: 'veritcal',
		},
	];

	return (
		<div id='experience'>
			<div className='title'>Featured Works</div>
			<div className='experiencetxt'>
				I am uber proud of the products I have worked on and all the clients I
				have worked with over the years. Check out some of the amazing results I
				have delivered
			</div>
			<div className='mosaic'>
				{data.map((img) => {
					return (
						<div
							data-orientation={img.orientation}
							data-text={img.text}
							className='resImg'
							key={img.text}
						>
							<img
								loading='lazy'
								data-orientation={img.orientation}
								data-text={img.text}
								className='Img hov'
								src={img.img}
								alt={img.text}
							/>
							<div data-color={img.color} class='overlay'>
								<div className='overText' style={{ color: `${img.color}` }}>
									{img.text}
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<Link to='/design'>
				<button className='see'>See More</button>
			</Link>
		</div>
	);
};

export default Experience;
