/* eslint-disable no-const-assign */
import '../styles.css'
import GoogleMapsEmbed from './GoogleMap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { string, object } from 'yup'

const TermsForm = ({ setFormdata, setStep, formData  }) => {

  const handleSubmit = () => {
    setStep(3)
  }

  let reminders

  if(formData.purpose === 'Affidavits') {
    if(formData.type === 'Affidavit of Delayed Registration of Birth'){
        reminders = () => {
          return (
            <>
              <p>
                1. Photocopy of valid government issued ID of the witness;
                <br />
                2. PSA negative birth certificate of live birth;
                <br />
                3. Two witnesses who are not related or married to you;
                <br />
                4. Personal appearance
              </p>
            </>
          )
        }
    }
    if(formData.type === 'Affidavit of Delayed Registration of Death'){
      reminders = () => {
        return (
          <>
            <p>
              1. Photocopy of valid government issued ID of the witness;
              <br />
              2. Photocopy of the draft death certificate/details of the deceased;
              <br />
              3. Two witnesses who are not related or married to you;
              <br />
              4. Personal appearance
            </p>
          </>
        )
      }
    }
    if(formData.type === 'Affidavit of Loss (ATM/Passbook)'){
      reminders = () => {
        return (
          <>
            <p>
              1. Photocopy of valid government issued ID of the witness;
              <br />
              2. Account Number;
              <br />
              3. Personal appearance
            </p>
          </>
        )
      }
    }
    if(formData.type === 'Affidavit of Loss (Pawn/Ticket)'){
      reminders = () => {
        return (
          <>
            <p>
              1. Photocopy of valid government issued ID of the witness;
              <br />
              2. Description of the pawned item (Pwede mangayo sa pawnshop);
              <br />
              3. Personal appearance
            </p>
          </>
        )
      }
    }
    if(formData.type === 'Affidavit of No Income'){
      reminders = () => {
        return (
          <>
            <p>
              1. Photocopy of valid government issued ID of the witness;
              <br />
              2. Personal appearance
            </p>
          </>
        )
      }
    }
    if(formData.type === 'Affidavit of No Unemployment'){
      reminders = () => {
        return (
          <>
            <p>
              1. Photocopy of valid government issued ID of the witness;
              <br />
              2. Personal appearance
            </p>
          </>
        )
      }
    }
    if(formData.type === 'Joint Affidavit of Two Disinterested Persons'){
      reminders = () => {
        return (
          <>
            <p>
              1. Photocopy of valid government issued ID of the witness;
              <br />
              2. Document copy/ papeles nga sayop ug sakto;
              <br />
              3. Two witnesses who are not related or married to you;
              <br />
              4. Personal Appearance
            </p>
          </>
        )
      }
    }
  }
  if(formData.purpose === 'Legal Counseling'){
    if(formData.type === 'With Case' || formData.type === 'Without Case'){
      reminders = () => {
        return (
          <>
            <p>
              1. Case Information;
              <br />
              2. Case Resolution;
              <br />
              3. Complaint Affidavits/Affidavits of Witnesses;
              <br />
              4. Receipts of Property Seized;
              <br />
              5. Request for Laboratory Examination;
              <br />
              6. Chemistry Report;
              <br />
              7. Pictures;
              <br />
              8. Counter-affidavit, kung naa;
              <br />
              9. Others
            </p>
          </>
        )
      }
    }
  }
  if(formData.purpose === 'Notary') {
    if(formData.type === 'Notary'){
        reminders = () => {
          return (
            <>
              <p>
                1. Personal Appearance
              </p>
            </>
          )
        }
    }
  }
  

  return (
    <>
      <section id='forms' className='h-100 h-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            {/* <div className='col-lg-8 col-xl-6'> */}
              <div className='card rounded-3'>
                <div className='card-body p-4 p-md-5'>
                  <div className='office-add'>
                    <p className='office-add-p'>
                      Office Address:
                      <br />
                      Groud Floor, Hall of Justice, Captiol Ground, Malaybalay City, Bukidnon, 8700
                    </p>
                  </div>
                  <center><div>
                    <GoogleMapsEmbed />
                  </div></center>
                  <br />
                  <h3 className='mb-4 pb-2 pb-md-0 mb-md-5 px-md-2'>
                    Important Reminders
                    <div>
                      {reminders&&reminders()}
                    </div>
                  </h3>
                  <h3 className='mb-4 pb-2 pb-md-0 mb-md-5 px-md-2'>
                    Terms and Conditions
                  </h3>
                  <Formik
                    initialValues={{
                      checked: false, 
                    }}
                    onSubmit={handleSubmit}
                    // validationSchema={requestSchema}
                  >
                    <Form className='px-md-2'>
                      <div className='form-outline mb-4' id='form_main'>
                        <Field
                          as='input'
                          type='checkbox'
                          required={true}
                          id='checked'
                          className='form-checkbox'
                          name='checked'
                          style={{ width: '20px', height: '20px' }}
                        />
                        <label className='form-label' htmlFor='purpose'>
                          Terms and Conditions
                        </label>
                        <ErrorMessage
                          name='checked'
                          style={{ color: 'red' }}
                          component='div'
                          className='error-message'
                        />
                      </div>
                      <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                        <button
                          onClick={() => setStep(1)}
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
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsForm
