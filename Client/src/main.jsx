import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import RootLayout from './Layouts/RootLayout.jsx'
import Appointments from './Pages/Appointments.jsx'
import About from './Pages/About.jsx'
import Faqs from './Pages/Faqs.jsx'
import Home from './Pages/Home.jsx'
import AppointmentPage from './Pages/AppointmentPage.jsx'
import NotFound from './Pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/appointments',
        element: <Appointments />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/faqs',
        element: <Faqs />,
      },
      {
        path: '/appointment/:id',
        element: <AppointmentPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
  // {
  //   path: '/',
  //   element: <RootLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: '/user',
  //       element: <Userlayout />,
  //       children: [
  //         {
  //           path: 'about',
  //           element: <About />,
  //         },
  //         {
  //           path: 'appointment',
  //           element: <Appointment />,
  //         },
  //         {
  //           path: 'FAQs',
  //           element: <Faqs />,
  //         },
  //       ],
  //     },
  // {
  //   path: '/employee',
  //   element: <EmployeeLayout.jsx />,
  //   children: [],
  // },
  // {
  //   path: '/unauthorized',
  //   element: <Unauthorized />,
  // },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
  // ],
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
