import quickPlay from '../images/quicklogo.png'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Lock from '@mui/icons-material/Lock'
import LockOpen from '@mui/icons-material/LockOpen'
import TextField from '@mui/material/TextField'
const QuickPlay = () => {
  return (
    <div>
      <div className="start-state-box">
        <img src={quickPlay} />
        <TextField label="ZIP CODE" />
        <Checkbox
          icon={<LockOpen />}
          checkedIcon={<Lock />}
          size="large"
          sx={{
            fontSize: '22px'
          }}
        />
        <Button
          // disabled={businesses.length > 1 ? false : true}
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
      </div>
    </div>
  )
}

export default QuickPlay
