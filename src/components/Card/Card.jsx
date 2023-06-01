import useMobile from "../../utils/hooks/useMobile"
import { Link } from "react-router-dom"
import "./styles.scss"

function Card(props) {
  const isMobile = useMobile()

  return (
    <Link
      to={props.homeId}
      className={isMobile ? "card card--mobile" : "card card--desktop"}
      style={props.style}
    >
      <h3 className="cardTitle">{props.title}</h3>
    </Link>
  )
}

export default Card
