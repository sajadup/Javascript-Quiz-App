const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
let countRightAnswers = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  countRightAnswers = 0;
}

function showQuestions(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function setNextQuestion() {
  resetState()
  showQuestions(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } 
  else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }

  if (selectedButton.dataset = correct) {
    countRightAnswers++;
    console.log(countRightAnswers)
  } 
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } 
  else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The first mechanical computer designed by Charles Babbage was called',
    answers: [
      { text: 'Calculator', correct: false },
      { text: 'Abacus', correct: false },
      { text: 'Analytical Engine', correct: true },
      { text: 'Processor', correct: false }
    ] 
  },

  {
    question: 'The World Largest desert is',
    answers: [
      { text: 'Sahara', correct: true },
      { text: 'Sonoran', correct: false },
      { text: 'Kalahari', correct: false },
      { text: 'Thar', correct: false }
    ]
  },

  {
    question: 'What is the primary requisite of a good computer programmer',
    answers: [
      { text: 'Mathematical', correct: false },
      { text: 'Logical mind', correct: true },
      { text: 'Artistic mind', correct: false },
      { text: 'Scientific knowledge', correct: false }
    ]
  },

  {
    question: 'The hottest planet in the solar system',
    answers: [
      { text: 'Jupiter', correct: false },
      { text: 'Mars', correct: false },
      { text: 'Mercury', correct: false },
      { text: 'Venus', correct: true }
    ]
  },

  {
    question: 'ROM is composed of',
    answers: [
      { text: 'Magnetic cores', correct: false },
      { text: 'Floppy disks', correct: false },
      { text: 'Photoelectric cells', correct: true },
      { text: 'Microprocessors', correct: false }
    ]
  }
]

