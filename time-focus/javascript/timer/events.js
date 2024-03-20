import { controls } from "./controls.js";
import * as action from "./actions.js";

export function getButton (){
    controls.addEventListener('click',(event)=>{
      let act = event.target.dataset.action
      if(typeof action[act]() !== "function"){
        
        return
      }
      action[act]()
    })
}