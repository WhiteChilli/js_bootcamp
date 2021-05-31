
const ROCK_IMG     = 'rock.jpg'
const PAPER_IMG    = 'paper.jpg'
const SCISSORS_IMG = 'scissors.jpg'

let playerScore = 0
let enemyScore  = 0

function chooseWeapon() {
    let playerWeaponSelect = document.getElementById('playerWeaponSelect')
    let playerChoiceImg = document.getElementById('playerChoiceImg')
    changeImage(playerChoiceImg, playerWeaponSelect.value)
}

function changeImage(img, selectedWeapon) {
    if (selectedWeapon === 'rock') img.src = ROCK_IMG
    else if (selectedWeapon === 'paper') img.src = PAPER_IMG
    else if (selectedWeapon === 'scissors') img.src = SCISSORS_IMG
}

function play() {
    let playerWeapon = document.getElementById('playerWeaponSelect').value
    if (playerWeapon !== 'not_selected') {
        let enemyWeapon = getRandomWeapon()
        let enemyImg = document.getElementById('enemyChoiceImg')
        changeImage(enemyImg, enemyWeapon)

        let fightResult = fight(playerWeapon, enemyWeapon)
        displayFightResult()
        changeScore(fightResult)
    }
}

function getRandomWeapon() {
    let weapons = ['rock', 'paper', 'scissors']
    let randomWeaponIndex = Math.floor(Math.random() * weapons.length)
    return weapons[randomWeaponIndex]
}

function fight(pw, ew) {
    if (pw === 'rock') {
        if (ew === 'rock') return 0
        else if (ew === 'paper') return -1
        else if (ew === 'scissors') return 1
    } else if (pw === 'paper') {
        if (ew === 'rock') return 1
        else if (ew === 'paper') return 0
        else if (ew === 'scissors') return -1
    } else if (pw === 'scissors') {
        if (ew === 'rock') return -1
        else if (ew === 'paper') return 1
        else if (ew === 'scissors') return 0
    }
}

function changeScore(fightResult) {
    if (fightResult === 1) playerScore++
    else if (fightResult === -1) enemyScore++
}

function displayFightResult(fightResult) {
    let msg = ''
    switch(fightResult) {
        case -1: 
            msg = 'You have lost!'
            break
        case 0:
            msg = 'It is a tie!'
            break
        case 1:
            msg = 'You have won!'
            break

        default:
            msg = 'Rock Paper Scissors'
    }

}
