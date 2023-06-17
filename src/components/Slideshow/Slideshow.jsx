import vector from "./../../assets/icons/slideshowVector.png"
import "./styles.scss"
import { useEffect, useState } from "react"

function Slideshow(pictures) {
  const [imageIndex, setImageIndex] = useState(0)
  const [picturesLength, setPicturesLength] = useState(0)

  useEffect(() => {
    const picturesArray = Object.values(pictures)
    console.log(picturesArray[0])
    setPicturesLength(picturesArray[0].length)
  }, [pictures])

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
  console.log(picturesLength)

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
        className={
          picturesLength === 1
            ? "slideshow__vector--hidden"
            : "slideshow__vector slideshow__vector--left"
        }
        onClick={handlePreviousClick}
      />
      <img
        src={vector}
        alt="Suivant"
        className={
          picturesLength === 1
            ? "slideshow__vector--hidden"
            : "slideshow__vector slideshow__vector--right"
        }
        onClick={handleNextClick}
      />
      <span className="slideshow__pictureCount">
        {imageIndex + 1}/{picturesLength}
      </span>
    </div>
  )
}

export default Slideshow
