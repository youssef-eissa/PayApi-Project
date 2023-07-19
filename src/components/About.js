import './About.css'
import circle1 from './assets/shared/desktop/bg-pattern-circle.svg'
import AboutImg from './assets/about/desktop/image-team-members.jpg'
import { motion } from 'framer-motion'


function About() {
    return (
        <motion.div
         initial={{ opacity: 0,}}
                    animate={{ opacity:1 ,transition:{duration:0.3}}}
                    exit={{opacity:0,transition:{duration:0.6}}}
            className='row position-relative '>
             
            <div className='col-md-12  text-center mt-5 '>
               <div className='position-absolute cirimg '>
                <img alt='circlee' src={ circle1}  />

                </div>
                <div className='head col-md-5 col-8 mb-md-0 mb-5 text-center mx-auto'>
                    We empower innovators
                    by delivering access to the financial system
                </div>
            </div>
            <div className='col-md-12 d-md-flex justify-content-center textabout mt-md-5'>
                <h1 className='col-md-3 my-md-0 my-3 text-center'>Our Vision</h1>
                <p className='col-md-7 col-11 text-md-start text-center mx-auto mx-md-0'>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. </p>
            </div>
            <div className='col-md-12 d-md-flex justify-content-center textabout mt-md-5 mb-md-5'>
                <h1 className='col-md-3 my-md-0 my-3 text-center'>Our Business</h1>
                <p className='col-md-7 col-11 text-md-start text-center mx-auto mx-md-0'>At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.  </p>
            </div>
            <div className='col-12 imageh my-md-5'>
               
                <div className=' text-center imagee col-12 z-1 position-relative  '>
                <img src={ AboutImg} alt='imgg' className='img-fluid' />

                </div>
                <img alt='circlee' src={ circle1} className='position-absolute cirimgg' />

            </div>
            <div className='col-md-12 d-flex mt-5 flex-md-row flex-column align-items-center stats  z-2 justify-content-around'>
                <div className='col-md-3 col-12 stat text-center text-md-start  py-3 '>
                    <span className=''>Team Members</span>
                    <h1 className='d-flex  justify-content-center justify-content-md-start'>300 <p className='plus fw-lighter'>+</p></h1>
                </div>
                 <div className='col-md-3 col-12 stat text-center text-md-start col-12 py-3'>
                    <span>Offices in the US</span>
                    <h1 className='d-flex  justify-content-center justify-content-md-start'>3</h1>
                </div>
                 <div className='col-md-3 col-12 stat text-center text-md-start py-3'>
                    <span className='text-center'>Transactions analyzed</span>
                    <h1 className='d-flex  justify-content-center justify-content-md-startr'>10M <p className='plus fw-lighter'>+</p></h1>
                </div>
            
            </div>
            <div className='col-md-12 d-md-flex text-center textabout mt-md-5 '>
                <h1 className='col-md-3 my-md-0 my-3'>The Culture</h1>
                <p className='col-md-7 col-11 text-md-start text-center mx-auto mx-md-0'>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
            </div>

              <div className='col-md-12 d-md-flex text-center textabout mt-md-5 '>
                <h1 className='col-md-3 my-md-0 my-3'>The People</h1>
                <p className='col-md-7 text-start col-11 text-md-start text-center mx-auto mx-md-0'>We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.</p>
            </div>
        </motion.div>
    )
}
export default About