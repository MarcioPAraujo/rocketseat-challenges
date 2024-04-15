import state from "./state.js"
import { countDown } from "./timeCounter.js";
import * as elements from "./controls.js"
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRuning = document.documentElement.classList.toggle('running')
    countDown()
    
}
export function reset(){
    state.isRuning = false;
    document.documentElement.classList.remove('running')
    
}

export function set(){
    elements.minutes.setAttribute('contenteditable',true)
    elements.minutes.focus()
    
    
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        sounds.music.play()
        return
    }
    sounds.music.pause()
}
