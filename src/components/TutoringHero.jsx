import React from 'react';
import '../components/css/TutoringPage.css';
import designImage from '../Assets/designImage.png';
import { Mousewheel, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import figjam from '../Assets/Figjam.png';
import figma from '../Assets/FigmaBootcamp.png';
import productUIUX from '../Assets/productUIUX.png';

const TutoringHero = () => {
	const data = [
		{
			img: figma,
			title: 'Figma Design Bootcamp',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
			link: './tutor',
			time: '2 weeks',
		},
		{
			img: figjam,
			title: 'UX Planning FigJam Masterclass',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
			link: './tutor',
			time: '2 weeks',
		},
		{
			img: productUIUX,
			title: 'Product UI/UX Design Bootcamp',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
			link: './tutor',
			time: '8 weeks',
		},
	];

	return (
		<section className='turorHero'>
			<div className='turorHero-flex'>
				<div className='turorHero-h1'>Tutoring Programmes</div>
				<img className='turorHero-svg' src={designImage} alt='img' />
			</div>

			<Swiper
				// install Swiper modules
				modules={[Mousewheel, Autoplay, Pagination, Scrollbar, A11y]}
				spaceBetween={1}
				// loop={true}
				autoplay={{ delay: 3000, disableOnInteraction: true }}
				breakpoints={{
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
					// when window width is >= 768px
					1024: {
						width: 1024,
						slidesPerView: 3,
					},
				}}
				slidesPerView={3}
				// navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{data.map((item, i) => {
					return (
						<SwiperSlide>
							<div key={i} className='tutorCard'>
								<img src={item.img} alt={item.title} />
								<div className='cardBody'>
									<div className='cardTitle'>{item.title}</div>
									<div className='cardDesc'>{item.text}</div>
									<div className='cardFooter'>
										Read More <span>&gt;</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
				...
			</Swiper>
			{/* {data.map((item, i) => {
				return (
					<div key={i} className='tutorCard'>
						<img src={item.img} alt={item.title} />
						<div className='cardBody'>
							<div className='cardTitle'>{item.title}</div>
							<div className='cardDesc'>{item.text}</div>
							<div className='cardFooter'>
								Read More <span>&gt;</span>
							</div>
						</div>
					</div>
				);
			})} */}
			{/* 			
			<div className='tutorCard'>
				<img src={figma} alt='figma' />
				<div className='cardBody'>
					<div className='cardTitle'>Figma Design Bootcamp</div>
					<div className='cardDesc'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
					<div className='cardFooter'>
						Read More <span>&gt;</span>
					</div>
				</div>
			</div> */}

			{/* <Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={2}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				...
			</Swiper> */}
		</section>
	);
};

export default TutoringHero;
