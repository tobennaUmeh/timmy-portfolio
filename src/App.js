import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import DesignPage from './pages/designPage/DesignPage';
import TutoringPage from './pages/tutoringPage/TutoringPage'
import AboutPage from './pages/aboutPage/AboutPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/tutor' element={<TutoringPage />} />
          <Route path='/design' element={<DesignPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
