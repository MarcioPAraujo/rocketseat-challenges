import { popScreen } from "./popup.js"
import { errorMessage } from "./error.js"

const form = document.querySelector('form')
const fieldWeight = document.querySelector('#weight')
const fieldHeight = document.querySelector('#height')




form.onsubmit = BMICalc

function BMICalc (event){
    
    event.preventDefault()
    const weight = fieldWeight.value
    const height = (fieldHeight.value)/100
    
    const invalidValue = checkValue(weight) || checkValue(height)
    const invalidNumber = isNumberOutOfRange(weight,height)
    if(invalidValue || invalidNumber){
        const message = 'One or both values might be invalid for calculation'
        errorMessage.showError(message)
        return;
        
        
    }else{
        errorMessage.hideError()
        const BMI = (weight/(height**2)).toFixed(2)

        popScreen.resultMessage.innerText = `your BMI ${BMI}`
        popScreen.showBMI()
        fieldHeight.value = ''
        fieldWeight.value = ''
    }
}
 
function checkValue(value){
    return isNaN(value) || value === ''     
}
function isNumberOutOfRange(weight,height){
    let tooSmall = weight <= 0 || height <= 0
    if(tooSmall){
        return tooSmall
    }

    let tooBig = weight > 250 || height > 2.20
    return tooBig
}