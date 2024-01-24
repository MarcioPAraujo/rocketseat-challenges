const calcAverage = (grades=[]) =>{
    let average = 0
    let sum=0
    for(let currentGrade of grades){
        sum+=currentGrade
    }
    average=sum/grades.length
    return average.toFixed(2)
}

const insertGrades = (numberOfGrades) =>{
    let grades = []
    let numberAux
    for(let i=0;i<numberOfGrades;i++){
        numberAux = prompt(`type the ${i+1}° grade`)
        grades[i] = Number(numberAux)
    }
    return grades    

}
const showMessage = (name,average) =>{
    let message = document.querySelector('body')
    let hePassed = average>7
    if(hePassed){
        message.innerHTML = `<h1> Congratulation ${name} you have passed with an average ${average}</h1>`
    }else{
        message.innerHTML = `<h1> Sorry ${name} you haven't passed, your average ${average}</h1>` 
    }
}
let studentName = prompt(`what is your name?`)
let grades = insertGrades(3)
let average = calcAverage(grades)
showMessage(studentName,average)


