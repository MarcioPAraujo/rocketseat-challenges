const popScreen = {
    resultMessage : document.querySelector('#result h1'),
    resultScreen : document.querySelector('main > div'),
    buttonClose : document.querySelector('#close'),

    showBMI: function (){
        popScreen.resultScreen.classList.remove('hided')
        
    },
    closePopUp : ()=>{
        popScreen.resultScreen.classList.add('hided')
    }
}

popScreen.buttonClose.onclick = ()=>{
    popScreen.closePopUp()
}

export { popScreen };