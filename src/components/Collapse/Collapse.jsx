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
  function handleCollapseClick() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={collapseClass}>
      <div className={collapseTitleClass} onClick={handleCollapseClick}>
        <h3 className="collapse--heading">{collapseTitle}</h3>
        {isOpen ? (
          <img src={vector} alt="Show text" className="vector vector--open" />
        ) : (
          <img src={vector} alt="Hide text" className="vector vector--closed" />
        )}
      </div>
      {isOpen && <p className={collapseTextClass}>{collapseText}</p>}
    </div>
  )
}

export default Collapse
