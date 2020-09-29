hourEl = document.querySelector('.hour');
minEl = document.querySelector('.min');
secEl = document.querySelector('.sec');

let hourCount  = 0;
let minCount = 0;
let secCount = 0;
let delay = 1000;

var intervalFin = null;

function mytimer() {
    secCount++;
        if(secCount === 60){
            minCount++;
            secCount = 0;
        }
        if(minCount === 60){
            hourCount++;
            minCount = 0;
        }
        hourEl.innerHTML = formatTime(hourCount);
        minEl.innerHTML = formatTime(minCount);
        secEl.innerHTML = formatTime(secCount);
}

function goo() {
    if(!intervalFin){
    intervalFin = setInterval(mytimer, delay);
    }
}

const intervalPause = () =>{
    clearInterval(intervalFin);
    intervalFin = null;

}

const resetInt = () =>{
    clearInterval(intervalFin);
    hourCount  = 0;
    minCount = 0;
    secCount = 0;


    hourEl.innerHTML = formatTime(0);
    minEl.innerHTML = formatTime(0);
    secEl.innerHTML = formatTime(0);

    intervalFin = null;
}
const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}






