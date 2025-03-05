import { Countdown } from "./Countdown.js";

document.getElementById('new-countdown-bnt').addEventListener('click', function(e){
    const input = document.getElementById("new-countdown-input").value;
    const match = input.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);

    if (!match) {
        alert("Invalid format! Please use hh:mm:ss");
        return;
    }

    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const seconds = parseInt(match[3], 10);

    if (hours < 0 || minutes < 0 || minutes >= 60 || seconds < 0 || seconds >= 60) {
        alert("Invalid time values!");
        return;
    }

    new Countdown(hours, minutes, seconds, document.getElementById("countdown-list"));
});