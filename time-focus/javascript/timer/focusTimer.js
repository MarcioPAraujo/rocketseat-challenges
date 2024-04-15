import state from "./state.js";
import * as events from "./events.js"
import * as timer from "./timeCounter.js"

export function start(minute,seconds){
    state.minutes = minute
    state.seconds = seconds
    
    timer.updateDisplay(0,7)

    events.getButton()

    events.setMinutes()

    
}