const buttonTry = document.querySelector('[data-button="try"]')
const buttonRestart = document.querySelector('[data-button="restart"]')
const sceneStart = document.querySelector('[data-start]')
const sceneEnd = document.querySelector('[data-end]')
const spanAttempts = document.querySelector('[data-attempts]')
const randomNumber = Math.round(Math.random() * 10)
let attempts = 1

function handleClick(event) {
  event.preventDefault()

  const number = document.querySelector('[data-number]')

  if (+number.value == randomNumber) {
    toggleScene()
    spanAttempts.innerText = attempts
  }

  number.value = ''
  attempts++
}

function toggleScene() {
  sceneStart.classList.toggle('hidden')
  sceneEnd.classList.toggle('hidden')
}

buttonTry.addEventListener('click', handleClick)
buttonRestart.addEventListener('click', () => {
  toggleScene()
  randomNumber = Math.round(Math.random() * 10)
  attempts = 1
})