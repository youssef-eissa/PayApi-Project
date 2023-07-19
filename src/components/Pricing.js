import './Pricing.css'
import circle1 from './assets/shared/desktop/bg-pattern-circle.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
function Pricing() {
    return (
        <motion.div
           initial={{ opacity: 0}}
                    animate={{ opacity:1,transition:{duration:0.3} }}
                    exit={{opacity:0,transition:{duration:0.3}}}
            className="container position-relative .price">
            <div className='row '>
                <div className='circlee position-absolute '>
                <img alt='circlee' src={ circle1} />
            </div>
            <div className='col-md-12 .pricing  my-3 titlee'>
                <h1 className='col-12 text-md-start text-center'>Pricing</h1>
                </div>
                <div className='col-md-12 d-flex flex-md-row flex-column  mt-md-5 column-gap-4 plans'>
                    <div className='col-md-4 text-center text-md-start'>
                        <h1 className='plan '>Free Plan</h1>
                        <FontAwesomeIcon icon="fa-solid fa-user-check" />
                        <p>Build and test using our core set of products with up to 100 API requests </p>
                        <div className='planprice '>$0.00</div>
                        <ul className='col-md-12 py-4  '>
                            <li className='d-flex align-items-center justify-content-between mb-md-2'>
                                <span className='col-md-1 col-4 text-md-start text-end ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 col-7 text-md-start text-start  checked'>Transactions</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 col-7 text-md-start text-start checked'>Auth</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked col-7 text-md-start text-start'>Identity</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' >  </span>
                                <div className='col-md-11 col-7 text-md-start text-start'>Investments</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' >  </span>
                                <div className='col-md-11 col-7 text-md-start text-start'>Assets</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' >  </span>
                                <div className='col-md-11 col-7 text-md-start text-start'>Liabilities</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > </span>
                                <div className='col-md-11 col-7 text-md-start text-start '>Income</div>
                            </li>

                        </ul>
                        <div className='col-12 '>
                        <button className='request my-3 py-2 px-4 '>Request Access</button>

                        </div>
                    </div>
                    <div className='col-md-4 text-center text-md-start'>
                        <h1 className='plan'>Basic Plan</h1>
                        <FontAwesomeIcon icon="fa-solid fa-user-check" />
                        <p>Launch your project with unlimited requests and no contractual minimums  </p>
                        <div className='planprice '>$249.00</div>
                        <ul className='col-md-12 py-4 '>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked col-7 text-md-start text-start'>Transactions</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked col-7 text-md-start text-start'>Auth</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 col-7 text-md-start text-start checked'>Identity</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 col-7 text-md-start text-start checked '>Investments</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 col-7 text-md-start text-start checked'>Assets</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' >  </span>
                                <div className='col-md-11 col-7 text-md-start text-start'>Liabilities</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between' >
                                <span className='col-md-1 col-4 text-md-start text-end' > </span>
                                <div className='col-md-11 col-7 text-md-start text-start '>Income</div>
                            </li>

                        </ul>
                        <div className='col-12 '>
                        <button className='request my-3 py-2 px-4 '>Request Access</button>

                        </div>
                    </div>
                    <div className='col-md-4 text-center text-md-start'>
                        <h1 className='plan'>Basic Plan</h1>
                        <FontAwesomeIcon icon="fa-solid fa-user-check" />
                        <p>Launch your project with unlimited requests and no contractual minimums  </p>
                        <div className='planprice '>$249.00</div>
                        <ul className='col-md-12 py-4 '>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 col-7 text-md-start text-start checked'>Transactions</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 col-7 text-md-start text-start checked'>Auth</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 col-7 text-md-start text-start checked'>Identity</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 col-7 text-md-start text-start checked '>Investments</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 col-7 text-md-start text-start checked'>Assets</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 col-7 text-md-start text-start checked'>Liabilities</div>
                            </li>
                            <li className='d-flex align-items-center mb-md-2 justify-content-between'>
                                <span className='col-md-1 col-4 text-md-start text-end' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /></span>
                                <div className='col-md-11 checked col-7 text-md-start text-start '>Income</div>
                            </li>

                        </ul>
                        <div className='col-12 '>
                        <button className='request my-3 py-2 px-4 '>Request Access</button>

                        </div>
                    </div>
                </div>
                
           </div>
        </motion.div>
    )
}

export default Pricing