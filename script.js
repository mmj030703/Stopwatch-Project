//////////////////////////////////////////////////////////
// const startBtn = document.querySelector('.start-btn');
// const stopBtn = document.querySelector('.stop-btn');
// const resetBtn = document.querySelector('.reset-btn');
// const time = document.querySelector('.time');
// 
// let intervalId, startTime, elapsedTime = 0;
// 
// const start = () => {
//     startTime = Date.now() - elapsedTime;
//     intervalId = setInterval(() => {
//         elapsedTime = Date.now() - startTime;
//         let seconds = Math.floor(elapsedTime / 1000);
//         let minutes = Math.floor(seconds / 60);
//         let hours = Math.floor(minutes / 60);
//         //! corner cases
//         if(seconds >= 60) {
//             seconds %= 60;
//         }
//         if(minutes >= 60) {
//             minutes %= 60;
//         }
//         const formatedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
//         time.textContent = formatedTime;
//     }, 10);
// }
// 
// const stop = () => {
//     clearInterval(intervalId);
// };
// 
// const reset = () => {
//     clearInterval(intervalId);
//     elapsedTime = 0;
//     time.textContent = "00:00:00";
// }
// 
// const pad = (time) => {
//     return time < 10 ? '0' + time : time;
// }
// 
// startBtn.addEventListener('click', start);
// 
// stopBtn.addEventListener('click', stop);
// 
// resetBtn.addEventListener('click', reset);
//////////////////////////////////////////////////////////


// Good, Efficienta and Readable Code
const time = document.querySelector('.time');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let intervalId = 0;
let startCounter = 1;


const onStart = () => {
    if(startCounter > 1) return;
    startCounter++;
    intervalId = setInterval(() => {
        milliseconds++;
        if (milliseconds === 60) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        displayTime();

    }, 10);
}

const onStop = () => {
    clearInterval(intervalId);
    startCounter = 1;
}

const onReset = () => {
    clearInterval(intervalId);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTime();
    startCounter = 1;
}

const displayTime = () => {
    const formatedTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    time.textContent = formatedTime;
}

const pad = (time) => {
    return time < 10 ? '0' + time : time;
}

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
resetBtn.addEventListener('click', onReset);
