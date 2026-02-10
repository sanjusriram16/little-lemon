import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Booking from './components/Booking';
import Contact from './components/Contact';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Little Lemon';
  }, []);
  return (
    <>
    <header><NavBar /></header>
    <main>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/booking' element={<Booking />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
