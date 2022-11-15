import React from 'react';
// import heartImg from '../Assets/heart.png';

const Innovate = () => {
	return (
		<div id='innovate'>
			<div className='overlayInnovate'>
				{/* <div className='innovate-images'>
					<img
						src={heartImg}
						className='innovate-img'
						alt='heartImg'
					/>
					<img
						src={heartImg}
						className='innovate-img'
						alt='heartImg'
					/>
					<img
						src={heartImg}
						className='innovate-img'
						alt='heartImg'
					/>
					<img
						src={heartImg}
						className='innovate-img'
						alt='heartImg'
					/>
					<img
						src={heartImg}
						className='innovate-img'
						alt='heartImg'
					/>
				</div> */}
        <div className='innovate-card'>
          <div className="innovate--title">Ready to create something innovative?</div>
          <div className="innovate-body">
          As you have already gathered, I am pretty much open and ready to work with you either as a consultant, mentor or on your software business strategy.
          </div>
          <button className='innovate--button'>Book a Consultaton</button>
        </div>
			</div>
		</div>
	);
};

export default Innovate;
