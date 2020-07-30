// WHEN I open the planner THEN the current day is displayed at the top of the calendar [x]

// WHEN I scroll down THEN I am presented with timeblocks for standard business hours [x]

// Declaring Variables
const currentDayEl = $('#currentDay');
// currentDayEl = document.querySelector('#currentDay');
// console.log(currentDay);


// Displaying the current date
let currentDay = moment().format('dddd, MMMM Do YYYY');
currentDayEl.innerText = "Today is " + currentDay;
// console.log(currentDay);

// Displaying past, present, and available hours of the day




// WHEN I view the timeblocks for that dayTHEN each timeblock is color coded to indicate whether it is in the past, present, or future []

