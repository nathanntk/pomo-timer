// https://freshman.tech/pomodoro-timer/
// script.js

// timer variable with properties containing duration of timer, breaks, and interval
const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
  };

// detects a click of any of the mode buttons. 
// modeButtons points to the containing element. once clicked, handleMode() is invoked.
const modeButtons = document.querySelector('#js-mode-buttons');
modeButtons.addEventListener('click', handleMode);

// gives the timer extra zeroes so that minutes and seconds each have two zeroes
function updateClock() {
    const { remainingTime } = timer;
    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');
  
    const min = document.getElementById('js-minutes');
    const sec = document.getElementById('js-seconds');
    min.textContent = minutes;
    sec.textContent = seconds;
  }

// mode could be pomodoro, shortBreak, or longBreak
function switchMode(mode) {
    timer.mode = mode;
    // remainingTime property with total being set to 300 (5 x 60)
    timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0, // always at zero at start
    };

    // active class is removed from all the mode buttons
    document
        .querySelectorAll('button[data-mode]')
        .forEach(e => e.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    document.body.style.backgroundColor = `var(--${mode})`;

    updateClock();
}
  
// data-mode is retrieved. If it DNE, the target element was not one of the buttons,
// otherwise switchMode is invoked.
function handleMode(event) {
    const { mode } = event.target.dataset;
  
    if (!mode) return;
  
    switchMode(mode);
  }