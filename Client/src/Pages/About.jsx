/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-unescaped-entities */
import '../styles.css'

const About = () => {
  return (
    <div className="container">
      <h1 className="text-center">MISSION</h1>
      <br />
      <div>
        <p className='text-center'>
        By 2023, the PAO, as the principal law office of the government, shall be composed of highly motivated, effective, and empowered public servants, 
        consistently responsive to the ever-growing legal needs of the indigents and other qualified persons, utilizing modern facilities, information technology systems, 
        and tools needed for efficient delivery of free legal aid services to promote access to justice, truth, and peace.
        </p>
      </div>
      <h1 className="text-center">VISION</h1>
      <br />
      <p className="text-center">
      The PAO exists to provide the indigent litigants, the oppressed, marginalized, and underprivileged members of the society free access to courts, judicial, 
      and quasi-judicial agencies, by rendering legal services, counseling, and assistance in consonance with the Constitutional mandate that "free access to courts shall not 
      be denied to any person by reason of poverty" in order to ensure the rule of law, truth, and social justice as components of the country's sustainable development.
      </p>
      
      <h1 className="text-center">SERVICE PLEDGE</h1>
      <br />
      <p className="text-center">
      The PAO commits itself to provide prompt, competent, reliable, and excellent free legal services to indigents and other qualified persons in adherence to R.A. No. 9406, 
      otherwise known as the PAO Law, and other pertinent laws, rules, and regulations, and pledges to fulfill its mandate with utmost honesty, sincerity, and respect for the 
      rule of law and justice.
      </p> 
      <p className="text-center">
 	    Further, PAO endeavors to upgrade its facilities and adapt to global changes in information technology systems and tools to be more effective and efficient in responding 
      to the dynamic legal needs of its clientele.
      </p>
      
      <h1 className="text-center">Organizational Structure</h1>
      <div className="">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                PERSONNEL
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <Person src="/img/organization/Atty-Voltaire.jpg" name="ATTY. VOLTAIRE C. MOJICA" position="Public Attorney III/ Officer-In-Charge"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Person src="/img/organization/ZENNIA-A.-MACAPELIT.jpg" name="ZENNIA A. MACAPELIT" position="Administrative Officer III"/>
                    </div>
                    <div className="col">
                      <Person src="/img/organization/REYNALDO-C.-ROBOSA.jpg" name="REYNALDO C. ROBOSA" position="Administrative Aide IV(Driver I)"/>
                    </div>
                    <div className="col">
                      <Person src="/img/organization/LEONIDES-C.-BUQUIRAN.jpg" name="LEONIDES C. BUQUIRAN" position="Administrative Aide III(Driver I) (Detained)"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                        <Person src="/img/organization/ZENNIA-A.-MACAPELIT.jpg" name="ZENNIA A. MACAPELIT" position="Administrative Officer III"/>
                      </div>
                      <div className="col">
                        <Person src="/img/organization/REYNALDO-C.-ROBOSA.jpg" name="REYNALDO C. ROBOSA" position="Administrative Aide IV(Driver I)"/>
                      </div>
                      <div className="col">
                        <Person src="/img/organization/LEONIDES-C.-BUQUIRAN.jpg" name="LEONIDES C. BUQUIRAN" position="Administrative Aide III(Driver I) (Detained)"/>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                ADMINISTRATIVE SUPPORT STAFF
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <Person src="/img/organization/ZENNIA-A.-MACAPELIT.jpg" name="ZENNIA A. MACAPELIT" position="Administrative Officer III"/>
                    </div>
                    <div className="col">
                      <Person src="/img/organization/REYNALDO-C.-ROBOSA.jpg" name="REYNALDO C. ROBOSA" position="Administrative Aide IV(Driver I)"/>
                    </div>
                    <div className="col">
                      <Person src="/img/organization/LEONIDES-C.-BUQUIRAN.jpg" name="LEONIDES C. BUQUIRAN" position="Administrative Aide III(Driver I) (Detained)"/>
                    </div>
                    <div className="col">
                      <Person src="/img/organization/ROSALIE-E.-LIM.jpg" name="ROSALIE E. LIM" position="Administrative Aide IV(Clerk II)"/>
                    </div>
                    <div className="col">
                      <Person src="/img/organization/EDGAR-S.-PALUGA.jpg" name="EDGAR PALUGA" position="Administrative Aide IV(Production Machine Operator II)"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                PUBLIC INFORMATION DIVISION
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <Person src="/img/organization/RUZANNE-R.-BELISARIO-Copy.jpg" name="RIO ADAM T. OPIALA" position="Administrative Officer II"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
              INFORMATION CAMPAIGN & DOCUMENTATION SECTION
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <Person src="/img/organization/RIO-ADAM-T.-OPIALA-.jpg" name="SHEILA S. EVACUADO" position="City Administrator"/>
                    </div>
                    <div className="col">
                      <Person src="/img/organization/SHEILA-S.-EVACUADO.jpg" name="ATTY. ANNA MARIE R. BERGADO" position="City Administrator"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
              PUBLIC RELATION SECTION
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <Person src="/img/organization/JONI-ESTER-P.-PARRADO.jpg" name="JONI ESTER P. PARADO" position="Information Officer III"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                MANAGEMENT INFORMATION SYSTEMS DIVISION
              </button>
            </h2>
            <div id="collapseSeven" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <Person src="/img/organization/SALICK-O.-DARANGINA.jpg" name="SALICK O. DARANGINA" position="Information Technology Officer"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                PROGRAM DEVELOPMENT SECTION
              </button>
            </h2>
            <div id="collapseEight" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <Person src="/img/organization/MARC-DENNIS-B.-DANIOT.jpg" name="MARC DENNIS B. DANIOT" position="Information System Analyst II"/>
                    </div>
                    <div className="col">
                      <Person src="/img/organization/SHERILYN-KAYE-RAIN-D.-DIMACULANGAN.jpg" name="SHERILYN KAYE RAIN D. DIMACULANGAN" position="Administrative Officer II (Administrative Officer I)"/>
                    </div>
                    <div className="col">
                      <Person src="/img/organization/TEOFILO-A.-PIODOS-JR.-Copy.jpg" name="TEOFILO A. PIODOS" position="Administrative Officer II (Administrative Officer I)"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                HARDWARE MAINTENANCE SECTION
              </button>
            </h2>
            <div id="collapseNine" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <Person src="/img/organization/MELVIN-M.-GUTIERREZ.jpg" name="MELVIN M. GUTIERREZ" position="Administrative Officer I(Computer Operator I)"/>
                    </div>
                    <div className="col">
                      <Person src="/img/organization/JHON-VILLIAM-C.-ORTILLO-Copy.jpg" name="JHON VILLAM C. ORTILLO" position="Information System Analyst II"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Value = ({title, content}) => {
  return <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
}

const Person = ({src, name, position}) => {
  return <div>
    <img src={src} className="img-fluid img-thumbnail" />
    <p className="fw-bold lh-1">{name}</p>
    <p className="lh-1">{position}</p>
  </div>
}

export default About
