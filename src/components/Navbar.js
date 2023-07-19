import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './assets/shared/desktop/logo.svg'
import menu from './assets/shared/mobile/menu.svg'
import close from './assets/shared/mobile/close.svg'
import { useState } from 'react'
import { motion ,AnimatePresence} from 'framer-motion'
function Navbar() {
    const [menuShow, setMenu] = useState("d-none")
    window.document.onclick = function (e) {
        if (menuShow === "d-flex" && e.target.className.includes("menuRes")===false) {
            setMenu("d-none")
        }
    }
    return (
        <AnimatePresence>
            <div
            
            className="row mt-md-4">
            <div className="col-md-12 d-flex p-md-0 p-2 align-items-center h-100 position-relative justify-content-between">
                <div className="imglogo col-5 col-md-3 text-center">
                <Link to='/PayApi-Project/'> <img alt="logo" className='img-fluid' src={logo} /></Link>
                </div>
                    <motion.div
                        key={menuShow}
                    initial={{ opacity:0 }}
                    animate={{ opacity:1,transition:{duration:0.3} }}
                    exit={{opacity:0,transition:{duration:1}}}
                    className={`col-md-9 d-md-flex menuRes ${menuShow}`}>
                    <ul className='d-flex align-items-center col-md-7 m-0 linkss'>
                    <Link onClick={()=>setMenu("d-none")} to="/PayApi-Project/pricing" className='linkk' style={{textDecoration:"none"}}>Pricing</Link>
                    <Link onClick={()=>setMenu("d-none")} to='/PayApi-Project/about' className='ms-md-3 linkk' style={{textDecoration:"none"}}>About</Link>
                    <Link onClick={()=>setMenu("d-none")} to='/PayApi-Project/contact' className='ms-md-3 linkk' style={{ textDecoration: "none" }}>Contact</Link>
                </ul>
                <div className='col-md-4  d-md-flex align-items-center justify-content-end'>
                    <div className='demo py-md-2 px-md-3 '>
                Schedule a Demo
                    </div>
                    </div>
                        <div className='closeIcon d-md-none '>
                            <img src={close} alt='close' onClick={(e) =>  setMenu("d-none")} />
                    </div>
            </motion.div>
                <div className='d-md-none col-2 text-center z-1'>
                        <img src={menu} alt='menu' onClick={(e) => { setMenu("d-flex"); e.stopPropagation()}} />
            </div>
        </div>
        </div>
        </AnimatePresence>
       
    )
}
export default Navbar