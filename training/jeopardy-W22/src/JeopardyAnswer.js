import PropTypes from 'prop-types'
import { useState } from 'react'

function JeopardyAnswer({answer, onCorrect, onWrong}) {
  const [shown, setShown] = useState(false)
  if(shown) {
    return <div>
      <h2 dangerouslySetInnerHTML={{__html: answer}}></h2>
      <a href='#' onClick={onCorrect}>I got it correct! 🎉</a> • <a href='#' onClick={onWrong}>I got it wrong 😭</a>
    </div>
  } else {
    return <div onClick={() => setShown(true)}>(show answer)</div>
  }
}

JeopardyAnswer.propTypes = {
  answer: PropTypes.string.isRequired,
  onCorrect: PropTypes.func.isRequired,
  onWrong: PropTypes.func.isRequired,
}

export default JeopardyAnswer
