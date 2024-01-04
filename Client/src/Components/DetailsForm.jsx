import '../styles.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { string, object, number } from 'yup'

const DetailsForm = ({ setStep, setFormdata }) => {
  const requestSchema = object({
    firstName: string().required('First name cannot be empty'),
    middleName: string(),
    lastName: string().required('Last name cannot be empty'),
    gender: string().required('Gender cannot be empty'),
    age: number().required('Age cannot be empty').min(1).max(100),
    address: string().required('Address cannot be empty'),
    email: string().required('Email cannot be empty'),
    mobileNo: number()
      .integer()
      .typeError('Please enter a valid number')
      .test(
        'len',
        'Number must be exactly 11 digits',
        (val) => val && val.toString().length === 10
      )
      .required('Number cannot be empty'),
  })

  const handleSubmit = (values) => {
    setStep(5)
    setFormdata((prev) => ({
      ...prev,
      firstName: values.firstName,
      middleName: values.middleName,
      lastName: values.lastName,
      gender: values.gender,
      age: values.age,
      address: values.address,
      email: values.email,
      mobileNo: values.mobileNo,
    }))
  }

  return (
    <>
      <section id='forms' className='h-100 h-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-lg-8 col-xl-6'>
              <div className='card rounded-3'>
                <div className='card-body p-4 p-md-5'>
                  <h3 className='mb-4 pb-2 pb-md-0 mb-md-5 px-md-2'>
                    Appointment Form
                  </h3>
                  <label className='form-label' htmlFor='purpose'>
                    Please provide your contact information for the appointment.
                    We will send you a copy of your appointment confirmation via
                    email.
                  </label>
                  <Formik
                    initialValues={{
                      firstName: '',
                      middleName: '',
                      lastName: '',
                      gender: '',
                      age: '',
                      address: '',
                      email: '',
                      mobileNo: '',
                    }}
                    onSubmit={(values) => handleSubmit(values)}
                    validationSchema={requestSchema}
                  >
                    {() => (
                      <Form className='px-md-2'>
                        <div
                          className='form-outline mb-4'
                          id='form_main'
                          style={{
                            display: 'flex',
                            gap: '10px',
                            justifyContent: 'center',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              width: '45%',
                            }}
                          >
                            <label>First Name</label>
                            <Field
                              as='input'
                              required={true}
                              id='firstName'
                              className='form-control'
                              name='firstName'
                              placeholder='First Name'
                            ></Field>
                            <ErrorMessage
                              name='firstName'
                              style={{ color: 'red' }}
                              component='div'
                              className='error-message'
                            />
                            <label>Middle Name</label>
                            <Field
                              as='input'
                              id='middleName'
                              className='form-control'
                              name='middleName'
                              placeholder='Middle Name'
                            ></Field>
                            <ErrorMessage
                              name='middleName'
                              style={{ color: 'red' }}
                              component='div'
                              className='error-message'
                            />
                            <label>Last Name</label>
                            <Field
                              as='input'
                              required={true}
                              id='lastName'
                              className='form-control'
                              name='lastName'
                              placeholder='Last Name'
                            ></Field>
                            <ErrorMessage
                              name='lastName'
                              style={{ color: 'red' }}
                              component='div'
                              className='error-message'
                            />
                            <label>Gender</label>
                            <Field
                              as='select'
                              required={true}
                              id='gender'
                              className='form-control'
                              name='gender'
                            >
                              <option value={null}>---Select Gender---</option>
                              <option value={'male'}>Male</option>
                              <option value={'female'}>Female</option>
                            </Field>
                            <ErrorMessage
                              name='gender'
                              style={{ color: 'red' }}
                              component='div'
                              className='error-message'
                            />
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              width: '45%',
                            }}
                          >
                            <label>Age</label>
                            <Field
                              as='input'
                              type='number'
                              required={true}
                              id='age'
                              className='form-control'
                              name='age'
                              placeholder='Age'
                            ></Field>
                            <ErrorMessage
                              name='age'
                              style={{ color: 'red' }}
                              component='div'
                              className='error-message'
                            />
                            <label>Address</label>
                            <Field
                              as='input'
                              required={true}
                              id='address'
                              className='form-control'
                              name='address'
                              placeholder='Address'
                            ></Field>
                            <ErrorMessage
                              name='address'
                              style={{ color: 'red' }}
                              component='div'
                              className='error-message'
                            />
                            <label>Email</label>
                            <Field
                              as='input'
                              required={true}
                              type='email'
                              id='email'
                              className='form-control'
                              name='email'
                              placeholder='Email'
                            ></Field>
                            <ErrorMessage
                              name='firstName'
                              style={{ color: 'red' }}
                              component='div'
                              className='error-message'
                            />
                            <label>Mobile Number</label>
                            <Field
                              as='input'
                              required={true}
                              type='tel'
                              id='mobileNo'
                              className='form-control'
                              name='mobileNo'
                              placeholder='Mobile Number'
                            ></Field>
                            <ErrorMessage
                              name='mobileNo'
                              style={{ color: 'red' }}
                              component='div'
                              className='error-message'
                            />
                          </div>
                        </div>

                        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                          <button
                            onClick={() => setStep(3)}
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
                    )}
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

export default DetailsForm
