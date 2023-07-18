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



function Home() {
    return (
        <div className="row mt-5 home ">
             <div className='circlebg w-75'>
                <img alt='circle' src={ circle1} className='img-fluid' />
            </div>
            <div className="col-md-12 d-flex  ">

                <div className="col-md-6 left d-flex flex-column justify-content-center align-items-center px  ">
                    <div className='text col-md-10'>
                    Start building with our APIs for absolutely free.

                    </div>
                    <form className='col-md-12 d-flex align-items-end mt-md-5 justify-content-center'>
                        <input className='col-md-6 py-md-3 px-md-4 ' type='text' placeholder='Enter email address'/>
                        <input type='submit' value="Schedule a Demo" className='demo col-md-4 h-100 '/>
                    </form>
                    <span className='col-md-10 mt-md-2 '>Have any questions? <span className='fw-bold'>Contact Us</span></span>
                </div>
                <div className='col-md-6 text-center mob'>
                    <img className='img-fluid' alt='mob' src={ mobimg} />
                </div>
            </div>
            
                <div className='col-md-12 position-relative  black left-0 p-5 d-flex align-items-center'>
                    <div className='overlay overflow-hidden position-absolute top-0 w-100 h-100 z-1'>
                        <div className='circlebg2  position-absolute  z-2'>
                    <img className='img-fluid ' alt='circle' src={circle1 } />
                </div>
                    </div>
                    <div className='col-md-6 overlayTextLeft position-relative z-3 p-5 '>
                        <h1 className='col-12 '>Who we work with</h1>
                        <p className='mb-md-5'>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>
                        <Link className='overlayAbout py-md-2 px-md-4 '>About Us</Link>
                </div>
                <div className='col-md-6 h-50 position-relative z-3 d-md-flex flex-wrap justify-content-around align-items-center column-gap-3' >
                    <img alt='tesla' className='col-3' src={ tesla} />
                    <img alt='microsift' className='col-3' src={ microsoft} />
                    <img alt='hp' className='col-3 ' src={ hp} />
                    <img alt='oracle' className='col-3' src={ oracle} />
                    <img alt='google' className='col-3' src={ google} />
                    <img alt='nivida' className='col-3' src={ nivida} />
                </div>
            </div>
            <div className='col-md-12 mt-md-5 d-md-flex '>
                <div className='imagee col-md-6 text-end'>
                    <img alt='imagee' src={ codeimg} />
                </div>
                <div className='codeText col-md-6 d-md-flex flex-column justify-content-center'>
                    <h1>Easy to implement</h1>
                    <p className='w-50'>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to handle payments functionality with ease.</p>
                </div>
            </div>
            <div className='col-md-12  d-md-flex position-relative overflow-hidden'>
                <img alt='imggcircle' src={ circle1} className='position-absolute img-circle h-100 top-0' />

                <div className='codeText col-md-6 d-md-flex flex-column justify-content-center align-items-center'>
                    <h1>Simple UI & UX</h1>
                    <p className='w-50 ps-md-4'>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
                </div>

                <div className='imagee col-md-6 text-start z-3'>
                    <img alt='imagee' src={ simpleimg} />
                </div>
            </div>
            <div className='col-md-12 d-md-flex justify-content-center icons px-md-5'>
                <div className='col-md-4 d-md-flex flex-column justify-content-center align-items-center'>
                    <img className='mb-md-4' alt='finances' src={finance} />
                    <span className='fw-bold mb-md-3'>Personal Finances</span>
                    <p className='w-75 text-center'>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
                </div>

                  <div className='col-md-4 d-md-flex flex-column justify-content-center align-items-center'>
                    <img className='mb-md-4' alt='finances' src={banking} />
                    <span className='fw-bold mb-md-3'>Banking & Coverage</span>
                    <p className='w-75 text-center'>With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts. </p>
                </div>

                  <div className='col-md-4 d-md-flex flex-column justify-content-center align-items-center'>
                    <img className='mb-md-4' alt='finances' src={payments} />
                    <span className='fw-bold mb-md-3'>Consumer Payments</span>
                    <p className='w-75 text-center'>It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account. </p>
                </div>
            </div>
           
          
        </div>
    )
}
export default Home