import { useState, useEffect } from 'react'
import axios from 'axios'
import quickPlay from '../images/quicklogo.png'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Lock from '@mui/icons-material/Lock'
import LockOpen from '@mui/icons-material/LockOpen'
import TextField from '@mui/material/TextField'
import { Box, Stack } from '@mui/material'

const QuickPlay = () => {
  const [businesses, setBusinesses] = useState([])
  const [formValue, setFormValue] = useState(0)
  const [countDown, setCountDown] = useState(3)
  const [startState, setStart] = useState(0)

  const getBusinesses = async (zipCode) => {
    let res = await axios.get(`http://localhost:3001/businesses/${zipCode}`)
    console.log(res.data.businesses)
    setBusinesses(res.data.businesses)
  }

  const handleChange = (event) => {
    const { value } = event.target
    setFormValue(value)
  }

  return (
    <Box>
      <Stack className="start-state-box">
        <img src={quickPlay} />
        <TextField label="ZIP CODE" onChange={handleChange} />
        <Checkbox
          icon={<LockOpen />}
          checkedIcon={<Lock />}
          size="large"
          onClick={() => getBusinesses(formValue)}
          sx={{
            fontSize: '22px'
          }}
        />
        <Button
          disabled={businesses.length > 1 ? false : true}
          id="next-button"
          // onClick={() => {
          //   setStart('Get Ready!')
          //   toggleReviewBoolean(false)
          //   setScore(0)
          //   countDownTimer()
          // }}
        >
          START
        </Button>
      </Stack>
    </Box>
  )
}

export default QuickPlay
