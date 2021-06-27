const OPERATION_DIVISION = 'division'
const OPERATION_ADDITION = 'addition'
const OPERATION_SUBTRACTION = 'subtraction'
const OPERATION_MULTIPLICATION = 'multiplication'
const OPERATION_EQUALS = 'equals'
const OPERATION_SQRT = 'squareroot'
const OPERATION_SQUARE = 'square'
const OPERATION_MOD = 'modulo'
const MAX_INPUT = 10
const ERROR = 'Input is too long!'

let firstNumber = ''
let secondNumber = ''
let operation = null
let commaEnabled = false
let result = document.getElementById('result')
let repeatingOp = null

function setInputNumber(button) {

  if (result.innerText === ERROR) { return }
  if ( tooLong(firstNumber) || tooLong(secondNumber) ) {
    result.innerText = ERROR
    return
  }

  if (!operation) {
    if (firstNumber.length === 0 && button.innerText === '0') { return }
    firstNumber += button.innerText 
    result.innerText = firstNumber
  } else {
    if (secondNumber.length === 0 && button.innerText === '0') { return }
    secondNumber += button.innerText
    result.innerText = secondNumber
  }
}

function tooLong(input) {
  return input.length > MAX_INPUT
}


function setOperator(op) {
  



  if (repeatingOp && repeatingOp !== op) {
    startNewOperation(op)
    repeatingOp = null
    return
  }


  if (firstNumber.length > 0 && secondNumber.length > 0 && operation) {
    switch (operation) {

      case OPERATION_DIVISION:
        firstNumber = (parseFloat(firstNumber) / parseFloat(secondNumber)).toString()
        break;

      case OPERATION_MULTIPLICATION:
        firstNumber = (parseFloat(firstNumber) * parseFloat(secondNumber)).toString()
        break;

      case OPERATION_ADDITION:
        firstNumber = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString()
        break;

      case OPERATION_SUBTRACTION:
        firstNumber = (parseFloat(firstNumber) - parseFloat(secondNumber)).toString()
      break;

      case OPERATION_MOD:
        firstNumber = parseFloat(firstNumber) % parseFloat(secondNumber)
        break;

      case OPERATION_SQUARE:
        firstNumber = 
        break;

      case OPERATION_SQRT:
        firstNumber = 
        break;

      default:
        alert('Weird thing you are doing here..')
    }
    result.innerText = firstNumber
    
  }

  if (op !== OPERATION_EQUALS) {
    startNewOperation(op)
  }

  if (result.innerText === ERROR) { return }
  if ( tooLong(firstNumber) || tooLong(secondNumber) ) {
    result.innerText = ERROR
    return
  }

}

function setCommaEnabled(enabled) {
  if (enabled && !commaEnabled && result.innerText.indexOf('.') === -1 ) {
    result.innerText += '.'
    secondNumber.length === 0 ? firstNumber += '.' : secondNumber += '.'
  } 
  commaEnabled = enabled
}

function startNewOperation(op) {
  operation = op
  secondNumber = ''
  setCommaEnabled(false)
}

function reset() {
  startNewOperation(null)
  firstNumber = ''
  result.innerText = '0'
}
