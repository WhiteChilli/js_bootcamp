const AVAILABLE_wordToGuessS = ['qualification', 'reactor', 'electricity', 'japan', 'breeze', 'sakura']

const KEYBOARD_TOP = 'QWERTYUIOP'
const KEYBOARD_MID = 'ASDFGHJKL'
const KEYBOARD_BOT = 'ZXCVBNM'

let wordToGuess = null;

window.onload = function() {
  play();
}

function play() {
  wordToGuess = generateRandomwordToGuess().toUpperCase()
  let mid = document.getElementById('mid')
  displayGuesswordToGuess()
  displayVirtualKeyboard()
}

function generateRandomwordToGuess() {
  let ri = Math.floor(Math.random() * AVAILABLE_wordToGuessS.length)
  return AVAILABLE_wordToGuessS[ri]
}

function displayGuesswordToGuess() {
  let mid = document.getElementById('mid')

  let middleLetters = document.createElement('div')

  middleLetters.className = 'guessWord'
  mid.appendChild(middleLetters)

  for (let i = 0; i < wordToGuess.length; i++) {
    let emptyLetter = document.createElement('div')
    emptyLetter.className = 'letterContainer'
    middleLetters.appendChild(emptyLetter);
  }

  makeFirstAndLastVisible(middleLetters)
}

function makeFirstAndLastVisible(middleLetters) {
  let letters = middleLetters.children
  letters[0].innerText = wordToGuess[0]
  letters[letters.length - 1].innerText = wordToGuess[wordToGuess.length - 1] 
}

function displayVirtualKeyboard() {
  let keyboard = document.createElement('div')
  let keyboardTop = document.createElement('div')
  let keyboardMid = document.createElement('div')
  let keyboardBot = document.createElement('div')

  let keyboardRows = [keyboardTop, keyboardMid, keyboardBot]

  for (kbp of keyboardRows) {
    keyboard.appendChild(kbp)
    kbp.className = 'keyboardRow'
  }

  keyboard.append(keyboardTop)
  keyboard.append(keyboardMid)
  keyboard.append(keyboardBot)

  let bot = document.getElementById('bott')
  bot.appendChild(keyboard)


  for (const character of KEYBOARD_TOP) {
    let letterContainer = document.createElement('div')
    letterContainer.className = 'letterContainer' 
    letterContainer.className = 'keyboardLetter'
    letterContainer.innerText = character
    keyboardTop.appendChild(letterContainer)
  }

  for (const character of KEYBOARD_MID) {
    let letterContainer = document.createElement('div')
    letterContainer.className = 'letterContainer' 
    letterContainer.className = 'keyboardLetter'
    letterContainer.innerText = character
    keyboardMid.appendChild(letterContainer)
  }

  for (const character of KEYBOARD_BOT) {
    let letterContainer = document.createElement('div')
    letterContainer.className = 'letterContainer' 
    letterContainer.className = 'keyboardLetter'
    letterContainer.innerText = character
    keyboardBot.appendChild(letterContainer)
  }

}


function displayKeboardRow(keyboardContainer, keyBoardRowLetters) {

    keyboardRowContainer = document.createElement('div')

  for (const character of keyBoardRowLetters) {
    let letterContainer = document.createElement('div')
    letterContainer.className = 'letterContainer' 
    letterContainer.className = 'keyboardLetter'
    letterContainer.innerText = character
    keyboardRowContainer.appendChild(letterContainer)
  }
  keyboardContainer.appendChild(keyboardRowContainer)
}