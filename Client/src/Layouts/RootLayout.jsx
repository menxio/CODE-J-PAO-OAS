import { Outlet } from 'react-router-dom'
import Navbar from '../Components/navbar'
import '../styles.css'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default RootLayout
