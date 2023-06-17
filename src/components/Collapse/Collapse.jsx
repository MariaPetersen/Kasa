import { useState } from "react"
import vector from "./../../assets/icons/Vector.png"
import "./styles.scss"

function Collapse({
  collapseClass,
  collapseTitleClass,
  collapseText,
  collapseTitle,
  collapseTextClass,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isString, setIsString] = useState(false)

  function handleCollapseClick() {
    setIsOpen(!isOpen)
    if (typeof collapseText === "string") {
      setIsString(true)
    } else {
      setIsString(false)
    }
  }

  return (
    <div className={collapseClass}>
      <div className={collapseTitleClass} onClick={handleCollapseClick}>
        <h3 className="collapse--heading">{collapseTitle}</h3>
        <img
          src={vector}
          alt={isOpen ? "Show text" : "Hide text"}
          className={isOpen ? "vector vector--open" : "vector vector--closed"}
        />
      </div>
      {isOpen &&
        (isString ? (
          <p className={collapseTextClass}>{collapseText}</p>
        ) : (
          <ul className={collapseTextClass}>{collapseText}</ul>
        ))}
    </div>
  )
}

export default Collapse
