import React from 'react';
import './homeComponents.css';

const VideoPlaylist = () => {
	return (
		<div id='videoPlayback'>
			<di className='title-playlist'>
				<em>My Free UX class Playlist</em>
			</di>
			{/* <video
				width='320'
				height='240'
				controls
				autoplay
				muted
				alt='video'
				src='https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI'
			></video> */}
			<div className='containerVideo'>
				<iframe
					title='video'
					class="responsive-iframe"
					src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1'
				></iframe>
			</div>
		</div>
	);
};

export default VideoPlaylist;
