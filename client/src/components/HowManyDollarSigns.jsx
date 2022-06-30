import noDollars from '../images/new0dollar.PNG'
import oneDollar from '../images/new1dollar.PNG'
import twoDollars from '../images/new2dollar.PNG'
import threeDollars from '../images/new3dollar.PNG'
import fourDollars from '../images/new4dollar.PNG'

const HowManyDollarSigns = (props) => {
  const clickDollar = (dollar) => {
    props.setChoice(dollar)
    props.playerChoiceConverter(dollar)
  }



    
  
  return (
    <div>
      <img id="business-image" src={props.business.image} />
      <div id="hmds-title">
        How many $ does {props.business.name} have?
        <img  id='dollar-img' src={props.choice ? props.choice : props.dollarCount} alt="" />
        <div id="dollar-container">
          <div
            onClick={()=>clickDollar(oneDollar)}
            onMouseOver={() => props.setDollarCount(oneDollar)}
            className='dollars'
            id="ds-one"
          >
            
          </div>
          <div
            onClick={()=>clickDollar(twoDollars)}
            onMouseOver={() => props.setDollarCount(twoDollars)}
            className='dollars'
            id="ds-two"
          >
            
          </div>
          <div
            onClick={()=>clickDollar(threeDollars)}
            onMouseOver={() => props.setDollarCount(threeDollars)}
            className='dollars'
            id="ds-three"
          >
            
          </div>
          <div
            onClick={()=>clickDollar(fourDollars)}
            onMouseOver={() => props.setDollarCount(fourDollars)}
            className='dollars'
            id="ds-four"
          >
            
          </div>
        </div>
      </div>
      <h3>{props.flare}</h3>
    </div>
  )
  }

export default HowManyDollarSigns
