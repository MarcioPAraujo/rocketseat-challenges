let tabs = []
for(let i=0;i<3;i++){
    let nav = document.querySelector("nav").children.item(i)
    tabs.push(nav)
    nav.addEventListener('click',(Event)=>{
        Event = Event || window.Event
        Event.preventDefault()
    })

}