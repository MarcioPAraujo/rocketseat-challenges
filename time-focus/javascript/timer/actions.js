import state from "./state.js"

export function toggleRunning(){
    state.isRuning = document.documentElement.classList.toggle('running')
}
export function reset(){
    state.isRuning = false;
    document.documentElement.classList.remove('running')
}

export function set(){
    console.log("3")
}

export function toggleMusic(){
    document.documentElement.classList.toggle('music-on')
}