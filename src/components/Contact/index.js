import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const strArray = ['C', 'o', 'n', 't', 'a', 'c', 't']
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_v0jtpd3',
        'template_xm5mpsc',
        refForm.current,
        'QNxIRmoPlS6CBxfGK'
      )
      .then(
        () => {
          alert('Message sent successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again')
        }
      )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              index={15}
            />
          </h1>
          <p>
            Always happy to have a conversation around tech, web3, fintech, DeFi, blockchain and more!
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject' required />
                </li>
                <li>
                  <textarea name='message' placeholder='Message' required />
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Joel Ong, <br />Singapore <br /> <span>joelong14@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[1.2744425, 103.7974889]} zoom={13}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[1.2744425, 103.7974889]}>
              <Popup>Joel was here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact