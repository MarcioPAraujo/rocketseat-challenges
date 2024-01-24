let number1 = prompt("type a number")
let invalidOperation = true
let operation
while(invalidOperation){
 operation = prompt("type the operation:\n1 - sum\n2 - subtraction\n3 - multiplication\n4 - division")
invalidOperation = operation<0 || operation>5
}
let total;
let number2 = prompt("type the other number")
switch(Number(operation)){
    case 1: total = Number(number1) + Number(number2); break;
    case 2: total = Number(number1) - Number(number2); break;
    case 3: total = Number(number1) * Number(number2); break;
    case 4: total = Number(number1) / Number(number2); break;
}
console.log(total)
let head = document.querySelector('h1')
head.innerHTML = `${total}`