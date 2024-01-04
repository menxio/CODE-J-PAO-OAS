/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles.css'
const Navbar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = async () => {
    console.log(query)
    const route = `http://localhost:3000/user/appointments/search?query=${query}`
    try {
      const response = await fetch(route, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        // credentials: 'include',
      })
      const data = await response.json()
      if (data.result === 'OK') {
        console.log(data.payload)
        navigate(`/appointment/${data.payload._id}`)
      } else console.log(data.payload.error)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section id='title'>
        <div className='header'>
          <img
            className='logo'
            src="/img/1200px-Public_Attorney's_Office_(PAO).svg.png"
            alt='Failed to load image.'
          ></img>
          <h2>Republic of the Philippines</h2>
          <h1>Public Attorney's Office</h1>
        </div>
        <div className='navigation'>
          <nav className='navbar navbar-expand-lg navbar-dark'>
            <div className='container-fluid'>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapsibleNavbar'
                aria-controls='collapsibleNavbar'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='collapsibleNavbar'>
                <Link className='navbar-brand' to='/'>
                  PAO
                </Link>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/appointments'>
                      Create Appointment
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' aria-current='page' to='/about'>
                      About PAO
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/faqs'>
                      FAQs
                    </Link>
                  </li>
                </ul>
                <div className='d-flex' role='search'>
                  <input
                    className='form-control me-2'
                    type='search'
                    placeholder='Enter Reference ID'
                    aria-label='Search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  ></input>
                  <button
                    className='btn btn-outline-success'
                    onClick={() => handleSearch()}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Navbar
