import React from 'react';
import '../components/css/TutoringPage.css';
import designImage from '../Assets/designImage.png';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TutoringHero = () => {
	const data = [{}];

	return (
		<section className='turorHero'>
			<div className='turorHero-flex'>
				<div className='turorHero-h1'>Tutoring Programes</div>
				<img className='turorHero-svg' src={designImage} alt='img' />
			</div>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={3}
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
			</Swiper>
		</section>
	);
};

export default TutoringHero;
