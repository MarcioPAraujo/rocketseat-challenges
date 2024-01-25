const check = (number1,number2) =>{ return number1 === number2 }
const message =(counter,isWrong) => {
    if(isWrong){
        alert(`you're wrong, try again`)
    }else{
        alert(`you got ${counter} tries to guess it`)
    }
}

let randomNUmber = Math.round(Math.random()*10)
let guess

let isWrong = true
let counter=0
while(isWrong){
    guess = prompt(`gues the number between 0 and 10:`)
    guess = Number(guess)
    isWrong = !(check(guess,randomNUmber))
    counter++
    message(counter,isWrong)
}
