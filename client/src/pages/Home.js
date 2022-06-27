import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import hotGuessLogo from '../images/hot-guesses.png'
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
      <div className="carousel">
        <div className="img-wrapper">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fexps28800_UG143377D12_18_1b_RMS.jpg&f=1&nofb=1"
            alt="burger"
          ></img>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.history.com%2F.image%2Ft_share%2FMTU4NTE1Nzg2MDcwMTA3Mzk0%2Fbeer-oldest.jpg&f=1&nofb=1"
            alt="bars"
          ></img>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnomtasticfoods.net%2Fwp-content%2Fuploads%2F2017%2F10%2FThe-Baked-Bear-15-1440x1800.jpg&f=1&nofb=1"
            alt="ice cream"
          ></img>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcok.net%2Fwp-content%2Fuploads%2F2018%2F07%2FIMG_20180613_150406_086-1024x1024.jpg&f=1&nofb=1"
            alt="vegan"
          ></img>
        </div>
      </div>

      <img id="hot-guess-img" src={hotGuessLogo} alt="hot guesses" />
      <img id="cry-cat" src={cryCat} onClick={() => navigate('/catguesser')} />
    </div>
  )
}

export default Home
