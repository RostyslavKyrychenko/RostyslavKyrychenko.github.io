var td = document.getElementsByTagName('td')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t, miliseconds = 0;

function add() {
    miliseconds++;
    if(miliseconds >= 60){
        miliseconds = 0;
          seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            }
        }
    }
    
    td.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds)+ ":" + (miliseconds ? (miliseconds > 9 ? miliseconds : "0" + miliseconds) : "00");

    timer();
}
function timer() {
    t = setTimeout(add, 10);
}

start.onclick = function() {
    timer();
   
    
}

stop.onclick = function() {
    clearTimeout(t);
    
}

clear.onclick = function() {
    td.textContent = "00:00:00:00";
    miliseconds = 0; seconds = 0; minutes = 0; hours = 0;
}