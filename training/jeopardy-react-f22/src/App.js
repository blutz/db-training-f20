import { useState, useEffect, Fragment } from 'react';
import propTypes from 'prop-types';
import './App.css';

const useJeopardyApi = () => {
  const URL = '//jservice.io/api/random'

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [data, setData] = useState()
  const [shouldRefetch, setShouldRefetch] = useState(true)

  useEffect(() => {
    if(!shouldRefetch) { return }
    setShouldRefetch(false)
    setLoading(true)
    setError(null)
    setData(null)
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        setData(res[0])
      })
      .catch(e => {
        setError(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [shouldRefetch])
  return {loading, error, data, refetch: () => setShouldRefetch(true)}
}

function AnswerChecker({answer, onCorrect, onWrong}) {
  const [shown, setShown] = useState(false)
  function toggleVisibility(e) {
    e.preventDefault()
    setShown(!shown)
  }
  return <div>
    <button onClick={toggleVisibility}>Show/hide answer</button>
    {shown && <div>
      <p>{answer}</p>
      <button onClick={onCorrect}>I got it right!</button>
      <button onClick={onWrong}>I got it wrong :(</button>
    </div>}
  </div>
}
AnswerChecker.propTypes = {
  answer: propTypes.string.isRequired,
  onCorrect: propTypes.func.isRequired,
  onWrong: propTypes.func.isRequired,
}

function App() {
  const [score, setScore] = useState(0)
  const {loading, error, data, refetch} = useJeopardyApi()
  return (
    <div className="App">
      <h1>Let's play Jeopardy!</h1>
      {error && <div>
        <strong>Error: </strong>
        {error?.message ? error.message : JSON.stringify(error)}
      </div>}
      <h2>{loading ? <Fragment>Loading&hellip;</Fragment> : <Fragment>{data?.question} <small>(${data.value})</small></Fragment>}</h2>
      {(!loading && data?.answer) &&
        <AnswerChecker
          answer={data.answer}
          onCorrect={() => {setScore(score+data.value); refetch();}}
          onWrong={() => refetch()}
        />
      }
      <strong>Score: ${score}</strong>
    </div>
  );
}

export default App;
