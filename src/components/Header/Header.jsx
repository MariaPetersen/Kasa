import { NavLink } from "react-router-dom"
import logo from "./../../assets/logo/logo-red.png"
import "./styles.scss"

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo Kasa" className="logo logo--header" />
      </div>
      <div className="navBar">
        <NavLink to="/" className={"navLink"}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={"navLink"}>
          A Propos
        </NavLink>
      </div>
    </header>
  )
}

export default Header
