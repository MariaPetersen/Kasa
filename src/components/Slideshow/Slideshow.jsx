import vector from "./../../assets/icons/slideshowVector.png"
import { useParams } from "react-router-dom"
import homes from "./../../logements.json"
import "./styles.scss"
import { useState } from "react"

function Slideshow(pictures) {
  const [imageIndex, setImageIndex] = useState(0)

  function handlePreviousClick() {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1)
    } else {
      setImageIndex(picturesArray[0].length - 1)
    }
  }

  function handleNextClick() {
    if (picturesArray[0].length - 1 > imageIndex) {
      setImageIndex(imageIndex + 1)
    } else {
      setImageIndex(0)
    }
  }

  const picturesArray = Object.values(pictures)

  return (
    <div
      className="slideshow"
      style={{
        backgroundImage: `url(${picturesArray[0][imageIndex]})`,
      }}
    >
      <img
        src={vector}
        alt="Précédent"
        className="slideshow__vector slideshow__vector--left"
        onClick={handlePreviousClick}
      />
      <img
        src={vector}
        alt="Suivant"
        className="slideshow__vector slideshow__vector--right"
        onClick={handleNextClick}
      />
    </div>
  )
}

export default Slideshow
