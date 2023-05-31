import { Link } from "react-router-dom"

function Error() {
  return (
    <div className="error__container">
      <p className="error">404</p>
      <p className="error__message">
        Oups! La page que vous demander n'existe pas.
      </p>
      <Link className="error__link" to="/">
        Retour vers la page d'accueil
      </Link>
    </div>
  )
}

export default Error
