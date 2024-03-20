import state from "./state.js";
import * as events from "./events.js"
import * as timer from "./time.js"

export function start(minute,seconds){
    state.minutes = minute
    state.seconds = seconds
    
    timer.updateDisplay(9,8)

    events.getButton()
}