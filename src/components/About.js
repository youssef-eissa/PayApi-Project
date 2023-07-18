import './About.css'
import circle1 from './assets/shared/desktop/bg-pattern-circle.svg'
import AboutImg from './assets/about/desktop/image-team-members.jpg'



function About() {
    return (
        <div className='row position-relative '>
             
            <div className='col-md-12  text-center mt-5 '>
               <div className='position-absolute cirimg '>
                <img alt='circlee' src={ circle1}  />

                </div>
                <div className='head col-5 text-start mx-auto'>
                    We empower innovators
                    by delivering access to the financial system
                </div>
            </div>
            <div className='col-md-12 d-md-flex justify-content-center textabout mt-md-5'>
                <h1 className='col-md-3 text-center'>Our Vision</h1>
                <p className='col-md-7'>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. </p>
            </div>
            <div className='col-md-12 d-md-flex justify-content-center textabout mt-md-5 mb-md-5'>
                <h1 className='col-md-3 text-center'>Our Business</h1>
                <p className='col-md-7'>At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.  </p>
            </div>
            <div className='col-12 imageh my-md-5'>
               
                <div className=' text-center imagee col-12 z-1 position-relative  '>
                <img src={ AboutImg} alt='imgg' className='img-fluid' />

                </div>
                <img alt='circlee' src={ circle1} className='position-absolute cirimgg' />

            </div>
            <div className='col-md-12 d-md-flex mt-md-5 justify-content-around'>
                <div className='col-3 stat py-md-3 '>
                    <span>Team Members</span>
                    <h1 className='d-flex'>300 <p className='plus fw-lighter'>+</p></h1>
                </div>
                 <div className='col-3 stat py-md-3'>
                    <span>Offices in the US</span>
                    <h1>3</h1>
                </div>
                 <div className='col-3 stat py-md-3'>
                    <span>Transactions analyzed</span>
                    <h1 className='d-flex'>10M <p className='plus fw-lighter'>+</p></h1>
                </div>
            
            </div>
            <div className='col-md-12 d-flex text-center textabout mt-md-5 '>
                <h1 className='col-md-3'>The Culture</h1>
                <p className='col-md-7 text-start '>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
            </div>

              <div className='col-md-12 d-flex text-center textabout mt-md-5 '>
                <h1 className='col-md-3'>The People</h1>
                <p className='col-md-7 text-start '>We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.</p>
            </div>
        </div>
    )
}
export default About