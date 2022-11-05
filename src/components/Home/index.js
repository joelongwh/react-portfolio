import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters"
import ProfilePicture from './ProfilePicture'
import Loader from "react-loaders";
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'J', 'o', 'e', 'l']
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className="name"><AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} /></span>
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22} />
          </h1>
          <h2>Full Stack & DevOps - Java / React / Kubernetes</h2>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <ProfilePicture />
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home