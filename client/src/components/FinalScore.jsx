import { useState, useEffect } from "react"
import { Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"

const FinalScore = (props) => {
  const navigate = useNavigate()
  
  return (
    <div>
      {props.businessStore.map((business)=> (
        <div>
          <a href={business.url}>
        <img src={business.image} />
        </a>
        <h1>{business.name}</h1>
        <h2>{business.rating}</h2>
        </div>
      ))}
    </div>
  )
}
export default FinalScore