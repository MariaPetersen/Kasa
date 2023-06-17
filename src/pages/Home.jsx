import Banner from "../components/Banner/Banner"
import Card from "../components/Card/Card"
import homeBanner from "./../assets/backgrounds/homeBanner.png"
import homes from "./../logements.json"
import "./styles.scss"

function Home() {
  return (
    <div className="home">
      <Banner
        titlePartOne="Chez vous, "
        titlePartTwo="partout et ailleurs"
        style={{
          backgroundImage: `url(${homeBanner})`,
        }}
        className="banner"
      />
      <div className="card--container">
        {homes.map((home) => {
          return (
            <Card
              homeId={`housing/${home.id}`}
              key={home.id}
              title={home.title}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${home.cover})`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
