import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import DesignPage from './pages/designPage/DesignPage';
import TutoringPage from './pages/tutoringPage/TutoringPage';
import AboutPage from './pages/aboutPage/AboutPage';
import WelcomePage from './pages/welcome/WelcomePage';
import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<WelcomePage />} />
					<Route path='/home' element={<Home />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/tutor' element={<TutoringPage />} />
					<Route path='/design' element={<DesignPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
