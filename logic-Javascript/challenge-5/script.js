const makeList = (listSize) =>{
    let list = []
    let item
    for(let i=0;i<listSize;i++){
        item = prompt(`write the ${i+1}° element` )
        list.push(item)
    }
    return list
}

const showList = (list) =>{
    list.join(', ')
    console.log(list)
}

let listSize = prompt(`how many item sis there in the list?`)
let list = makeList(listSize)
showList(list)