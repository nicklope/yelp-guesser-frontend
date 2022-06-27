import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import yelpGuesserLogo from '../images/yelpguesserlogo.png'
import cryCat from '../images/crycat.png'

const Home = () => {
  let navigate = useNavigate()

  const [subtextState, setSubtextState] = useState('Lets goooo!')

  const phraseGenerator = () => {
    let phrases = [
      'Lets gooooooooooooooooo!',
      'No relation to Geoguessr',
      'In full TECHNICOLOR!',
      'Made from meat products',
      'As foretold by Nostradamus',
      'Orange cat supremacy!!!',
      'Now with 50% less 7-Elevens!',
      'Rate your local dog park!',
      'Creative mode is coming soon!',
      'Tavern Cut = Chicago Style',
      'Cat Guesser is a lie!',
      'Apply directly to the forehead',
      'Now with 50% more Taco Bell!',
      'Taste the meat, not the heat',
      'Its a secret to everybody.',
      '"IT JUST WORKS, ALRIGHT?"',
      'Zap to the extreme!',
      '///// Kanye 2024 /////',
      'Styled in pure CSS',
      'Thank you Nghiem!!!'
    ]
    setSubtextState(phrases[parseInt(Math.random() * (phrases.length - 0) + 0)])
  }

  useEffect(() => {
    phraseGenerator()
  }, [])

  return (
    <div className="home">
      <div className="wrapper">
        <div className="logo">
          <img
            id="main-logo-landing"
            src={yelpGuesserLogo}
            alt="yelp guesser"
          />
          <p id="main-logo-subtext">{subtextState}</p>
        </div>
      </div>
      <img id="cry-cat" src={cryCat} onClick={() => navigate('/catguesser')} />
    </div>
  )
}

export default Home
