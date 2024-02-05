let initialScreen = document.querySelector('#initial-screen')
let resultScreen = document.querySelector('#result-screen')
const buttonTry = document.querySelector('#buttonTry')
const buttonAgain = document.querySelector('#buttonAgain')

let generateRandomNumber = () => Math.round(Math.random()*10)
let randomNumber = generateRandomNumber()
let counter=1


const tryGuessTheNumber = (event)=>{
    event.preventDefault()
    
    let userNumber = document.querySelector('#guessed-number')
    
    let isRightGuess = Number(userNumber.value) === randomNumber
    
    if(isRightGuess){
        toggleScreen()
        
        let winMessaage = resultScreen.querySelector('h1')
        winMessaage.innerText = `You guessed in ${counter} tries`

    }else{
        document.querySelector('input').style.border = '1px solid red'
    }
    
    counter++
}
const playAgain = () =>{
    counter = 1
    randomNumber = generateRandomNumber()
    
    toggleScreen()
}
const toggleScreen = () =>{
    initialScreen.classList.toggle('hide')
        
    resultScreen.classList.toggle('hide')
}
const enterPressed = (event) =>{
    let pressed = event.key == 'Enter'
    let mainScreenHided = initialScreen.classList.contains('hide')
    
    if(pressed && mainScreenHided){
        playAgain()
    }

}


buttonTry.addEventListener('click',tryGuessTheNumber)
buttonAgain.addEventListener('click',playAgain)
document.addEventListener('keydown',enterPressed)