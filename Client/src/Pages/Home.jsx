/* eslint-disable react/no-unescaped-entities */
import '../styles.css'

const About = () => {
  return (
    <>
      <section id='forms' className='h-100 h-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            {/* <div className='col-lg-8 col-xl-6'> */}
              <div className='card rounded-3'>
                <div className='home-content card-body p-4 p-md-5'>
                  <center><h3 className='mb-4 pb-2 pb-md-0 mb-md-5 px-md-2'>
                    How it works...
                  </h3></center>
                  <center><p>Get started with 7 easy steps</p></center>
                  <br />
                  <img className='ins-number' src="/public/img/number-1.png" alt="Failed to load image." />
                  <h5 className='ins-title'>Application Entry</h5>
                  <p className='ins'>Choose a purpose of appointment</p>
                  <img className='ins-img' src="/public/img/Services.png"  alt="Failed to load image." />
                  <br />
                  <br />
                  <br />
                  <hr />
                  <img className='ins-number' src="/public/img/number-2.png" alt="Failed to load image." />
                  <h5 className='ins-title'>Select a Branch</h5>
                  <p className='ins'>After choosing what services you want to be catered with, Select a branch where you want to be catered.</p>
                  <br />
                  <img className='ins-img' src="/public/img/Branch.png"  alt="Failed to load image."/>
                  <br />
                  <br />
                  <hr />
                  <img className='ins-number' src="/public/img/number-3.png" alt="Failed to load image." />
                  <h5 className='ins-title'>Choose Schedule of Appointment</h5>
                  <p className='ins'>After choosing where you want to be catered with, please seelct date and time of appointment.</p>
                  <img className='ins-img' src="/public/img/Calendar.png" alt="Failed to load image." />
                  <br />
                  <br />
                  <br />
                  <hr />
                  <img className='ins-number' src="/public/img/number-4.png" alt="Failed to load image." />
                  <h5 className='ins-title'>Fill out the Information Needed</h5>
                  <p className='ins'>After choosing where you want to be catered with, fill out the information needed.</p>
                  <img className='ins-img' src="/public/img/Fill.png" alt="Failed to load image." />
                  <br />
                  <br />
                  <br />
                  <hr />
                  <img className='ins-number' src="/public/img/number-5.png" alt="Failed to load image." />
                  <h5 className='ins-title'>Verify Your Phone Number via One Time Pin (OTP)</h5>
                  <p className='ins'>After filling out the information needed, we will sent a code to a phone number you registered from the past step.</p>
                  <img className='ins-img' src="/public/img/Otp.png" alt="Failed to load image." />
                  <br />
                  <br />
                  <br />
                  <hr />
                  <img className='ins-number' src="/public/img/number-6.png" alt="Failed to load image." />
                  <h5 className='ins-title'>Verify and Appointment</h5>
                  <p className='ins'>Verify your appointment and confirm.</p>
                  <img className='ins-img'  src="/public/img/VeriandConf.png" alt="Failed to load image." />
                  <br />
                  <br />
                  <hr />
                  <div className='announcement'>
                    <center><h3 className='mb-4 pb-2 pb-md-0 mb-md-5 px-md-2'>
                      Announcement
                    </h3></center>
                    <section className="carousel" aria-label="Gallery">
                      <ol className="carousel__viewport">
                        <li id="carousel__slide1"
                            tabIndex="0"
                            className="carousel__slide">
                          <div className="carousel__snapper">
                            <a href="#carousel__slide4"
                              className="carousel__prev">Go to last slide</a>
                            <a href="#carousel__slide2"
                              className="carousel__next">Go to next slide</a>
                          </div>
                        </li>
                        <li id="carousel__slide2"
                            tabIndex="0"
                            className="carousel__slide">
                          <div className="carousel__snapper"></div>
                          <a href="#carousel__slide1"
                            className="carousel__prev">Go to previous slide</a>
                          <a href="#carousel__slide3"
                            className="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide3"
                            tabIndex="0"
                            className="carousel__slide">
                          <div className="carousel__snapper"></div>
                          <a href="#carousel__slide2"
                            className="carousel__prev">Go to previous slide</a>
                          <a href="#carousel__slide4"
                            className="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide4"
                            tabIndex="0"
                            className="carousel__slide">
                          <div className="carousel__snapper"></div>
                          <a href="#carousel__slide3"
                            className="carousel__prev">Go to previous slide</a>
                          <a href="#carousel__slide1"
                            className="carousel__next">Go to first slide</a>
                        </li>
                      </ol>
                      <aside className="carousel__navigation">
                        <ol className="carousel__navigation-list">
                          <li className="carousel__navigation-item">
                            <a href="#carousel__slide1"
                              className="carousel__navigation-button">Go to slide 1</a>
                          </li>
                          <li className="carousel__navigation-item">
                            <a href="#carousel__slide2"
                              className="carousel__navigation-button">Go to slide 2</a>
                          </li>
                          <li className="carousel__navigation-item">
                            <a href="#carousel__slide3"
                              className="carousel__navigation-button">Go to slide 3</a>
                          </li>
                          <li className="carousel__navigation-item">
                            <a href="#carousel__slide4"
                              className="carousel__navigation-button">Go to slide 4</a>
                          </li>
                        </ol>
                      </aside>
                    </section>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
