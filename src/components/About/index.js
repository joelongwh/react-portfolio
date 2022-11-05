import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import './index.scss'
import { useEffect, useState } from "react";

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const strArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              index={15}
            />
          </h1>
          <p>Took a stab at programming in 2020 and never looked back.
            Creating innovative solutions to solve real-world problems has
            given me the motivation to take that leap of faith from graduating
            with a degree in pharmacy to becoming a software engineer. </p>
          <p>I have experience developing full stack web applications using
            Java SpringBoot Framework and React. I am able to develop mobile
            applications with Dart and Flutter. I also have knowledge in building
            CI/CD pipelines using codefresh to deploy applications on OpenShift and AWS EKS.</p>
          <p>What I love about tech is the never-ending innovation and the environment of
            constant learning and self-improvement. I am interested in fintech, DeFi and
            blockchain programming as well.</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About