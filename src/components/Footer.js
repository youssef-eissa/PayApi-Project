import logow from './assets/shared/desktop/logow.svg'
import facebook from './assets/shared/desktop/facebook.svg'
import linkedin from './assets/shared/desktop/linkedin.svg'
import twitter from './assets/shared/desktop/twitter.svg'
import { Link } from 'react-router-dom'
import './Footer.css'
import circle1 from './assets/shared/desktop/bg-pattern-circle.svg'


function Footer() {
    return (
        <footer className='col-12 d-flex flex-md-row flex-column justify-content-between align-items-center p-5 mt-md-5 .footer  overflow-hidden position-absolute '>
                <img alt='circle' src={ circle1} className='position-absolute cbg col-12  ' />
                <div className='col-md-8 d-md-flex ull z-3 '>
                     <div className="imglogo col-md-4 mb-md-0 mb-5   text-center">
                    <Link to='/PayApi-Project/' ><img alt="logo" src={logow} /></Link>
                </div>
                <ul className='d-flex align-items-center col-md-8 col-12 flex-md-row flex-column mb-md-0 mb-5  p-0'>
                    <Link to="/PayApi-Project/pricing" className='linkkk mb-md-0 mb-3' style={{textDecoration:"none"}}>Pricing</Link>
                    <Link to='/PayApi-Project/about' className='ms-md-3 mb-md-0 mb-3 linkkk' style={{textDecoration:"none"}}>About</Link>
                    <Link to='/PayApi-Project/contact' className='ms-md-3 mb-md-0 mb-3 linkkk' style={{ textDecoration: "none" }}>Contact</Link>
                </ul>
                </div>
                <div className='col-md-4 d-md-flex justify-content-center '>
                    <Link className='me-3 imggg'  ><img alt='facebook'  src={ facebook} /></Link>
                    <Link><img alt='twitter' src={ twitter} className='me-3' /></Link>
                    <Link><img alt='linkedin' src={ linkedin} /></Link>
                </div>
            </footer>
    )
}
export default Footer