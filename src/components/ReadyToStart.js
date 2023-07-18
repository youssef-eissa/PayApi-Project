import './ReadyToStart.css'
function ReadyToStart() {
    return (
        <div className='row'>
            <div className='col-md-12 mx-md-auto mt-md-5 d-md-flex justify-content-around px-md-5 ready'>
                <h1 className='col-md-5'>Ready to start?</h1>

                <form className='col-md-5 text-end'>
                    <input type='text' className='col-md-6 py-md-3 px-md-4 ' placeholder='Enter email address' />
                    <input type='submit'  value="Schedule a Demo" className='demo h-100 px-md-5 '/>
                </form>

            </div>
         </div>
    )
}
export default ReadyToStart