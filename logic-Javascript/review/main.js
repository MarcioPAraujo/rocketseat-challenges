const whatTypeIsIt = (dataType,value) =>{ return typeof value === dataType}

const returEvenOrOdd = (number) =>{
    let isEven = number%2 === 0
    if(isEven){
        alert(`the ${number} is a even number`)
    }
    else{
        alert(`the ${number} is a odd number`)
    }
}



let random = Number(prompt(`type a number`))
let check = whatTypeIsIt("number",random)
    if(check){
        alert(`it's a number`)
    }else{
        alert(`it's not a number`)
    }


let rando = prompt(`type a word`)
check = whatTypeIsIt("string",rando)
    if(check){
        alert(`it's a string`)
    }else{
        alert(`it's not a string`)
    }


let andom = Boolean(prompt(`type a boolean`))
check = whatTypeIsIt("boolean",andom)
    if(check){
        alert(`it's a boolean`)
    }else{
        alert(`it's not a boolean`)
    }

alert(`hello and welcome`)
let number1 = Number(prompt(`type a number`))
let number2 = Number(prompt(`type another number`))
alert(`sum: ${number1 + number2}`)

number1 = Number(prompt(`type a number`))
number2 = Number(prompt(`type another number`))
alert(`sum: ${number1 - number2}`)

number1 = Number(prompt(`type a number`))
number2 = Number(prompt(`type another number`))
alert(`sum: ${number1 * number2}`)

number1 = Number(prompt(`type a number`))
number2 = Number(prompt(`type another number`))
alert(`sum: ${number1 / number2}`)