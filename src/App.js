
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import About from './components/About';
import ReadyToStart from './components/ReadyToStart';
import Contact from './components/Contact';

function App() {
  return (
    <div className='container-fluid overflow-hidden px-0 body  '>
     
      <Navbar />
      <Routes>
        <Route path='/PayApi-Project/' element={ <Home/>} />
        <Route path='/PayApi-Project/pricing' element={ <Pricing/>} />
        <Route path='/PayApi-Project/about' element={ <About/>} />
        <Route path='/PayApi-Project/contact' element={ <Contact/>} />
      </Routes>
      <ReadyToStart/>
      <Footer/>

 </div>
  );
}

export default App;
