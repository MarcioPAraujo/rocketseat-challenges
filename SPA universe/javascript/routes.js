class Router{
    routes = {}
    emptyTag = document.querySelector("#content")
    add(routeName, page){
        this.routes[routeName] = page
    }

    loadContent(Event){
        Event.preventDefault()
        window.history.pushState({},"",EventTarget.href)
        this.callPage()
    }

    callPage(){
        let {pathname} = window.location
        const route = this.routes[pathname]
        fetch(route)
        .then(datas => datas.text())
        .then(htmlPage => this.emptyTag.innerHTML = htmlPage )
    }
}