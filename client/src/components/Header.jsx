import { Link } from 'react-router-dom'
import { useState } from 'react'
import yelpGuesserLogo from '../images/yelpguesserlogo.png'
import playGameLogo from '../images/gamecontroller.png'
import leaderBoard from '../images/leaderboard.png'
import questionMark from '../images/questionmark.png'
import strawberry from '../images/strawberry.png'
import pear from '../images/pear.png'
import orange from '../images/orange.png'


const Header = (props) => {
  
  const [palette, setPalette] = useState('navBarRed')
  
  return (

    <header>

      <nav className={palette}>
        <div id="navleft-box">
          <div className="nav">
            <Link to="/">
              <img id="nav-logo" src={yelpGuesserLogo} alt="yelp guesser" />
            </Link>
          </div>
          <div className="nav">
            <Link to="/quickplay">
              <img id="nav-gamelogo" src={playGameLogo} alt="yelp guesser" />
            </Link>
          </div>
          <div className="nav">
            <Link to="/scores">
              <img id="nav-scorelogo" src={leaderBoard} alt="yelp guesser"/>
            </Link>
          </div>
        </div>
        <div id="navright-box">
          <div className="nav" id="nav-username">
            <Link className='login-text' to={'/login'}>
              Login
            </Link>
          </div>
          <div className='nav' id="fruit">
            <div className="accordian">
              <img id="strawberry"src={strawberry} alt='strawberry' onClick={()=> setPalette('navBarRed')}/>
              <img id="pear" src={pear} alt='pear' onClick={()=> setPalette('navBarGreen')}/>
              <img id="orange" src={orange} alt='orange' onClick={()=> setPalette('navBarOrange')}/>
            </div>
          </div>

          <div className="nav">
            <Link to="/About">
              <img id="nav-aboutlogo" src={questionMark} alt="yelp guesser" />
            </Link>
          </div>
        </div>
      </nav>
 
    </header>
  )
}

export default Header
