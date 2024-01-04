import '../styles.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useEffect, useState } from 'react'
import ServicesForm from '../Components/ServicesForm'
import TermsForm from '../Components/TermsForm'
import DateForm from '../Components/DateForm'
import DetailsForm from '../Components/DetailsForm'
import OTP from '../Components/OTP'
import Confirm from '../Components/Confirm'
import Summary from '../Components/Summary'
const Appointment = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormdata] = useState({
    purpose: '',
    type: '',
    date: '',
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    gender: '',
    address: '',
    email: '',
    mobileNo: '',
  })

  useEffect(() => {
    console.log({ step })
    console.log(formData)
  }, [step])

  return (
    <>
      {step === 1 && (
        <ServicesForm setStep={setStep} setFormdata={setFormdata} />
      )}
      {step === 2 && <TermsForm setStep={setStep} setFormdata={setFormdata} formData={formData} />}
      {step === 3 && <DateForm setStep={setStep} setFormdata={setFormdata} />}
      {step === 4 && (
        <DetailsForm setStep={setStep} setFormdata={setFormdata} />
      )}
      {step === 5 && <OTP setStep={setStep} setFormdata={setFormdata} />}
      {step === 6 && <Confirm setStep={setStep} formData={formData} setFormData={setFormdata} />}
      {step === 7 && <Summary setStep={setStep} formData={formData} setFormData={setFormdata} />}
    </>
  )
}

export default Appointment
