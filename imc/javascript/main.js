import { popScreen } from "./popup.js"

const form = document.querySelector('form')
const fieldWeight = document.querySelector('#weight')
const fieldHeight = document.querySelector('#height')




form.onsubmit = BMICalc

function BMICalc (event){
    event.preventDefault()
    const weight = fieldWeight.value
    const height = (fieldHeight.value)/100
    
    const invalidValue = checkValue(weight) || checkValue(height)
    if(invalidValue){
        return 'One or both values might be invalid for calculation'
    }

    const BMI = (weight/(height**2)).toFixed(2)

   popScreen.resultMessage.innerText = `your BMI ${BMI}`
   popScreen.showBMI()
   fieldHeight.value = ''
   fieldWeight.value = ''
    
}
 
function checkValue(value){
    return isNaN(value) || value === ''
       
}
