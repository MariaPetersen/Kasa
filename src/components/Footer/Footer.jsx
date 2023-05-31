import logo from "./../../assets/logo/logo-white.png"
import "./styles.scss"

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa" className="logo logo--footer" />
      <div className="credits">© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer
