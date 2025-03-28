let timer = null;
let totalSeconds = 0;
let isPaused = false;
let initialSecond = 0;

let hourInput = document.getElementById('hour');
let minuteInput = document.getElementById('minute');
let secondInput = document.getElementById('second');

let btnStart = document.getElementById('start');
let btnResume = document.getElementById('resume');
let btnPause = document.getElementById('pause');
let btnReset = document.getElementById('reset');
let timeDisplay = document.getElementById('timeDisplay');
let progressBar = document.querySelector('#progressbar span');

updateButtons("reset");

function startFunc() {
    if (timer) clearInterval(timer);
    let h = parseInt(hourInput.value) || 0;
    let m = parseInt(minuteInput.value) || 0;
    let s = parseInt(secondInput.value) || 0;

    totalSeconds = (h * 3600) + (m * 60) + s;
    initialSecond = totalSeconds;
    if (totalSeconds <= 0) return;
    isPaused = false;
    updateDisplay();
    progressWidth();
    updateButtons("running");

    timer = setInterval(() => {
        if (!isPaused && totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
            progressWidth();
        }
        if (totalSeconds <= 0) {
            clearInterval(timer);
            updateButtons("reset");
        }
    }, 1000);
}

function pauseFun() {
    isPaused = true;
    updateButtons("paused");
}

function resumeFun() {
    if (!isPaused) return;
    isPaused = false;
    updateButtons("running");

    timer = setInterval(() => {
        if (!isPaused && totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
            progressWidth();
        }
        if (totalSeconds <= 0) {
            clearInterval(timer);
            updateButtons("reset");
        }
    }, 1000);
}

function resetFun() {
    isPaused = false;
    clearInterval(timer);
    totalSeconds = 0;
    initialSecond = 0;
    updateButtons("reset");
    updateDisplay();
    progressBar.style.width = "100%";
    hourInput.value = "0";
    minuteInput.value = '2';
    secondInput.value = '10'
}

function updateDisplay() {
    let h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    let m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    let s = String(totalSeconds % 60).padStart(2, '0');
    timeDisplay.innerText = `${h} : ${m} : ${s}`;
}

function progressWidth() {
    let w = initialSecond > 0 ? (totalSeconds / initialSecond) * 100 : 100;
    progressBar.style.width = Math.floor(w) + "%";
}

function updateButtons(state) {
    btnStart.disabled = true;
    btnPause.disabled = true;
    btnResume.disabled = true;
    btnReset.disabled = true;

    if (state === "reset") {
        btnStart.disabled = false;
    } else if (state === "running") {
        btnPause.disabled = false;
        btnReset.disabled = false;
    } else if (state === "paused") {
        btnResume.disabled = false;
        btnReset.disabled = false;
    }
}

btnStart.addEventListener('click', startFunc);
btnPause.addEventListener('click', pauseFun);
btnResume.addEventListener('click', resumeFun);
btnReset.addEventListener('click', resetFun);
