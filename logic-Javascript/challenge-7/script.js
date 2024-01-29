const insertProduct = (item,itemsList) =>{
    itemsList.push(item)
}

const showItems = (itemsList) =>{
    let list = document.querySelector('body')
    if(itemsList){
        let items = itemsList.join(`\n`)
        return list.innerHTML = `<h1>${items}</h1>`
        //console.log(items)
    }else{
       return list.innerHTML = `<h1>there are not items</h1>`
        //console.log(`there aren't any items`)
    }
}

const deleteItem = (item,itemsList) =>{
    let positionToBeDeleted = itemsList.indexOf(item)
    let deletedItem = itemsList.splice(positionToBeDeleted,positionToBeDeleted)
    console.log(deletedItem)
    return deletedItem
}
let message  = document.querySelector('body')
let keep = true
let itemsList = []
while(keep){
    
    let option = prompt(`what do you want do?\n1 - insert item\n2 - see the items\n3 - delete item\n4 - log out`)
    option = Number(option)
    switch(option){
        case 1:
            let item = prompt(`type the item you want add:`)
            insertProduct(item,itemsList)
            break;
        case 2:
            message.innerHTML = showItems(itemsList)
            break;
        case 3:
            let itemToBeDeleted = prompt(`type the item you wnt to delete:`)
            let deletedItem = deleteItem(itemToBeDeleted,itemsList)
            console.log(deletedItem)
            break;
        case 4:
            keep=false
            break;
        default:
            message.innerHTML = `<h1>type a valid option</h1>`
            

    }
    
}