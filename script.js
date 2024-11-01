const quotes = [
    "Set your house in perfect order before you criticize the world.",
    "Compare yourself to who you were yesterday, not to who someone else is today.",
    "You’re not everything you could be, and you know it.",
    "Pursue what is meaningful, not what is expedient.",
    "You should aim to be the person at your father’s funeral that everyone can rely on.",
    "Don’t practice what you do not want to become.",
    "Treat yourself like someone you are responsible for helping.",
    "To learn is to die voluntarily and be born again in great ways and small.",
    "Take responsibility for your own life. It’s not your fault that everything has gone wrong, but it’s your responsibility to fix it.",
    "If you want to achieve something, learn to tolerate failure.",
    "If you want to make your life better, you need to develop some discipline.",
    "It is not easy to start a new habit, but once you do, it will change your life.",
    "The successful among us delay gratification and bargain with the future.",
    "Humility is recognition of personal insufficiency and the willingness to learn.",
    "The purpose of life is finding the largest burden that you can bear and bearing it.",
    "Without challenges, you would not be who you are.",
    "Act so that you can tell the truth about how you act.",
    "The way that you make people resilient is by voluntarily exposing them to things that they are afraid of.",
    "You don’t get to choose not to pay a price, you only get to choose which price you pay.",
    "Discipline is a necessity to achieve any meaningful goal."
];

renderQuotes()
let quoutesInterval = setInterval(() => {renderQuotes()}, 5000);

renderBackground()
let backgroundInterval = setInterval(() => {renderBackground()}, 5000);

function renderQuotes (){        
    let random = Math.round(Math.random() * 19)
    console.log(random)
    let quote = quotes[random]

    let quotesDom = document.querySelector('.quote')
        quotesDom.innerText = `${quote}`        
}

function renderBackground (){        
    let random = Math.floor(Math.random() * 6)
    console.log(random)
    if (random === 0){
        random++ 
    } else {
        let bodyDom = document.querySelector('body')
        bodyDom.style.backgroundImage = `url('images/${random}.jpeg')` 
    }        
}

function refreshButton(){
    let element = document.querySelector('.button-div')
    element.addEventListener('click', ()=>{
        clearInterval(quoutesInterval)
        clearInterval(backgroundInterval)

        renderBackground()
        backgroundInterval = setInterval(() => {renderBackground()}, 5000);

        renderQuotes()
        quoutesInterval = setInterval(() => {renderQuotes()}, 5000);
    })
}

refreshButton()







