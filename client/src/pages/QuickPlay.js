import quickPlay from '../images/quicklogo.png'

const QuickPlay = () => {
  return (
    <div>
      <div className="start-state-box">
        <img src={quickPlay} />
        <h3>ENTER A ZIPCODE</h3>
        <form>
          <input name="zip" id="zip" />
        </form>

        <button
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
        </button>
      </div>
    </div>
  )
}

export default QuickPlay
