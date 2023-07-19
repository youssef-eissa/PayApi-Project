import './Contact.css'
import oracle from './assets/shared/desktop/oracle.svg'
import microsoft from './assets/shared/desktop/microsoft.svg'
import hp from './assets/shared/desktop/hewlett-packard.svg'
import tesla from './assets/shared/desktop/tesla.svg'
import google from './assets/shared/desktop/google.svg'
import nivida from './assets/shared/desktop/nvidia.svg'
import { useState } from 'react'
import circle1 from './assets/shared/desktop/bg-pattern-circle.svg'
import { motion } from 'framer-motion'


function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        title: "",
        message: "",
        nameTextAlert:"invisible",
        mailTextAlert: "invisible",
        nameBorder: "",
        mailBorder:""
    })
    function handleSubmit(e) {
        e.preventDefault()
        if (form.name === "") {
            setForm({...form,nameTextAlert:"",nameBorder:"red"})
        } else if (form.email === "") {
            setForm({...form,mailTextAlert:"",mailBorder:"red"})
            
        }

    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
                    animate={{ opacity:1,transition:{duration:0.3} }}
                    exit={{opacity:0,transition:{duration:0.6}}}
            className='container position-relative'>
            <img alt='circle' src={ circle1} className='position-absolute img-fluid circleee'/>
            <div className='row mt-md-5  '>
                

                <div className='col-md-12 contact '>
                    <h1 className='col-md-7 text-md-start text-center my-md-0 my-5'>Submit a help request and
                        we’ll get in touch shortly.</h1>
                </div>
                <div className='col-12 flex-md-row flex-column d-flex mt-md-5 justify-content-between'>
                    <form onSubmit={handleSubmit} className='col-md-4 contactForm'>
                        <input type='text' className={`col-12 mb-3 pb-3 ${form.nameBorder}`}
                            placeholder='Name'
                            name='name'
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value, nameTextAlert: "invisible",nameBorder:"" })}
                        />
                        <span className={`col-12 error-text ${form.nameTextAlert}`}>This field can’t be empty</span>

                        <input
                            type='text'
                            className={`col-12 mb-3 pb-3 ${form.mailBorder}`}
                            placeholder='Email Adress'
                            name='email'
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value, mailTextAlert: "invisible" ,mailBorder:""})} />
                        <span className={`col-12 error-text ${form.mailTextAlert}`}>This field can’t be empty</span>
                        
                        <input onChange={e => setForm({ ...form, company: e.target.value })} type='text' className='col-12 mb-4 pb-3' placeholder='Company Name' name='company' value={form.company} />
                        
                        <input onChange={e => setForm({ ...form, title: e.target.value })} type='text' className='col-12 mb-4 pb-3' placeholder='Title' name='title' value={form.title} />
                        
                        <textarea onChange={e => setForm({ ...form, message: e.target.value })} className='col-12 pb-5' placeholder='Message' value={form.message} />
                        
                        <div className='col-md-12 my-3 check d-flex align-items-center justify-content-around'>
                            <input className='col-3 ' type='checkbox' id='update' />
                            <label className='col-9' htmlFor='update'>Stay up-to-date with company announcements and updates to our API</label>
                        </div>

                        <input type='submit' value="Submit" className='px-4 py-2 my-md-0 my-3 col-4 ' />
                        
                    </form>
                    <div className='contactRight col-md-6 col-12'>
                        <div className='header col-9  mx-auto text-center mb-md-0 mb-5'>Join the thousands of innovators that are already building with us</div>
                        <div className='col-12 d-flex mb-md-0 mb-5  mt-md-5 flex-wrap justify-content-between align-items-between  column-gap-3 row-gap-5'>
                            <img alt='tesla' src={ tesla} className='col-md-3' />
                            <img alt='tesla' src={ microsoft} className='col-md-3' />
                            <img alt='tesla' src={ hp} className='col-md-3' />
                            <img alt='tesla' src={ oracle} className='col-md-3' />
                            <img alt='tesla' src={ google} className='col-md-3' />
                            <img alt='tesla' src={ nivida} className='col-md-3' />
                        </div>

                    </div>

                </div>
            </div>

        </motion.div>
    )
}
export default Contact