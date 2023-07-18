import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './assets/shared/desktop/logo.svg'
function Navbar() {
    return (
        <div className="row mt-md-4">
            <div className="col-md-12 d-flex p-0  align-items-center h-100 ">
                <div className="imglogo col-md-3 text-center">
                   <Link to='/'> <img alt="logo" src={logo} /></Link>
                </div>
                <ul className='d-flex align-items-center col-md-7 m-0'>
                    <Link to="/PayApi-Project/pricing" className='linkk' style={{textDecoration:"none"}}>Pricing</Link>
                    <Link to='/PayApi-Project/about' className='ms-md-3 linkk' style={{textDecoration:"none"}}>About</Link>
                    <Link to='/PayApi-Project/contact' className='ms-md-3 linkk' style={{ textDecoration: "none" }}>Contact</Link>
                </ul>
                <div className='col-md-2  d-flex align-items-center justify-content-center'>
                    <div className='demo py-md-2 px-md-3'>
                Schedule a Demo

                    </div>
                </div>

          </div>
        </div>
    )
}
export default Navbar