import './Pricing.css'
import circle1 from './assets/shared/desktop/bg-pattern-circle.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
function Pricing() {
    return (
        <div className="container position-relative .price">
            <div className='row '>
                <div className='circlee position-absolute '>
                <img alt='circlee' src={ circle1} />
            </div>
            <div className='col-md-12 .pricing  mt-md-5 titlee'>
                <h1>Pricing</h1>
                </div>
                <div className='col-md-12 d-md-flex mt-md-5 column-gap-4 plans'>
                    <div className='col-md-4'>
                        <h1 className='plan'>Free Plan</h1>
                        <FontAwesomeIcon icon="fa-solid fa-user-check" />
                        <p>Build and test using our core set of products with up to 100 API requests </p>
                        <div className='planprice '>$0.00</div>
                        <ul className='col-md-12 py-md-4 '>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Transactions</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Auth</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Identity</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' >  </span>
                                <div className='col-md-11 '>Investments</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' >  </span>
                                <div className='col-md-11 '>Assets</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' >  </span>
                                <div className='col-md-11 '>Liabilities</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > </span>
                                <div className='col-md-11 '>Income</div>
                            </li>

                        </ul>
                        <div className='col-12 '>
                        <button className='request mt-3 py-md-2 px-md-4 '>Request Access</button>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h1 className='plan'>Basic Plan</h1>
                        <FontAwesomeIcon icon="fa-solid fa-user-check" />
                        <p>Launch your project with unlimited requests and no contractual minimums  </p>
                        <div className='planprice '>$249.00</div>
                        <ul className='col-md-12 py-md-4 '>
                            <li className='d-md-flex align-items-center mb-md-2 '>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Transactions</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2 '>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Auth</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Identity</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked '>Investments</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Assets</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' >  </span>
                                <div className='col-md-11 '>Liabilities</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > </span>
                                <div className='col-md-11 '>Income</div>
                            </li>

                        </ul>
                        <div className='col-12 '>
                        <button className='request mt-3 py-md-2 px-md-4 '>Request Access</button>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h1 className='plan'>Basic Plan</h1>
                        <FontAwesomeIcon icon="fa-solid fa-user-check" />
                        <p>Launch your project with unlimited requests and no contractual minimums  </p>
                        <div className='planprice '>$249.00</div>
                        <ul className='col-md-12 py-md-4 '>
                            <li className='d-md-flex align-items-center mb-md-2 '>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Transactions</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2 '>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Auth</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Identity</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked '>Investments</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Assets</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /> </span>
                                <div className='col-md-11 checked'>Liabilities</div>
                            </li>
                            <li className='d-md-flex align-items-center mb-md-2'>
                                <span className='col-md-1 ' > <FontAwesomeIcon icon={faCheck} style={{color:"#BA4270"}} /></span>
                                <div className='col-md-11 checked '>Income</div>
                            </li>

                        </ul>
                        <div className='col-12 '>
                        <button className='request mt-3 py-md-2 px-md-4 '>Request Access</button>

                        </div>
                    </div>
                </div>
                
           </div>
        </div>
    )
}

export default Pricing