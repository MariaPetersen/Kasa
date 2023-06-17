import { useEffect, useState } from "react"
import Slideshow from "../components/Slideshow/Slideshow"
import { useParams } from "react-router-dom"
import homes from "./../logements.json"
import Collapse from "../components/Collapse/Collapse"
import starColored from "./../assets/icons/starColored.png"
import starEmpty from "./../assets/icons/starEmpty.png"
import "./styles.scss"

function Housing() {
  const [pictures, setPictures] = useState([])
  const [stars, setStars] = useState([])
  let { id } = useParams()

  useEffect(() => {
    let home = homes.find((home) => home.id === id)
    setPictures(home.pictures)

    const stars = []
    function getStars() {
      for (let i = 0; i < home.rating; i++) {
        stars.push(
          <img
            src={starColored}
            alt="star colored"
            key={`starColored-${i}`}
            className="housing__host--stars--star"
          />
        )
      }
      for (let i = 0; i < 5 - home.rating; i++) {
        stars.push(
          <img
            src={starEmpty}
            alt="star empty"
            key={`starEmpty-${i}`}
            className="housing__host--stars--star"
          />
        )
      }
    }
    getStars()
    setStars(stars)
  }, [id])

  function getHome() {
    let index = homes.findIndex((home) => home.id === id)
    return index
  }

  let thisHome = homes[getHome()]

  return (
    <div className="housing">
      <Slideshow pictures={pictures} />
      <div className="housing__header">
        <div className="housing__info">
          <h1 className="housing__info--title">{thisHome.title}</h1>
          <span className="housing__info--location">{thisHome.location}</span>
          <ul className="housing__tags">
            {thisHome.tags.map((tag, index) => {
              return (
                <li key={`${tag}-${index}`} className="housing__tags--tag">
                  {tag}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="housing__host">
          <div className="housing__host--stars">{stars}</div>
          <div className="housing__host--id">
            <span className="housing__host--id--name">
              {thisHome.host.name}
            </span>
            <img
              src={thisHome.host.picture}
              alt="Hôte"
              className="housing__host--id--picture"
            />
          </div>
        </div>
      </div>
      <div className="housing__collapse">
        <Collapse
          collapseTitle="Description"
          collapseClass="collapse collapse--housing collapse--housing--des"
          collapseTitleClass="collapse--title collapse--title--housing"
          collapseText={thisHome.description}
          collapseTextClass="collapse--text collapse--text--housing"
        />
        <Collapse
          collapseTitle="Equipements"
          collapseClass="collapse collapse--housing collapse--housing--eq"
          collapseTitleClass="collapse--title collapse--title--housing"
          collapseText={thisHome.equipments.map((equipement, index) => {
            return (
              <li
                className="housing__collapse--equipments"
                key={`${equipement}-${index}`}
              >
                {equipement}
              </li>
            )
          })}
          collapseTextClass="collapse--text collapse--text--housing"
        />
      </div>
    </div>
  )
}

export default Housing
