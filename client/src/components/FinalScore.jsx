import { useState, useEffect } from "react"
import { Stack } from "@mui/material"

const FinalScore = (props) => {

  useEffect(()=>{
    console.log("hello world")
  },[])

  
  return (
    <div>
      {props.businessStore.map((business)=> (
        <h1>{business.name}</h1>
      ))}
    </div>
  )
}
export default FinalScore