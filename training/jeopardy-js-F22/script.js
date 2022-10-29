function jeopardy() {
  const QUESTION_URL = '//jservice.io/api/random'

  const questionElement = document.querySelector('#question')
  const answerElement = document.querySelector('#answer')
  const answerTextElement = document.querySelector('#answerText')
  const answerToggle = document.querySelector('#answerToggle')
  const correctButton = document.querySelector('#answerCorrect')
  const wrongButton = document.querySelector('#answerWrong')
  const scoreElement = document.querySelector('#score')

  let score = 0
  let q

  function setError(e) {
    console.error(e)
    questionElement.textContent = 'Error: question could not be loaded'
  }

  function setQuestion(question) {
    q = question
    questionElement.textContent = q.question
    answerTextElement.textContent = q.answer
  }

  async function getQuestion() {
    hideAnswer()
    try {
      const question = (await (await fetch(QUESTION_URL)).json())[0]
      setQuestion(question)
    } catch(e) { setError() }
  }

  function hideAnswer() {
    answerElement.style.visibility = 'hidden'
  }

  function setHandlers() {
    answerElement.style.visibility = 'hidden'
    answerToggle.addEventListener('click', e => {
      e.preventDefault()
      if(answerElement.style.visibility === 'hidden') {
        answerElement.style.visibility = 'visible'
      } else {
        answerElement.style.visibility = 'hidden'
      }
    })
    correctButton.addEventListener('click', () => {
      score += q.value
      scoreElement.textContent = `$${score}`
      getQuestion()
    })
    wrongButton.addEventListener('click', () => {
      getQuestion()
    })
  }

  setHandlers()
  getQuestion()
}

jeopardy()
