import { countDays, countHours, countMinutes, countMonth, countSeconds, countYear } from "./selectors";

let countdownDate = new Date("August 4, 2017 00:00:00").getTime();
export const yearMonthDay = () => {
    const currentDate = setInterval(() => {
        let now = new Date().getTime();
        let distance = now - countdownDate;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(distance % (1000 * 60) / 1000);

        countDays.innerHTML = (days < 10 ? "0" : "") + days;
        countHours.innerHTML = (hours < 10 ? "0" : "") + hours;
        countMinutes.innerHTML = (minutes < 10 ? "0" : "") + minutes ;
        countSeconds.innerHTML = (seconds < 10 ? "0" : "") + seconds;
        
        return currentDate;
    },1000)
}