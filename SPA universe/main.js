let pagesLinks = document.querySelectorAll("nav > a")
let listSize = pagesLinks.length
for(let i=0;i<listSize;i++){
    pagesLinks[i].addEventListener("click",loadPage)
}

function loadPage(Event){
   // Event = Event || window.Event
    Event.preventDefault()

}