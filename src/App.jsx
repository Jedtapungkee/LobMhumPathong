import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Recommend from './pages/Recommend';
import Menu from './pages/Menu';
import About from './pages/About';
import Activities from './pages/Activities';
import HomeDelivery from './pages/HomeDelivery';
import Footer from './components/Footer';
import Nav from './components/Nav';

function MainContent() {
  const location = useLocation();

  return (
    <div>
      <Banner />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="w-full md:w-5/6 md:ml-auto">
          {/* แสดง Nav เมื่อ path เริ่มต้นด้วย /menu */}
          {location.pathname.startsWith('/menu') && <Nav />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:category" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/home-delivery" element={<HomeDelivery />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
