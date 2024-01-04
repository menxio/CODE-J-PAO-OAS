import '../styles.css'

const Confirm = ({ formData, setStep, setFormData }) => {
  return (
    <>
      <section id='forms' className='conf h-100 h-custom'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            {/* <div className='col-lg-8 col-xl-6'> */}
            <div className='card rounded-3'>
              <div className='card-body p-4 p-md-5'>
                {/* <h3 className='mb-4 pb-2 pb-md-0 mb-md-5 px-md-2'>
                  Appointment Summary
                </h3> */}
                <div>
                  <h4 className='inf-name'>
                    Public Attourney's Office Appointment Slip
                  </h4>
                  <br />
                  <table className='inf-table'>
                    <tbody>
                      <tr>
                        <td className='inf-title'>First Name</td>
                        <td className='inf-detail'>
                          {formData.formData?.firstName}
                        </td>
                      </tr>
                      <tr>
                        <td className='inf-title'>Middle Name</td>
                        <td className='inf-detail'>
                          {formData?.formData?.middleName || 'N/A'}
                        </td>
                      </tr>
                      <tr>
                        <td className='inf-title'>Last Name</td>
                        <td className='inf-detail'>
                          {formData?.formData?.lastName}
                        </td>
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
                          {formData?.formData?.date
                            ? new Date(
                                formData.formData?.date
                              ).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                weekday: 'long',
                              })
                            : 'N/A'}
                        </td>
                      </tr>
                      <tr>
                        <td className='inf-title'>Time</td>
                        <td className='inf-detail'>
                          {formData?.formData?.date
                            ? new Date(
                                formData.formData?.date
                              ).toLocaleTimeString(undefined, {
                                hour: 'numeric',
                                minute: 'numeric',
                              }) +
                              ' - ' +
                              new Date(
                                new Date(formData.formData?.date).getTime() +
                                  2 * 60 * 60 * 1000
                              ).toLocaleTimeString(undefined, {
                                hour: 'numeric',
                                minute: 'numeric',
                              })
                            : 'N/A'}
                        </td>
                      </tr>
                      <tr>
                        <td className='inf-title'>Appointment Type </td>
                        <td className='inf-detail'>{formData.formData.type}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <br />
                    <br />
                    <table>
                      <tbody>
                        <tr>
                          <td className='inf-title'>[Reference No.]</td>
                          <td className='inf-detail'>{formData._id}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                    <button
                      onClick={() => {
                        setFormData(null)
                        setStep(1)
                      }}
                      className='btn btn-success me-md-2'
                      type='button'
                    >
                      Add another Appointment
                    </button>
                    <button
                      className='btn btn-success'
                      onClick={() => (window.location.href = '/')}
                    >
                      Back to home
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
