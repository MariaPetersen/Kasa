import useMobile from "../../utils/hooks/useMobile"
import "./styles.scss"

function Banner(props) {
  const isMobile = useMobile()
  return (
    <div className={props.className} style={props.style}>
      {isMobile ? (
        <h1 className="bannerText">
          {props?.titlePartOne}
          <br />
          {props?.titlePartTwo}
        </h1>
      ) : (
        <h1 className="bannerText">
          {props?.titlePartOne + "" + props?.titlePartTwo}
        </h1>
      )}
    </div>
  )
}

export default Banner
