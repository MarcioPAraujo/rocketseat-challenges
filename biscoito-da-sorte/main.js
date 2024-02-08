const cookieButton = document.querySelector('#biscuit')
const closedCookie = document.querySelector('#closed')
const openedCookie = document.querySelector('#opened')
const anotherCookie = document.querySelector('#another-biscuit')
const message = document.querySelector('#message')

const phrases = [
    'It takes courage to grow up and become who you really are.',
    'When you can’t find someone to follow, you have to find a way to lead by example.',
    'The most common way people give up their power is by thinking they don’t have any.',
    'Vitality shows not only in the ability to persist but in the ability to start over.',
    'A problem is a chance for you to do your best.',
    'All our dreams can come true, if we have the courage to pursue them',
    `Don't sit down and wait for the opportunities to come. Get up and make them.`,
    'You are never too old to set another goal or to dream a new dream.',
    `The bad news is time flies. The good news is you're the pilot.`,
    'Success is not final, failure is not fatal: it is the courage to continue that counts.'
]
let randomNumberBetween1And10 = () => Math.round(Math.random()*10)
let randomArrayPosition
const revealTheMessage = () =>{
    closedCookie.classList.add('hided')
    openedCookie.classList.remove('hided')
    
    randomArrayPosition = randomNumberBetween1And10()
    let arraySizeOverflow = randomArrayPosition === 10
    if(arraySizeOverflow){
        --randomArrayPosition
    }
    
    message.innerText = phrases[randomArrayPosition]
}
const reset = () =>{
    closedCookie.classList.toggle('hided')
    openedCookie.classList.toggle('hided')
}

cookieButton.addEventListener('click',revealTheMessage)
anotherCookie.addEventListener('click',reset)