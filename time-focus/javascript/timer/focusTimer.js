import state from "./state.js";
import * as events from "./events.js"

export function start(minute,seconds){
    state.minutes = minute
    state.seconds = seconds
    
    events.getButton()
}