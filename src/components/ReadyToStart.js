import './ReadyToStart.css'
function ReadyToStart() {
    return (
        <div className='row'>
            <div className='col-md-12 mx-md-auto mt-md-5 d-flex flex-md-row flex-column justify-content-md-around px-4 px-md-5 ready mb-md-0 mb-3'>
                <h1 className='col-md-5 text-center col-12'>Ready to start?</h1>

                <form className='col-md-5 col-12 text-end'>
                    <input type='text' className='col-md-6 col-12 py-3 px-4 mb-md-0 mb-3 ' placeholder='Enter email address' />
                    <input type='submit'  value="Schedule a Demo" className='demooo col-md-5 py-3 text-center col-12  px-md-5 '/>
                </form>

            </div>
         </div>
    )
}
export default ReadyToStart