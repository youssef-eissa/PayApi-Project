import { Route, Routes, useLocation } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Pricing from './Pricing';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';



function AnimatedRoutes() {
  const location =useLocation()

    return (
      <AnimatePresence>
        
         <Routes location={location} key={location.pathname}>
        <Route path='/PayApi-Project/' element={ <Home/>} />
        <Route path='/PayApi-Project/pricing' element={ <Pricing/>} />
        <Route path='/PayApi-Project/about' element={ <About/>} />
        <Route path='/PayApi-Project/contact' element={ <Contact/>} />
            </Routes>
            </AnimatePresence>
    )
}
export default AnimatedRoutes