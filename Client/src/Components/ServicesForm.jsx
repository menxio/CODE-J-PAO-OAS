import '../styles.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { string, object } from 'yup'

const ServicesForm = ({ setStep, setFormdata }) => {
  const requestSchema = object({
    purpose: string().required('Purpose is required'),
    affidavitType: string().when('purpose', {
      is: (value) => value === 'Affidavits',
      then: (schema) => schema.required('Affidavit Type is required'),
      otherwise: (schema) => schema,
    }),
    counselingType: string().when('purpose', {
      is: (value) => value === 'Legal Counseling',
      then: (schema) => schema.required('Counseling Type is required'),
      otherwise: (schema) => schema,
    }),
  })

  const affidavitOptions = () => {
    return (
      <>
        <div className='form-outline mb-4' id='aff_form'>
          <label className='form-label' htmlFor='purpose'>
            What type of affidavit?
          </label>
          <Field
            as='select'
            id='affidavitType'
            name='affidavitType'
            className='form-control'
            required={true}
          >
            <option value='None'>---Select the type of affidavit---</option>
            <option value='Affidavit of Delayed Registration of Birth'>
              Affidavit of Delayed Registration of Birth
            </option>
            <option value='Affidavit of Delayed Registration of Death'>
              Affidavit of Delayed Registration of Death
            </option>
            <option value='Affidavit of Loss (ATM/Passbook)'>
              Affidavit of Loss (ATM/Passbook)
            </option>
            <option value='Affidavit of Loss (Pawn/Ticket)'>
              Affidavit of Loss (Pawn/Ticket)
            </option>
            <option value='Affidavit of No Income'>
              Affidavit of No Income
            </option>
            <option value='Affidavit of Unemployment'>
              Affidavit of Unemployment
            </option>
            <option value='Joint Affidavit of Two Disinterested Persons'>
              Joint Affidavit of Two Disinterested Persons
            </option>
          </Field>
          <ErrorMessage
            name='affidavitType'
            component='div'
            style={{ color: 'red' }}
            className='error-message'
          />
        </div>
      </>
    )
  }
  const CounselingOptions = () => {
    return (
      <>
        <div className='form-outline mb-4' id=' counseling_form'>
          <label className='form-label' htmlFor='purpose'>
            What type of Counseling?
          </label>
          <Field
            as='select'
            id='counselingType'
            name='counselingType'
            className='form-control'
            required={true}
          >
            <option value='None'>---Select the type of counseling---</option>
            <option value='With Case'>With Case</option>
            <option value='Without Case'>Without Case</option>
          </Field>
          <ErrorMessage
            name='counselingType'
            style={{ color: 'red' }}
            component='div'
            className='error-message'
          />
        </div>
      </>
    )
  }
  const NotaryOptions = () => {
    return (
      <>
        <div className='form-outline mb-4' id='notary_form'>
          <label className='form-label' htmlFor='purpose'>
            What type of Notary?
          </label>
          <Field
            as='select'
            id='notaryType'
            className='form-control'
            name='Type'
          >
            <option value='Notary'>Notary</option>
          </Field>
        </div>
      </>
    )
  }

  const handleSubmit = (values) => {
    setStep(2)
    setFormdata((prev) => ({
      ...prev,
      purpose: values.purpose,
    }))
    if (values.affidavitType !== '')
      setFormdata((prev) => ({ ...prev, type: values.affidavitType }))
    else setFormdata((prev) => ({ ...prev, type: values.counselingType }))
  }

  return (
    <>
      <section id='forms' className='h-100 h-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            {/* <div className='col-lg-8 col-xl-6'> */}
              <div className='card rounded-3'>
                <div className='card-body p-4 p-md-5'>
                  <h3 className='mb-4 pb-2 pb-md-0 mb-md-5 px-md-2'>
                    Appointment Form
                  </h3>

                  <Formik
                    initialValues={{
                      purpose: '',
                      affidavitType: '',
                      counselingType: '',
                    }}
                    onSubmit={(values) => handleSubmit(values)}
                    validationSchema={requestSchema}
                  >
                    {(formikProps) => (
                      <Form className='px-md-2'>
                        <div className='form-outline mb-4' id='form_main'>
                          <label className='form-label' htmlFor='purpose'>
                            What is the purpose for your appointment?
                          </label>
                          <Field
                            as='select'
                            required={true}
                            id='purpose'
                            className='form-control'
                            name='purpose'
                          >
                            <option value='None'>---Select a purpose---</option>
                            <option value='Affidavits'>Affidavits</option>
                            <option value='Legal Counseling'>
                              Legal Counseling
                            </option>
                            <option value='Notary'>Notary</option>
                          </Field>
                          <ErrorMessage
                            name='purpose'
                            style={{ color: 'red' }}
                            component='div'
                            className='error-message'
                          />
                        </div>
                        {formikProps.values.purpose &&
                          (formikProps.values.purpose === 'Affidavits'
                            ? affidavitOptions()
                            : formikProps.values.purpose === 'Legal Counseling'
                            ? CounselingOptions()
                            : formikProps.values.purpose === 'Notary' &&
                              NotaryOptions())}
                        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                          <button className='btn btn-success' type='submit'>
                            Next
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesForm
