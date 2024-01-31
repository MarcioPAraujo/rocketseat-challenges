const allOperations = {
    numberOne : Number(prompt(`type the first number:`)),
    secondNumber : Number(prompt(`type the second number:`)),
    sum: function(){return this.numberOne + this.secondNumber},
    subtraction: function (){return this.numberOne - this.secondNumber},
    multiplication: function () {return this.numberOne * this.secondNumber},
    division: function () {return this.numberOne / this.secondNumber},
    module: function () {return this.numberOne % this.secondNumber}
}
let standardMessage = `${allOperations.numberOne} and ${allOperations.secondNumber} is `
alert(`sum of ${standardMessage}${allOperations.sum()}`)
alert(`subtraction of ${standardMessage}${allOperations.subtraction()}`)
alert(`division of ${standardMessage}${allOperations.division()}`)
alert(`multipllication of ${standardMessage}${allOperations.multiplication()}`)
alert(`module of ${standardMessage}${allOperations.module()}`)
allOperations.numberOne === allOperations.secondNumber? alert(`they're equal`): alert(`they're different`)
