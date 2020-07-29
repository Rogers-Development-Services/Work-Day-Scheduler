// WHEN I open the planner THEN the current day is displayed at the top of the calendar

currentDayEl = document.querySelector('#currentDay')

currentDay = moment().format('dddd, MMMM Do YYYY');

currentDayEl.innerText = "Today is " + currentDay;
console.log(currentDay);
