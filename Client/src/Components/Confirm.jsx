import '../styles.css'

const Confirm = ({ formData, setStep, setFormData }) => {
  const handleSubmit = async () => {
    console.log(formData)
    const route = `http://localhost:3000/user/appointment/create`
    try {
      const response = await fetch(route, {
        body: JSON.stringify(formData),
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        // credentials: 'include',
      })
      const data = await response.json()
      if (data.result === 'OK') {
        setFormData(data.payload)
        setStep(7)
      } else console.log(data.payload.error)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section id='forms' className='conf h-100 h-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            {/* <div className='col-lg-8 col-xl-6'> */}
            <div className='card rounded-3'>
              <div className='card-body p-4 p-md-5'>
                <h3 className='mb-4 pb-2 pb-md-0 mb-md-5 px-md-2'>
                  Please review the details of your appointment.
                </h3>
                <div>
                  <h4 className='inf-name'>Appointment Details</h4>
                  <br />
                  <table className='inf-table'>
                    <tbody>
                      <tr>
                        <td className='inf-title'>First Name</td>
                        <td className='inf-detail'>{formData?.firstName}</td>
                      </tr>
                      <tr>
                        <td className='inf-title'>Middle Name</td>
                        <td className='inf-detail'>
                          {formData?.middleName || 'N/A'}
                        </td>
                      </tr>
                      <tr>
                        <td className='inf-title'>Last Name</td>
                        <td className='inf-detail'>{formData?.lastName}</td>
                      </tr>
                      <tr>
                        <td className='inf-title'>Outlet Address</td>
                        <td className='inf-detail'>
                          Ground Floor, Hall of Justice Building, Capitol
                          Grounds, Malaybalay City, Bukidnon, 8700
                        </td>
                      </tr>
                      <tr>
                        <td className='inf-title'>Date</td>
                        <td className='inf-detail'>
                          {formData?.date
                            ? new Date(formData.date).toLocaleDateString(
                                undefined,
                                {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  weekday: 'long',
                                }
                              )
                            : 'N/A'}
                        </td>
                      </tr>
                      <tr>
                        <td className='inf-title'>Time</td>
                        <td className='inf-detail'>
                          {formData?.date
                            ? new Date(formData.date).toLocaleTimeString(
                                undefined,
                                { hour: 'numeric', minute: 'numeric' }
                              ) +
                              ' - ' +
                              new Date(
                                new Date(formData.date).getTime() +
                                  2 * 60 * 60 * 1000
                              ).toLocaleTimeString(undefined, {
                                hour: 'numeric',
                                minute: 'numeric',
                              })
                            : 'N/A'}
                        </td>
                      </tr>
                      <tr>
                        <td className='inf-title'>Appointment type</td>
                        <td className='inf-detail'>{formData.type}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <br />
                    <br />
                  </div>
                  <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                    <button
                      onClick={() => setStep(5)}
                      className='btn btn-success me-md-2'
                      type='button'
                    >
                      Back
                    </button>
                    <button
                      className='btn btn-success'
                      type='submit'
                      onClick={() => handleSubmit()}
                    >
                      Next
                    </button>
                  </div>
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

export default Confirm
