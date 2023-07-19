import { Link } from 'react-router-dom'
import './Home.css'
import mobimg from './assets/home/desktop/illustration-phone-mockup.svg'
import circle1 from './assets/shared/desktop/bg-pattern-circle.svg'
import tesla from './assets/shared/desktop/teslaw.svg'
import microsoft from './assets/shared/desktop/microw.svg'
import hp from './assets/shared/desktop/hpw.png'
import oracle from './assets/shared/desktop/oraclew.svg'
import google from './assets/shared/desktop/googlew.svg'
import nivida from './assets/shared/desktop/nividaw.svg'
import codeimg from './assets/home/desktop/illustration-easy-to-implement.svg'
import simpleimg from './assets/home/desktop/illustration-simple-ui.svg'
import finance from './assets/home/desktop/icon-personal-finances.svg'
import banking from './assets/home/desktop/icon-banking-and-coverage.svg'
import payments from './assets/home/desktop/icon-consumer-payments.svg'
import { motion } from 'framer-motion'



function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, }}
                    animate={{ opacity:1,transition:{duration:1} }}
                    exit={{opacity:0,transition:{duration:0.3}}}
            className="row mt-md-5 mt-0 home ">
             <div className='circlebg '>
                <img alt='circle' src={ circle1} className='img-fluid' />
            </div>
            <div className="col-md-12 d-flex flex-md-row flex-column-reverse justify-content-start  align-items-center mb-md-0 mb-5  ">

                <div className="col-md-6 left d-flex flex-column justify-content-center align-items-md-end   ">
                    <div className='text col-md-10 col-12 text-md-start text-center landh1'>
                    Start building with our APIs for absolutely free.

                    </div>
                    <form className='col-md-12 d-flex flex-md-row flex-column align-items-md-end  align-items-center mt-5 px-md-0 px-2 justify-content-end  '>
                        <input className='col-md-6 col-12 py-3 px-4 ' type='text' placeholder='Enter email address'/>
                        <input type='submit' value="Schedule a Demo" className='demoo col-12 col-md-4 py-md-3 py-3 mt-md-0 mt-3 '/>
                    </form>
                    <span className='col-md-9 col-12 mt-md-2 text-md-start text-center '>Have any questions? <span className='fw-bold'>Contact Us</span></span>
                </div>
                <div className='col-md-6 col-12 text-center position-relative mob'>
                    <img className='img-fluid ' alt='mob' src={ mobimg} />
                </div>
            </div>
            
                <div className='col-md-12 position-relative  black left-0 p-5  d-flex align-items-center  flex-md-row flex-column-reverse'>
                    <div className='overlay overflow-hidden position-absolute top-0 w-100 h-100 z-1'>
                        <div className='circlebg2  position-absolute  z-2'>
                    <img className='img-fluid ' alt='circle' src={circle1 } />
                </div>
                    </div>
                    <div className='col-md-6 overlayTextLeft position-relative z-3 p-md-5 mt-md-0 mt-5 text-md-start text-center '>
                        <h1 className='col-12  '>Who we work with</h1>
                        <p className='mb-md-5 '>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>
                        <Link to='/PayApi-Project/about' className='overlayAbout py-2 px-4  '>About Us</Link>
                </div>
                <div className='col-md-6 col-12  position-relative z-3 d-flex flex-wrap justify-content-md-around justify-content-center  column-gap-3 row-gap-5  ' >
                    <img alt='tesla' className='col-md-3 col-4 ' src={ tesla} />
                    <img alt='microsift' className='col-md-3 col-4' src={ microsoft} />
                    <img alt='hp' className='col-md-3 col-4' src={ hp} />
                    <img alt='oracle' className='col-md-3 col-4' src={ oracle} />
                    <img alt='google' className='col-md-3 col-4' src={ google} />
                    <img alt='nivida' className='col-md-3 col-4' src={ nivida} />
                </div>
            </div>
            <div className='col-12 mt-md-5 d-flex flex-md-row flex-column  text-center '>
                <div className='imagee col-md-6 col-12 text-center'>
                    <img alt='imagee' className='img-fluid' src={ codeimg} />
                </div>
                <div className='codeText col-md-6 d-md-flex flex-column align-items-center px-md-0 px-3 justify-content-center'>
                    <h1>Easy to implement</h1>
                    <p className='col-md-6 '>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to handle payments functionality with ease.</p>
                </div>
            </div>
            <div className='col-md-12  d-flex flex-md-row flex-column-reverse  position-relative overflow-hidden'>
                <img alt='imggcircle ' src={ circle1} className='position-absolute img-circle h-100 top-0' />

                <div className='codeText col-md-6 col-12  d-md-flex flex-column justify-content-center px-md-0 px-3 align-items-center'>
                    <h1 className='text-center'>Simple UI & UX</h1>
                    <p className='col-md-8 col-12 text-md-start text-center ps-md-4'>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
                </div>

                <div className='imagee col-md-6 text-start z-3'>
                    <img alt='imagee' src={ simpleimg} className='img-fluid' />
                </div>
            </div>
            <div className='col-md-12 d-flex flex-md-row flex-column justify-content-center icons px-md-5'>
                <div className='col-md-4 col-12 mb-md-0 mb-3 d-flex flex-column justify-content-center align-items-center'>
                    <img className='mb-4' alt='finances' src={finance} />
                    <span className='fw-bold mb-md-3'>Personal Finances</span>
                    <p className='w-75 text-center'>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
                </div>

                  <div className='col-md-4 col-12 mb-md-0 mb-3 d-flex flex-column justify-content-center align-items-center'>
                    <img className='mb-4' alt='finances' src={banking} />
                    <span className='fw-bold mb-md-3'>Banking & Coverage</span>
                    <p className='w-75 text-center'>With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts. </p>
                </div>

                  <div className='col-md-4 col-12 d-flex flex-column justify-content-center align-items-center'>
                    <img className='mb-4' alt='finances' src={payments} />
                    <span className='fw-bold mb-md-3'>Consumer Payments</span>
                    <p className='w-75 text-center'>It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account. </p>
                </div>
            </div>
           
          
        </motion.div>
    )
}
export default Home