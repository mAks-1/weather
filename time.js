// ПОКАЗЫВАЕТ ДАТУ
let today = new Date();
let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
options.timeZone = 'UTC';
options.timeZoneName = 'short';

let now = today.toLocaleString('en-US', options);

// ПОКАЗЫВАЕТ ВРЕМЯ
const timeElement = document.querySelector('.time');

const oo = (v) => v.toString().padStart(2, "0");

const tick = () => {
    const now = new Date();

    timeElement.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()]
        .map((v) => oo(v))
        .join(Math.floor(now.getTime() / 500) & 1 ? " " : ":");
    //.join(now.getSeconds() & 1 ? ":" : " ");
}

tick();
setInterval(tick, 100);


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let showDays = document.querySelectorAll(".days");
let neededDays =[];

function nextDay(){
    for(let i = 0; i < 7; i++){
        if(today.getDay() == days.indexOf(days[i])){
            let x = Number(today.getDay());
            neededDays = days.slice(x+1)
        }
    }

    for(let i = 0; i < showDays.length; i++){
        showDays[i].innerHTML = neededDays[i]
    }
}
nextDay();