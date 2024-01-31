const addStudent = () =>{
    return student = {
        name: prompt(`insert your name`),
        grade1: Number(prompt(`insert your first grade`)),
        grade2: Number(prompt(`insert your second grade`)),
        average: function(){return (this.grade1 + this.grade2)/2}
    
    }
}
const showAverages = (students) => {
    let message = []
    let emptyList = students.length===0
    if(emptyList){
        alert(`empty list`)
    }else{
        for(let student of students){
            message.push(`Name: ${student.name} Average: ${student.average()}`)
        }
        alert(`${message.join(`\n`)}`)
        
    }
}
let studentsList = []

let keep = true
let option

while(keep){
    option = Number(prompt(`1 - add student\n2 - see averages\n 3 - quit`))

    switch(option){
        case 1:
            studentsList.push(addStudent())
            break
        case 2:
            showAverages(studentsList)
            break
        case 3:
            keep = false
            break
        default:
            alert(`invalid option`)
    }
}