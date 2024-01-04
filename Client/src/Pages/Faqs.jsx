/* eslint-disable react/no-unescaped-entities */
import '../styles.css'

const Faqs = () => {
    return <>
    <section id='faqs' className='h-100 h-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
              <div className='card rounded-3'>
                <div className='home-content card-body p-4 p-md-5'>
                  <center><h3 className='mb-4 pb-2 pb-md-0 mb-md-5 px-md-2'>
                    Frequently Asked Questions...
                  </h3></center>
                  <section>
                    <div className="container">
                        <div className="accordion">
                            <div className="accordion-item" id="question1">
                                <a className='accordion-link' href="#question1">
                                    What services does the Public Attorney's Office offer?
                                    <i className="fa fa-plus"></i>
                                    <i className="fa fa-minus"></i>
                                </a>
                                <div className="answer">
                                    <p>
                                    <strong>Affidavit</strong>
                                    <ul>
                                        <li>Affidavit of Loss</li>
                                    </ul>
                                    </p>
                                </div>
                            </div>
                            <div className="accordion-item" id="question2">
                                <a className='accordion-link' href="#question2">
                                    Are there any payments?
                                    <i className="fa fa-plus"></i>
                                    <i className="fa fa-minus"></i>
                                </a>
                                <div className="answer">
                                    <p>
                                    Test
                                    </p>
                                </div>
                            </div>
                            <div className="accordion-item" id="question3">
                                <a className='accordion-link' href="#question3">
                                    Why am I handsome?
                                    <i className="fa fa-plus"></i>
                                    <i className="fa fa-minus"></i>
                                </a>
                                <div className="answer">
                                    <p>
                                    Test
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </section>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
}

export default Faqs