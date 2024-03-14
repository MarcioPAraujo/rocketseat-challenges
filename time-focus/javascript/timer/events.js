import { controls } from "./controls.js";

export function getButton (){
    controls.addEventListener('click',(event)=>{
      let action = event.target.dataset.action
      console.log(action)
    })
}