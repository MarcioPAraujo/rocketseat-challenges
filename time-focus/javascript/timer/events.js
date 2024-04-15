import { controls } from "./controls.js";
import * as action from "./actions.js";
import * as elements from "./controls.js"
import state from "./state.js";
import { updateDisplay } from "./timeCounter.js";

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


elements.minutes.onkeypress=(event)=> /\d/.test(event.key)

elements.minutes.addEventListener('blur',(event)=>{

  let time = event.currentTarget.textContent
  time = time >60? 60 : time

  state.minutes = time

  updateDisplay()

  elements.minutes.removeAttribute('contenteditable')
})

