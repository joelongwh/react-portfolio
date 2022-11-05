import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import './index.scss'
import { useEffect, useState } from "react";
import { portfoliodata } from "../../content_option";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const strArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderPortfolio = () => {
    return (
      <div className="images-container">
        {portfoliodata.map((data, i) => {
          return (
            <div key={i} className="image-box">
              <img src={data.img} alt="" className="portfolio-image" />
              <div className="content">
                <p className="description">{data.description}</p>
                <button
                  className="btn"
                  onClick={() => window.open(data.link)}
                >View</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className='container portfolio-page'>
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strArray}
            index={15}
          />
        </h1>
        <div>{renderPortfolio()}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio