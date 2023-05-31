import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import "./../utils/styles/styles.scss"

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
