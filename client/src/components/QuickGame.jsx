import { useState, useEffect } from 'react'
import axios from 'axios'
import HowManyStars from './HowManyStars'
import HowManyDollarSigns from './HowManyDollarSigns'
import HowManyStarsReview from './HowManyStarsReview'
import FinalScore from './FinalScore'
import noStars from '../images/extra_large_0.png'
import oneStar from '../images/extra_large_1.png'
import oneHalfStar from '../images/extra_large_1_half.png'
import twoStars from '../images/extra_large_2.png'
import twoHalfStars from '../images/extra_large_2_half.png'
import threeStars from '../images/extra_large_3.png'
import threeHalfStars from '../images/extra_large_3_half.png'
import fourStars from '../images/extra_large_4.png'
import fourHalfStars from '../images/extra_large_4_half.png'
import fiveStar from '../images/extra_large_5.png'
import noDollars from '../images/new0dollar.PNG'
import oneDollar from '../images/new1dollar.PNG'
import twoDollars from '../images/new2dollar.PNG'
import threeDollars from '../images/new3dollar.PNG'
import fourDollars from '../images/new4dollar.PNG'
import quickPlay from '../images/quicklogo.png'
import getReady from '../images/getready.PNG'
import nextArrow from '../images/arrow.png'
import lock from '../images/lock.png'


const QuickGame = (props) => {
  ////                   ////
  //// State & Variables ////
  ////                   ////


  
  const [review, setReview] = useState(undefined)

  const [reviewRating, setReviewRating] = useState(0)

  const [reviewBoolean, toggleReviewBoolean] = useState(false)

  const [starCount, setStarCount] = useState(noStars)


  const [choice, setChoice] = useState(undefined)

  const [playerChoice, setPlayerChoice] = useState(0)

  const [randomBusiness, setRandomBusiness] = useState(
    parseInt(Math.random() * (50 - 0) + 0)
  )
  const [score, setScore] = useState(0)

  const [flare, setFlare] = useState(undefined)

  const [flareAnimation, setFlareAnimation] = useState('flareAnimationStop')

  const [business, setBusiness] = useState({
    name: '',
    image: '',
    rating: '',
    price: '',
    id: '',
    review: '',
    reviewScore: ''
  })


  const [countDown, setCountDown] = useState(3)

  const [businessStore, setBusinessStore] = useState([])

  ////           ////
  //// Functions ////
  ////           ////


  const getBusinessReview = async (id) => {
    let res = await axios.get(
      `https://yelp-guesser-b.herokuapp.com/businessreviews/${id}`
    )
    let random = parseInt(Math.random() * (1 - 0) + 0)
    console.log(res.data.reviews.reviews[random])
    setReview(res.data.reviews.reviews[random].text)
    setReviewRating(res.data.reviews.reviews[random].rating)
    toggleReviewBoolean(true)
  }

  const setRoundBusiness = async () => {
    setBusiness({
      name: props.businesses[randomBusiness].name,
      image: props.businesses[randomBusiness].image_url,
      rating: props.businesses[randomBusiness].rating,
      price: props.businesses[randomBusiness].price,
      id: props.businesses[randomBusiness].id,
      url: props.businesses[randomBusiness].url,
      review: '',
      reviewRating: ''
    })
    setBusinessStore([...businessStore, business])
    console.log(businessStore)
  }
    

  const checkScore = (playerChoice) => {
    let prevScore = score

    console.log('checking...')

    if (
      playerChoice - business.rating === 0 ||
      business.rating - playerChoice === 0
    ) {
      console.log('here?')

      setScore(prevScore + 100)
      setFlare('PERFECT!')
    }
    if (
      playerChoice - business.rating === 0.5 ||
      business.rating - playerChoice === 0.5
    ) {
      setScore(prevScore + 50)
      setFlare('GREAT')
    }
    if (
      playerChoice - business.rating === 1 ||
      business.rating - playerChoice === 1
    ) {
      setScore(prevScore + 30)
      setFlare('GOOD')
    }
    if (
      playerChoice - business.rating === 1.5 ||
      business.rating - playerChoice === 1.5
    ) {
      setScore(prevScore + 20)
      setFlare('UMM')
    }
    if (
      playerChoice - business.rating === 2 ||
      business.rating - playerChoice === 2
    ) {
      setScore(prevScore + 20)
      setFlare('UMM')
    }
    if (
      playerChoice - business.rating === 2.5 ||
      business.rating - playerChoice === 2.5
    ) {
      setScore(prevScore + 15)
      setFlare('BAD')
    }
    if (
      playerChoice - business.rating === 3 ||
      business.rating - playerChoice === 3
    ) {
      setScore(prevScore + 10)
      setFlare('BAD')
    }
    if (
      playerChoice - business.rating === 3.5 ||
      business.rating - playerChoice === 3.5
    ) {
      setScore(prevScore + 5)
      setFlare('TERRIBLE')
    }
    if (
      playerChoice - business.rating === 4 ||
      business.rating - playerChoice === 4
    ) {
      setScore(prevScore + 1)
      setFlare('TERRIBLE')
    }
    if (
      playerChoice === '$' &&
      playerChoice === props.businesses[randomBusiness].price
    ) {
      setScore(prevScore + 100)
      setFlare('CHEAP :)')
    }
    if (
      playerChoice === '$$' &&
      playerChoice === props.businesses[randomBusiness].price
    ) {
      setScore(prevScore + 100)
      setFlare('DOUBLE DOLLA :)')
    }
    if (
      playerChoice === '$$$' &&
      playerChoice === props.businesses[randomBusiness].price
    ) {
      setScore(prevScore + 100)
      setFlare('FANCY :)')
    }
    if (
      playerChoice === '$$$$' &&
      playerChoice === props.businesses[randomBusiness].price
    ) {
      setScore(prevScore + 100)
      setFlare('PRICEY :)')
    }
    if (
      playerChoice !== props.businesses[randomBusiness].price &&
      playerChoice !== 1 &&
      playerChoice !== 1.5 &&
      playerChoice !== 2 &&
      playerChoice !== 2.5 &&
      playerChoice !== 3 &&
      playerChoice !== 3.5 &&
      playerChoice !== 4 &&
      playerChoice !== 4.5 &&
      playerChoice !== 5
    ) {
      setFlare('lol no')
    }
  }
  const checkReviewScore = (playerChoice) => {
    let prevScore = score
    console.log('checking review score...')
    console.log(
      'player: ' + playerChoice,
      'review rating: ' + reviewRating,
      'prev score: ' + prevScore,

      'flare: ' + flare
    )
    if (
      playerChoice - reviewRating === 0 ||
      reviewRating - playerChoice === 0
    ) {
      setScore(prevScore + 100)
      setFlare('PERFECT!')
    }
    if (
      playerChoice - reviewRating === 0.5 ||
      reviewRating - playerChoice === 0.5
    ) {
      setScore(prevScore + 50)
      setFlare('GREAT')
    }
    if (
      playerChoice - reviewRating === 1 ||
      reviewRating - playerChoice === 1
    ) {
      setScore(prevScore + 30)
      setFlare('GOOD')
    }
    if (
      playerChoice - reviewRating === 1.5 ||
      reviewRating - playerChoice === 1.5
    ) {
      setScore(prevScore + 20)
      setFlare('UMM')
    }
    if (
      playerChoice - reviewRating === 2 ||
      reviewRating - playerChoice === 2
    ) {
      setScore(prevScore + 20)
      setFlare('UMM')
    }
    if (
      playerChoice - reviewRating === 2.5 ||
      reviewRating - playerChoice === 2.5
    ) {
      setScore(prevScore + 15)
      setFlare('BAD')
    }
    if (
      playerChoice - reviewRating === 3 ||
      reviewRating - playerChoice === 3
    ) {
      setScore(prevScore + 10)
      setFlare('BAD')
    }
    if (
      playerChoice - reviewRating === 3.5 ||
      reviewRating - playerChoice === 3.5
    ) {
      setScore(prevScore + 5)
      setFlare('TERRIBLE')
    }
    if (playerChoice - reviewRating === 4 || reviewRating === 4) {
      setScore(prevScore + 1)
      setFlare('GARBAGE')
    }
  }

  const playerChoiceConverter = (choice) => {
    switch (choice) {
      case oneStar:
        setPlayerChoice(1)
        break
      case oneHalfStar:
        setPlayerChoice(1.5)
        break
      case twoStars:
        setPlayerChoice(2)
        break
      case twoHalfStars:
        setPlayerChoice(2.5)
        break
      case threeStars:
        setPlayerChoice(3)
        break
      case threeHalfStars:
        setPlayerChoice(3.5)
        break
      case fourStars:
        setPlayerChoice(4)
        break
      case fourHalfStars:
        setPlayerChoice(4.5)
        break
      case fiveStar:
        setPlayerChoice(5)
        break
      case oneDollar:
        setPlayerChoice('$')
        break
      case twoDollars:
        setPlayerChoice('$$')
        break
      case threeDollars:
        setPlayerChoice('$$$')
        break
      case fourDollars:
        setPlayerChoice('$$$$')
        break
    }
  }
  const setRound = async (start) => {
    props.setStart(start)
    setChoice(undefined)
    setPlayerChoice(undefined)
    setStarCount(noStars)
    setRandomBusiness(parseInt(Math.random() * (50 - 0) + 0))
    if (start !== 'Get Ready!' && start !== 1) {
      if (reviewBoolean) {
        checkReviewScore(playerChoice)
        toggleReviewBoolean(false)
      } else if (!reviewBoolean) {
        checkScore(playerChoice)
      }
    }

    await setRoundBusiness()
  }

  const countDownTimer = async () => {
    setTimeout(() => setCountDown(2), 1000)
    setTimeout(() => setCountDown(1), 2000)
    setTimeout(() => setCountDown(0), 3000)
    setTimeout(() => setRound(1), 3500)
  }

useEffect(()=>{
  toggleReviewBoolean(false)
  setScore(0)
  countDownTimer()
},[])


  ////        ////
  //// Render ////
  ////        ////
  
  switch (props.startState) {
    //  Case 0 //

    case 'Get Ready!':
      return (
        <div id="get-ready">
          <img id="getready-img" src={getReady} />
          <h1>{countDown}</h1>
        </div>
      )

    // Case 1 //

    case 1:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />

            <h1>{score}</h1>
            <img
              id="next-button"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(2)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
        </div>
      )

    // Case 2 //

    case 2:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />

            <h1>{score}</h1>
            <img
              id="next-button"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(3)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
          <h3 id="flare" className={flareAnimation}>
            {flare}
          </h3>
        </div>
      )

    // Case 3 //

    case 3:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />

            <h1>{score}</h1>
            <img
              id="next-button"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(4)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
          <h3 id="flare" className={flareAnimation}>
            {flare}
          </h3>
        </div>
      )

    // Case 4 //

    case 4:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />

            <h1>{score}</h1>
            <img
              id="next-button"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(5)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
          <h3 id="flare" className={flareAnimation}>
            {flare}
          </h3>
        </div>
      )

    // Case 5 //

    case 5:
      return (
        <div>
          <div className="star-button-box">
          <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />

            <h1>{score}</h1>
            <img
              id="next-button"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(6)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
          <h3 id="flare" className={flareAnimation}>
            {flare}
          </h3>
        </div>
      )

    // Case 6 //

    case 6:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStarsReview
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
              getBusinessReview={getBusinessReview}
              review={review}
              setReview={setReview}
              reviewBoolean={reviewBoolean}
              toggleReviewBoolean={toggleReviewBoolean}
            />

            <h1>{score}</h1>
            <img
              id="next-button-review"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(7)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
          <h3 id="flare" className={flareAnimation}>
            {flare}
          </h3>
        </div>
      )

    // Case 7 //

    case 7:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />

            <h1>{score}</h1>
            <img
              id="next-button"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(8)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
          <h3 id="flare" className={flareAnimation}>
            {flare}
          </h3>
        </div>
      )

    // Case 8 //

    case 8:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />

            <h1>{score}</h1>
            <img
              id="next-button"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(9)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
          <h3 id="flare" className={flareAnimation}>
            {flare}
          </h3>
        </div>
      )

    // Case 9 //

    case 9:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />

            <h1>{score}</h1>
            <img
              id="next-button"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(10)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
          <h3 id="flare" className={flareAnimation}>
            {flare}
          </h3>
        </div>
      )

    // Case 10 //

    case 10:
      return (
        <div>
          <div className="star-button-box">
          <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />

            <h1>{score}</h1>
            <img
              id="next-button"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(11)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
          <h3 id="flare" className={flareAnimation}>
            {flare}
          </h3>
        </div>
      )

    // Case 11 //

    case 11:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStars
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
            />

            <h1>{score}</h1>
            <img
              id="next-button"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(12)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
          <h3 id="flare" className={flareAnimation}>
            {flare}
          </h3>
        </div>
      )

    // Case 12 //

    case 12:
      return (
        <div>
          <div className="star-button-box">
            <HowManyStarsReview
              choice={choice}
              setChoice={setChoice}
              starCount={starCount}
              setStarCount={setStarCount}
              business={business}
              playerChoiceConverter={playerChoiceConverter}
              getBusinessReview={getBusinessReview}
              review={review}
              setReview={setReview}
              reviewBoolean={reviewBoolean}
              toggleReviewBoolean={toggleReviewBoolean}
            />

            <h1>{score}</h1>
            <img
              id="next-button-review"
              className="next-arrow"
              src={nextArrow}
              onClick={() => {
                setRound(13)
                setFlareAnimation('flareAnimationGo')
                setTimeout(() => setFlareAnimation('flareAnimationStop'), 1000)
                toggleReviewBoolean(false)
              }}
            />
          </div>
          <h3 id="flare" className={flareAnimation}>
            {flare}
          </h3>
        </div>
      )

    case 13:
      return (
        <div>
          
          <FinalScore
            score={score}
            setRound={setRound}
            setScore={setScore}
            setCountDown={setCountDown}
            businessStore={businessStore}
            user={props.user ? props.user : 'guest'}
            authenticated={props.authenticated ? props.authenticated : 'guest'}
          />
        </div>
      )
      default:
        return (
          <div>
            {/* <FinalScore
              score={score}
              setRound={setRound}
              setScore={setScore}
              setCountDown={setCountDown}
              user={props.user ? props.user : 'guest'}
              authenticated={props.authenticated ? props.authenticated : 'guest'}
            /> */}
          </div>
        )
  }
}
export default QuickGame
