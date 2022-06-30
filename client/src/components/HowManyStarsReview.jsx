import { useEffect } from 'react'
import oneStar from '../images/extra_large_1.png'
import oneHalfStar from '../images/extra_large_1_half.png'
import twoStars from '../images/extra_large_2.png'
import twoHalfStars from '../images/extra_large_2_half.png'
import threeStars from '../images/extra_large_3.png'
import threeHalfStars from '../images/extra_large_3_half.png'
import fourStars from '../images/extra_large_4.png'
import fourHalfStars from '../images/extra_large_4_half.png'
import fiveStar from '../images/extra_large_5.png'
const HowManyStarsReview = (props) => {

  
  
 

  const clickStar = (star) => {
    
    props.setChoice(star)
    props.playerChoiceConverter(star)
  }

useEffect(()=>{
    props.getBusinessReview(props.business.id)}, []
)
  

  return( 
  <div>
    <img id="business-image" src={props.business.image}/>
    <div id='hms-title'>
      <div id='review-container'><h1 id="review-full">{'"'+props.review+'"'}</h1></div>
      <p id ="review-question">How many stars did this review leave? (for {props.business.name})</p>
    <img  id='star-img' src={props.choice ? props.choice : props.starCount} alt="" />
    <div id='star-container'>
      <div onMouseOver={()=> props.setStarCount(oneStar)} onClick={()=>clickStar(oneStar)} className='stars' id='one'></div>
      <div onMouseOver={()=> props.setStarCount(oneStar)}  onClick={()=>clickStar(oneStar)} className='stars' id='one'></div>
      <div onMouseOver={()=> props.setStarCount(oneHalfStar)}  onClick={()=>clickStar(oneHalfStar)} className='stars' id='onehalf'></div>
      <div onMouseOver={()=> props.setStarCount(twoStars)}  onClick={()=>clickStar(twoStars)} className='stars' id='two'></div>
      <div onMouseOver={()=> props.setStarCount(twoHalfStars)}  onClick={()=>clickStar(twoHalfStars)} className='stars' id='twohalf'></div>
      <div onMouseOver={()=> props.setStarCount(threeStars)} onClick={()=>clickStar(threeStars)} className='stars' id='three'></div>
      <div onMouseOver={()=> props.setStarCount(threeHalfStars)} onClick={()=>clickStar(threeHalfStars)} className='stars' id='threehalf'></div>
      <div onMouseOver={()=> props.setStarCount(fourStars)} onClick={()=>clickStar(fourStars)} className='stars' id='four'></div>
      <div onMouseOver={()=> props.setStarCount(fourHalfStars)}  onClick={()=>clickStar(fourHalfStars)} className='stars' id='fourhalf'></div>
      <div onMouseOver={()=> props.setStarCount(fiveStar)} onClick={()=>clickStar(fiveStar)} className='stars' id='five'></div>
    </div>
    </div>
    
    <h3>{props.flare}</h3>
  </div>
  )
}
export default HowManyStarsReview