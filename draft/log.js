function findSum(arr) {
  let sum = 0
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i]
  // }  better to use for of loop in this case 

  for (let nr of arr) {
    sum += nr
  }
return sum
} 

console.log(findSum([1, 2, 3])) 

function reverseString(text) {
  let reverseText = ''
  for (let i = -text.length - 1; i >= 0; i--) {
    reverseText += text[i]
  }

}

function sumOfPowers(arr, power) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], power )
  }
  return sum
}


function printResult (a, b) {
  console(a + b)
}

function add(a, b, callback) {
  return a + b
}


let number = [5, 3, 2, 4, 1]

number.sort()


let nrs = [1, 4, 5, 7, 9, 4] 

for (let n of nrs) {
  return n * 2
}


function fibonacci(n) {
  let firstNumber = 0
  let secondNumber = 1

  for (let i = 0; i < n; i++) {
    firstNumber = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = currentNumber
    }
    return currentNumber
}


