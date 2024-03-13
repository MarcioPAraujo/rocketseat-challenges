
let switchThemes = {
    page: document.querySelector('.dark-mode'),
    switchTheme : function(){
        this.page.classList.toggle('dark-mode')
    }
}

let darkTheme = true
let themeButton = document.querySelector('#theme-button')
themeButton.addEventListener('click',changeThemes)

function changeThemes(event){
    switchThemes.switchTheme()
    let mode = darkTheme ? 'dark' : 'light'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`
    
    darkTheme = !darkTheme
}


export {switchThemes}


