const addPatient = () =>{
    let standardMessage = `type the patient's `
    let patient={
        name: prompt(`${standardMessage} name`),
        age:prompt(`${standardMessage} age`),
        weight:Number(prompt(`${standardMessage} weight`)),
        height:Number(prompt(`${standardMessage} height`))/100,
        calcIMC: function () {
            return (this.weight/(this.height**2))
        }
        
    }
    return patient
}
let listOfPatients = []

listOfPatients.push(addPatient())

for(let patientIMC of listOfPatients){
    console.log(patientIMC.calcIMC().toFixed(2))
}