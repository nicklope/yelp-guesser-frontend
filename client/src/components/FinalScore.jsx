

const FinalScore = (props) => {

  
  return (
    <div id="finalscore-page">
      <h1>{props.score}</h1>
      <div id="business-card-container">
        {props.businessStore.map((business)=> (
          <div id="business-card">
            <a href={business.url}>
          <img src={business.image} id="business-card-image"/>
          </a>
          <h1 id="businesss-card-title">{business.name}</h1>
          
          </div>
        ))}
      </div>
    </div>
  )
}
export default FinalScore