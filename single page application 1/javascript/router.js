export class Router{
    routes = {}

    add(routName,page){
        this.routes[routName] = page
    }

    route (Event){
        Event = Event || window.Event
        Event.preventDefault()
        window.history.pushState({},"",Event.target.href)
        this.handle()
    }
    handle(){
        let {pathname} = window.location // pegando a url
        const route = this.routes[pathname] || this.routes[404] // colocando a url dentro de uma variavel
        console.log(route)
        fetch(route)// buscar a url 
        .then(data => data.text())
        .then(html => document.querySelector('#content').innerHTML = html)
    }
}