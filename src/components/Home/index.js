import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-k.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['r', 'i', 's', 't', 'e', 'n','.']
  const jobArray = [
    'I',
    ' ',
    'a',
    'm',
    ' ',
    'a',
    ' ',
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    ' ',
    'i',
    'n',
    ' ',
    't',
    'r',
    'a',
    'i',
    'n',
    'i',
    'n',
    'g',
    '!',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i!</span>
            <br />
            <span className={`${letterClass} _13`}>M</span>
            <span className={`${letterClass} _14`}>y</span>

            <span className={`${letterClass} _15`}></span>
          
            <span className={`${letterClass} _17`}>N</span>
            <span className={`${letterClass} _18`}>a</span>
            <span className={`${letterClass} _19`}>m</span>
            <span className={`${letterClass} _20`}>e</span>

            <span className={`${letterClass} _21`}></span>
           
            <span className={`${letterClass} _23`}>i</span>
            <span className={`${letterClass} _24`}>s</span>
            
            <img
              src={LogoTitle}
              alt="Software Developer in Training"
              // style={{ width: '45px', height: '60px'}}
            />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Software Development Trainee</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home