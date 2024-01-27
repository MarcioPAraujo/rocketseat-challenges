const insertProduct = (item,itemsList) =>{
    itemsList.push(item)
}

const showItems = (itemsList) =>{
    let items = itemsList.join(`\n`)
    let list = document.querySelector('body')
    list.innerHTML(`<h1>${items}</h1>`)
}

const deleteItem = (item,itemsList) =>{
    let positionToBeDeleted = itemsList.indexOf(item)
    let deletedItem = itemsList.splice(positionToBeDeleted,positionToBeDeleted)
    return deletedItem
}
let keep = true
let itemsList = []
while(keep){
    let option = prompt(`what do you want do?\n1 - insert item\n2 - see the items\n3 - delete item\n4 - log out`)
    switch(option){
        case 1:
            let item = prompt(`type the item you want add:`)
            insertProduct(item,itemsList)
            break;
        case 2:
            showItems(itemsList)
            break;
        case 3:
            let itemToBeDeleted = prompt(`type the item you wnt to delete:`)
            let deletedItem = deleteItem(itemToBeDeleted,itemsList)
            
    }
    
}