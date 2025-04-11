let timer = null;
let totalSeconds = 0;
let isPaused = false;

const hourInput = document.getElementById('hour');
const minuteInput = document.getElementById('minute');
const secondInput = document.getElementById('second');

const btnStart = document.getElementById('start');
const btnResume = document.getElementById('resume');
const btnPause = document.getElementById('pause');
const btnReset = document.getElementById('reset');
const timeDisplay = document.getElementById('timeDisplay');

function startFunc() {
    clearInterval(timer);

    const h = parseInt(hourInput.value) || 0;
    const m = parseInt(minuteInput.value) || 0;
    const s = parseInt(secondInput.value) || 0;

    totalSeconds = (h * 3600) + (m * 60) + s;

    if (totalSeconds <= 0) return;

    isPaused = false;
    updateDisplay();

    timer = setInterval(tick, 1000);
}

function tick() {
    if (!isPaused && totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
    }

    if (totalSeconds <= 0) {
        clearInterval(timer);
        timer = null;
    }
}

function pauseFun() {
    isPaused = true;
}

function resumeFun() {
    if (!isPaused || totalSeconds <= 0) return;

    isPaused = false;

    if (!timer) {
        timer = setInterval(tick, 1000);
    }
}

function resetFun() {
    isPaused = false;
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;
    updateDisplay();
}

function updateDisplay() {
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    timeDisplay.innerHTML = `<span>${h}</span> : <span>${m}</span> : <span>${s}</span>`;
}

btnStart.addEventListener('click', startFunc);
btnPause.addEventListener('click', pauseFun);
btnResume.addEventListener('click', resumeFun);
btnReset.addEventListener('click', resetFun);
