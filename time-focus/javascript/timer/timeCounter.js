import state from "./state.js";
import * as elements from "./controls.js"
import * as action from "./actions.js"
import * as sounds from './sounds.js'

export function countDown(){
    //stop condition is activated by a click button
    clearTimeout(state.countDown)
    if(!state.isRuning){
        return
    }

    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    seconds--
    if(seconds<0){
        seconds = 59
        minutes--
    }
    
   
    if(minutes<0){
        action.reset()
        sounds.music.pause()
        return
    }
    updateDisplay(minutes,seconds)
    state.countDown = setTimeout(()=>{countDown()},1000)

}

export function updateDisplay(minutes,seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    elements.minutes.textContent = String(minutes).padStart(2,"0")
    elements.seconds.textContent = String(seconds).padStart(2,'0')
}