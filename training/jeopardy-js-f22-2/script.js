const URL = '//jservice.io/api/random'

const questionEl = document.querySelector('#question')
const answerEl = document.querySelector('#answer')
const answerContainerEl = document.querySelector('#answerContainer')
const showHideEl = document.querySelector('#showHide')
const correctButtonEl = document.querySelector('#correctButton')
const wrongButtonEl = document.querySelector('#wrongButton')
const scoreEl = document.querySelector('#score')
showHideEl.addEventListener('click', () => {
  if(answerContainerEl.style.visibility === 'visible') {
    answerContainerEl.style.visibility = 'hidden'
  } else {
    answerContainerEl.style.visibility = 'visible'
  }
})

let score = 0

function updateScore() {
  scoreEl.textContent = `$${score}`
}

async function getQuestion() {
  answerContainerEl.style.visibility = 'hidden'
  questionEl.textContent = "Loading"
  answerEl.textContent = "Loading"
  const data = (await (await fetch(URL)).json())[0]
  questionEl.textContent = data.question
  answerEl.textContent = data.answer
  correctButton.addEventListener('click', () => {
    score += data.value
    updateScore()
    getQuestion()
  })
  wrongButton.addEventListener('click', () => {
    score -= data.value
    updateScore()
    getQuestion()
  })
}

getQuestion()
