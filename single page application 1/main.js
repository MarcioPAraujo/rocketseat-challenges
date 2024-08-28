import { Router } from './javascript/router.js'

const router = new Router()
router.add("/","/pages/home.html")
router.add("/about","/pages/about.html")
router.add("/contact","/pages/contact.html")
router.add(404 ,"/pages/not-found.html")


/*
let tabs = []
for(let i=0;i<3;i++){
    let nav = document.querySelector("nav").children.item(i)
    nav.addEventListener('click',router.route(Event))
    tabs.push(nav)

}
*/
router.handle()
window.onpopstate = ()=> router.handle()
window.route = () => router.route()
