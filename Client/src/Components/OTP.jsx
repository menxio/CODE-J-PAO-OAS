import '../styles.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { string, object, number } from 'yup'

const OTP = ({ setFormdata, setStep }) => {
  const handleSubmit = () => {
    setStep(6)
  }

  //need to work on error validation & actual call to email and SMS API
  return (
    <>
      <section id='forms' className='h-100 h-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-lg-8 col-xl-6'>
              <div className='card rounded-3'>
                <div className='card-body p-4 p-md-5'>
                  <h3 className='mb-4 pb-2 pb-md-0 mb-md-5 px-md-2'>
                    OTP Verification
                  </h3>

                  <Formik
                    initialValues={{
                      code: Array(6).fill(''),
                    }}
                    onSubmit={handleSubmit}
                  >
                    <Form className='px-md-2'>
                      <div className='form-outline mb-4' id='form_main'>
                        <label className='form-label' htmlFor='code'>
                          A 6-digit code was sent to your registered email
                          address and mobile number.
                        </label>
                        <div
                          className='d-flex'
                          style={{ display: 'flex', gap: '5px' }}
                        >
                          {Array.from({ length: 6 }, (_, index) => (
                            <Field
                              key={index}
                              as='input'
                              type='password'
                              // required={true}
                              id={`otp-input-${index}`}
                              name={`code[${index}]`}
                              maxLength={1}
                              className='form-control'
                              //   value={formik.values.code[index]}
                              //   onChange={(e) => handleInputChange(e, index)}
                            />
                          ))}
                        </div>
                        <ErrorMessage
                          name='code'
                          style={{ color: 'red' }}
                          component='div'
                          className='error-message'
                        />
                      </div>
                      <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                        <button
                          onClick={() => setStep(4)}
                          className='btn btn-success me-md-2'
                          type='button'
                        >
                          Back
                        </button>
                        <button className='btn btn-success' type='submit'>
                          Next
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OTP
