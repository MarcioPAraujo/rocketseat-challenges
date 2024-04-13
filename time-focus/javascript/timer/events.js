import { controls } from "./controls.js";
import * as action from "./actions.js";
import * as elements from "./controls.js"

export function getButton (){
    controls.addEventListener('click',(event)=>{
      let act = event.target.dataset.action
      if(typeof action[act]() !== "function"){
        
        return
      }
      action[act]()
    })
}

export function setMinutes(){
  elements.minutes.addEventListener('focus',()=>{
    elements.minutes.textContent = ""
  })
}