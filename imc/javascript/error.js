const errorMessage = {
    divError: document.querySelector('#error'),
    
    showError: function (err){
        this.divError.innerText = `${err}`
        this.divError.classList.remove('hided')
    },
    hideError: function(){
        this.divError.classList.add('hided')
    }

    
}

export { errorMessage}