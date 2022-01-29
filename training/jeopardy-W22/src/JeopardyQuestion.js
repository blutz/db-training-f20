import PropTypes from 'prop-types'
import JeopardyAnswer from './JeopardyAnswer'

function JeopardyQuestion({data, onCorrect, onWrong}) {
  return <div>
    <h2>{data.question}</h2>
    <JeopardyAnswer answer={data.answer} onCorrect={onCorrect} onWrong={onWrong} />
  </div>
}

JeopardyQuestion.propTypes = {
  data: PropTypes.object.isRequired,
  onCorrect: PropTypes.func.isRequired,
  onWrong: PropTypes.func.isRequired,
}

export default JeopardyQuestion

