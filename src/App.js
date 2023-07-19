
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReadyToStart from './components/ReadyToStart';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className='container-fluid overflow-hidden px-0 body  '>

      <Navbar  />
     <AnimatedRoutes/>
      <ReadyToStart/>
      <Footer/>

 </div>
  );
}

export default App;
