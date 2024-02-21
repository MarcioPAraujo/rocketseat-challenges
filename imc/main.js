const form = document.querySelector('form')
const fieldWeight = document.querySelector('#weight')
const fieldHeight = document.querySelector('#height')

const resultMessage = document.querySelector('#result h1')
const resultScreen = document.querySelector('main > div')
const buttonClose = document.querySelector('#close')


form.onsubmit = BMICalc

function BMICalc (event){
    event.preventDefault()
    const weight = fieldWeight.value
    const height = (fieldHeight.value)/100
    //console.log(resultScreen.innerHTML)
    const BMI = (weight/(height**2)).toFixed(2)

    showBMI(BMI)
    
}
function showBMI (BMIValue){
    resultScreen.classList.remove('hided')
    resultMessage.innerText = `Your BMi is ${BMIValue}`
}
const closePopUp = ()=>{
    resultScreen.classList.add('hided')
    fieldHeight.value = ''
    fieldWeight.value = ''
}

buttonClose.addEventListener('click',closePopUp)

