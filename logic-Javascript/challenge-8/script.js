const addPerson = () =>{
    let standardPhrase = `type the pacient's`
    let person = {
        name:prompt(`${standardPhrase} name `),
        age: prompt(`${standardPhrase} age`),
        weight:prompt(`${standardPhrase} weight`),
        height:prompt(`${standardPhrase} height`)
    }
    return person
}


let people = []

people.push(addPerson())

let dataInfo = document.querySelector('body')
for (let i =0;i<people.length;i++){
    for( let atribute in people[i]){
        dataInfo.innerHTML += `<h1>${atribute}: ${people[i][atribute]}</h1>`
    }
}
