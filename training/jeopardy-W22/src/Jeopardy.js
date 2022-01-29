import { useEffect, useState } from 'react'
import JeopardyQuestion from './JeopardyQuestion'

const URL = '//jservice.io/api/random'

function Jeopardy() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)
  const [score, setScore] = useState(0)

  async function newQuestion() {
    setLoading(true)
    try {
      setData((await (await fetch(URL)).json())[0])
    } catch(e) {
      setError(e.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { newQuestion() }, [])

  function onAnswer(points=0) {
    //window.alert(`you earned ${points} points`)
    setScore(score+points)
    newQuestion()
  }

  return <div>
    {loading && <div className='loading'>Loading&hellip;</div>}
    {error && <div className='error'>Error: {JSON.stringify(error)}</div>}
    {data && <JeopardyQuestion
      key={data.id}
      data={data}
      onCorrect={() => onAnswer(data.value)}
      onWrong={() => onAnswer()}
    />}
    <hr />
    <h4>SCORE: ${score}</h4>
  </div>
}

export default Jeopardy
