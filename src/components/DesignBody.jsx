import React from 'react';
import { NavLink } from 'react-router-dom';
import Tailor from '../Assets/Tailor.png';
import Asseco from '../Assets/ASSECO.png';
import AreaExpress from '../Assets/Area.png';
import Citi from '../Assets/Citiapp.png';
import Chealey from '../Assets/Chealey.png';
import Pay4me from '../Assets/Pay4me.png';
import Athe from '../Assets/Atht.png';
import HighTable from '../Assets/HighTable.png';
import ScholarHQ from '../Assets/ScholarHQ.png';
import BirBur from '../Assets/BirBur.png';
import Jenny from '../Assets/Jenny Sue.png';
import plugg from '../Assets/Pluggextra.png';
import Clear from '../Assets/Clear assessment.png';
import Civil from '../Assets/NigerisCivil.png';
import OddsVikings from '../Assets/OddVikings.png';

const DesignBody = () => {
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const data = [
		{
			img: Tailor,
			role: 'Product Manager & Product Designer',
			platform: 'IOS & Android',
			year: '2021',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'vertical',
			link: '/design',
			header: 'Tailor On The Go App',
		},
		{
			img: Asseco,
			role: 'Product Designer',
			platform: 'Web',
			year: '2020',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'horizontal',
			link: '/design',
			header: 'ASSECO MArketplace Web Application',
		},
		{
			img: AreaExpress,
			role: 'Product Manager & Product Designer',
			platform: 'Web, IOS & Android',
			year: '2021',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'horizontal',
			link: '/design',
			header: 'Area Express Web Application',
		},
		{
			img: Citi,
			role: 'Product Designer',
			platform: 'IOS & Android',
			year: '2019',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'vertical',
			link: '/design',
			header: 'Citistack App',
		},
		{
			img: Chealey,
			role: 'Product Designer',
			platform: 'IOS & Android',
			year: '2022',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'vertical',
			link: '/design',
			header: 'Chealey Electronics App',
		},
		{
			img: Pay4me,
			role: 'Product Designer',
			platform: 'Web, IOS & Andriod',
			year: '2022',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'horizontal',
			link: '/',
			header: 'Pay4Me Fintech App',
		},
		{
			img: Athe,
			role: 'Product Designer',
			platform: 'Web',
			year: '2021',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'horizontal',
			link: '/design',
			header: 'Atht Group Website',
		},
		{
			img: HighTable,
			role: 'Product Designer',
			platform: 'Web, IOS & Android',
			year: '2021',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'vertical',
			link: '/design',
			header: 'Hightable Africa App',
		},
		{
			img: ScholarHQ,
			role: 'Product Designer',
			platform: 'Web, IOS & Android',
			year: '2022',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'vertical',
			header: 'ScholarHQ Community App',
		},
		{
			img: BirBur,
			role: 'Product Designer',
			platform: 'Web, IOS & Android',
			year: '2022',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'horizontal',
			link: '/design',
			header: 'BiRBuR Rideshare/Rental App',
		},
		{
			img: Jenny,
			role: 'Product Designer',
			platform: 'Web',
			year: '2022',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'horizontal',
			link: '/design',
			header: 'Jenny Sue Doula Website',
		},
		{
			img: plugg,
			role: 'Product Designer',
			platform: 'Web',
      year: '2022',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'horizontal',
      link: '/design',
      header: 'Pluggxtra Entertainment News Website',
		},
		{
			img: Clear,
			role: 'Product Designer',
			platform: 'Web',
			year: '2022',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'horizontal',
			link: '/design',
			header: 'Clear Assessments Mental Health Assessment App',
		},
		{
			img: Civil,
			role: 'Product Designer',
			platform: 'Web',
			year: '2021',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'horizontal',
			link: '/design',
			header: 'Nigerian Civil Aviation Authority Helpdesk',
		},
		{
			img: OddsVikings,
			role: 'Product Designer',
			platform: 'Web',
			year: '2021',
			text: "I'm extremely proud of my UI/UX students from around the world. We ensure a collaborative and friendly environment to get them job ready with a portfolio and resume to match the role.",
			placement: 'horizontal',
			link: '/design',
			header: 'Odds Vikings Sports Betting Website',
		},
	];
	return (
		<div className='designBody'>
			{data.map((item, i) => {
				return (
					<div
						key={item.header}
						data-type={item.header}
						className='designBody-Body'
					>
						<div
							data-orientation={item.placement}
							className='designBody-body--body'
						>
							<div className='designBody-body--svg'>
								<img
									className='svg'
									loading='lazy'
									src={item.img}
									alt={item.header}
								/>
							</div>
							<div className='designBody-card'>
								<div className='designHero-title'>{item.header}</div>
								<div className='designHero-body'>
									<div className='designHero-sub'>
										Role:
										<span className='designHero-sub-desc'>{item.role}</span>
									</div>
									<div className='designHero-sub'>
										Platform:{' '}
										<span className='designHero-sub-desc'>{item.platform}</span>
									</div>
									<div className='designHero-sub'>
										Year:
										<span className='designHero-sub-desc'>{item.year}</span>
									</div>
									<div className='designHero-card-text'>{item.text}</div>
									<div className=''>
										<NavLink onClick={scrollTop} to={item.link}>
											<button className='designHero-btn'>
												View Case Study
											</button>
										</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default DesignBody;
