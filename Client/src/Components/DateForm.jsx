import '../styles.css'
import { string, object } from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

const DateForm = ({ setFormdata, setStep }) => {
  const initialDate = new Date()
  initialDate.setDate(initialDate.getDate() + 1)
  initialDate.setHours(8, 0, 0, 0)

  const [startDate, setStartDate] = useState(new Date(initialDate))

  const handleSubmit = () => {
    setStep(4)
    setFormdata((prev) => ({ ...prev, date: startDate }))
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
                    Please select your preferred date and time of appointment.
                  </h3>

                  <div className='form-outline mb-4' id='form_main'>
                    <label className='form-label' htmlFor='purpose'>
                      Select Date:
                    </label>
                    <DatePicker
                      showIcon
                      selected={startDate}
                      showTimeSelect
                      timeIntervals={120}
                      filterDate={(date) => {
                        const day = date.getDay()
                        return day !== 0 && day !== 6
                      }}
                      minDate={new Date()}
                        minTime={new Date().setHours(8, 0)}
                      maxTime={new Date().setHours(16, 0)}
                      filterTime={(time) => {
                        const hours = time.getHours()
                        return hours >= 8 && hours <= 16
                      }}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                    <button
                      onClick={() => setStep(2)}
                      className='btn btn-success me-md-2'
                      type='button'
                    >
                      Back
                    </button>
                    <button
                      className='btn btn-success'
                      onClick={() => handleSubmit()}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DateForm
