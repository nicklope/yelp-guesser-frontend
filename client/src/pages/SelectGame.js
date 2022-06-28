import { useState } from 'react'
import quickPlay from '../images/quicklogo.png'
import localPlay from '../images/localplay.png'
import globalPlay from '../images/globelogo.webp'
import { useNavigate } from 'react-router-dom'

const SelectGame = () => {
  const [spinClassOne, setSpinClassOne] = useState(false)
  const [spinClassTwo, setSpinClassTwo] = useState(false)
  const [spinClassThree, setSpinClassThree] = useState(false)

  const [textSpinClassOne, setTextSpinClassOne] = useState(false)
  const [textSpinClassTwo, setTextSpinClassTwo] = useState(false)
  const [textSpinClassThree, setTextSpinClassThree] = useState(false)

  const [subtextClassOne, setSubtextClassOne] = useState(false)
  const [subtextClassTwo, setSubtextClassTwo] = useState(false)
  const [subtextClassThree, setSubtextClassThree] = useState(false)

  let navigate = useNavigate()

  return (
    <div id="game-page">
      <div className="game-select">
        <div
          className="gamebox"
          id="gamebox-one"
          onMouseOver={() => (
            setSubtextClassOne(true),
            setSpinClassOne(true),
            setTextSpinClassOne(true)
          )}
          onMouseLeave={() => (
            setSubtextClassOne(false),
            setSpinClassOne(false),
            setTextSpinClassOne(false)
          )}
          onClick={() => {
            navigate('/localplay')
          }}
        >
          <img
            id="local-img"
            className={spinClassOne ? 'spin' : undefined}
            src={localPlay}
          />
          <h1
            className={
              textSpinClassOne ? 'game-page-text-spin' : 'game-page-text'
            }
          >
            Local Play
          </h1>
          <p
            id="local-subtext"
            className={subtextClassOne ? 'appear' : undefined}
          >
            Play with businesses in your backyard!
          </p>
        </div>
        <div
          className="gamebox"
          id="gamebox-two"
          onMouseOver={() => (
            setSubtextClassTwo(true),
            setSpinClassTwo(true),
            setTextSpinClassTwo(true)
          )}
          onMouseLeave={() => (
            setSubtextClassTwo(false),
            setSpinClassTwo(false),
            setTextSpinClassTwo(false)
          )}
          onClick={() => navigate('/quickplay')}
        >
          <img
            id="quick-img"
            className={spinClassTwo ? 'spin' : undefined}
            src={quickPlay}
          />

          <h1
            className={
              textSpinClassTwo ? 'game-page-text-spin' : 'game-page-text'
            }
          >
            Quick Play
          </h1>
          <p
            id="quickplay-subtext"
            className={subtextClassTwo ? 'appear' : undefined}
          >
            Enter a zipcode and play!
          </p>
        </div>
        <div
          className="gamebox"
          id="gamebox-three"
          onMouseOver={() => (
            setSubtextClassThree(true),
            setSpinClassThree(true),
            setTextSpinClassThree(true)
          )}
          onMouseLeave={() => (
            setSubtextClassThree(false),
            setSpinClassThree(false),
            setTextSpinClassThree(false)
          )}
          onClick={() => navigate('/globalplay')}
        >
          <img
            id="globe-img"
            className={spinClassThree ? 'spin' : undefined}
            src={globalPlay}
          />
          <h1
            className={
              textSpinClassThree ? 'game-page-text-spin' : 'game-page-text'
            }
          >
            Global Play
          </h1>
          <p
            id="global-subtext"
            className={subtextClassThree ? 'appear' : undefined}
          >
            Play with businesses from around the world!
          </p>
        </div>
      </div>
    </div>
  )
}

export default SelectGame
