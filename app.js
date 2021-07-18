const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const miliseconds = document.querySelector('#miliseconds')

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const restart = document.querySelector('#restart')

let state = {
    minutes: 1,
    seconds: 1,
    miliseconds: 1
}

let timerMinutes = null;
function handleMinutes() {
    timerMinutes = setInterval(() => {
        minutes.innerText = state.minutes
        state.minutes++
    }, 60000)
}

let timerSeconds = null;
function handleSeconds() {
    timerSeconds = setInterval(() => {
        seconds.innerText = state.seconds
        state.seconds++
        if( state.seconds == 60) {
            state.seconds = 0
        }
    }, 1000)
}

let timerMiliSeconds = null;
function handleMiliSeconds() {
    timerMiliSeconds = setInterval(() => {
        miliseconds.innerText = state.miliseconds
        state.miliseconds++
        if (state.miliseconds == 100) {
            state.miliseconds = 1
        }
    }, 10)
}

start.addEventListener('click', function(event) {
    event.target.classList.add('is-hidden')
    restart.classList.add('is-hidden')
    stop.classList.remove('is-hidden')
    
    handleSeconds()
    handleMinutes()
    handleMiliSeconds()
});

stop.addEventListener('click', function(event) {
    event.target.classList.add('is-hidden')
    start.classList.remove('is-hidden')
    restart.classList.remove('is-hidden')
    start.innerText = 'Continuar'
    
    clearInterval(timerMinutes)
    clearInterval(timerSeconds)
    clearInterval(timerMiliSeconds)
})

restart.addEventListener('click', function(event) {
    event.target.classList.add('is-hidden')
    start.innerText = 'Iniciar'

    state.minutes = 1
    state.seconds = 1
    state.miliseconds = 1

    minutes.innerText = 0
    seconds.innerText = 0
    miliseconds.innerText = 0
})