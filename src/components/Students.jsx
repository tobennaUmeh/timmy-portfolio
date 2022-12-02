import React from 'react';
import '../components/css/TutoringPage.css';
import { Mousewheel, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Students = () => {
	const data = [
		{
			name: 'Fega',
			location: 'Abuja, NG',
			video: '',
			position: 'Product Designer',
			key: 'oinwvv',
		},
		{
			name: 'Oluwaseyi',
			location: 'Lagos, NG',
			video: '',
			position: 'Product Designer',
			key: 'wgerb',
		},
		{
			name: 'Jumoke',
			location: 'Ibadan, NG',
			video: '',
			position: 'Product Designer',
			key: 'wfgwdv',
		},
		{
			name: 'Precious',
			location: 'Abuja, NG',
			video: '',
			position: 'Product Designer',
			key: 'sdvwsd',
		},
		{
			name: 'Presh',
			location: 'Abuja, NG',
			video: '',
			position: 'Product Designer',
			key: 'wvwsdf',
		},
	];
	return (
		<div className='students'>
			<div className='students-header'>Meet My Bootcamp Alumni From Around</div>
			<div className='students-body'>
				I'm extremely proud of my UI/UX students from around the world. We
				ensure a collaborative and friendly environment to get them job ready
				with a portfolio and resume to match the role.
			</div>
			<Swiper
				// install Swiper modules
				modules={[Mousewheel, Autoplay, Pagination, Scrollbar, A11y]}
				spaceBetween={1}
				// loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				breakpoints={{
					// when window width is >= 0px
					320: {
						width: 320,
						slidesPerView: 1,
					},
					// when window width is >= 425px
					425: {
						width: 425,
						slidesPerView: 1,
					},
					// when window width is >= 640px
					640: {
						width: 640,
						slidesPerView: 2,
					},
					// when window width is >= 768px
					768: {
						width: 768,
						slidesPerView: 2,
					},
					// when window width is >= 1024px
					1024: {
						width: 1024,
						slidesPerView: 4,
					},
					// when window width is >= 1440px
					1440: {
						width: 1440,
						slidesPerView: 5,
					},
				}}
				// navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				// mousewheel={true}
			>
				{data.map((item) => {
					return (
						<div key={item.key}>
							<SwiperSlide>
								<div key={item.key} className='student-slider'>
									<video width='300' height='500'>
										<source src={item.video} />
									</video>
								</div>
								<div className='students-footer'>
									<div className='students-name'>{item.name}</div>
									<div className='students-details'>
										{item.position}, {item.location}
									</div>
								</div>
							</SwiperSlide>
						</div>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Students;
