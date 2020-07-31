// WHEN I open the planner THEN the current day is displayed at the top of the calendar [x]

// WHEN I scroll down THEN I am presented with timeblocks for standard business hours [x]

// DECLARING VARIABLES
// const nineAmEl = document.querySelector('#nineAM');
// const nineAmEl = $('#nineAM');
// console.log(nineAmEl);
// const tenAmEl = document.querySelector('#tenAM')
// console.log(tenAmEl);

// const currentDayEl = document.querySelector('#currentDay');
const currentDayEl = $('#currentDay'); 
// // currentDayEl.text('aaaaa');
console.log(currentDayEl);

// const previousHours = moment().startOf('hour').fromNow();
// console.log(previousHours);

// const currentHour = moment().format('h');
// // const currentHour = moment().get('hour');
// console.log(currentHour);

// const commingHours = moment().endOf('hour').fromNow();
// console.log(commingHours);

// set this variable to 9am of the current day ???
// const hourNine = moment().set('hour', 9);
// const hourNine = moment().hour();
// console.log(hourNine);
// const hourTen = moment().set('hour', 10);
// console.log(hourTen);
// const hourEleven = moment().set('hour', 11);
// const hourTwelve = moment().set('hour', 12);
// const hourThirteen = moment().set('hour', 13);
// const hourFourteen = moment().set('hour', 14);
// const hourFifteen = moment().set('hour', 15);
// const hourSixteen = moment().set('hour', 16);
// const hourSeventeen = moment().set('hour', 17);

// 2nd Try
const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

const container = $('#planner-body');

hours.forEach(function (hour) {
    const hourDiv = $('<div>');
    hourDiv.attr('id', 'hour-' + hour);

    function displayHours () {
        if (hour === 12) {
            hourDiv.text((hour = 12) + ' ' + 'PM');
        } else {
            hourDiv.text(`${hour % 12} ${(hour > 11) ? 'PM' : 'AM'}`);
        }
    }

    displayHours();
    container.append(hourDiv);
});
    // Alternative to above displayHours function

    // hourDiv.text(`${hour % 12} ${(hour > 11) ? 'PM' : 'AM'}`);
    // hourDiv.text((hour % 12) + ' ' + ((hour > 11) ? 'PM' : 'AM'));

    // if (hour === 12) {
    //     hourDiv.text((hour = 12) + ' ' + 'PM');
    // }

// Displaying the current date
const currentDay = moment().format('dddd, MMMM Do YYYY');
currentDayEl.text("Today is " + currentDay); 
console.log(currentDay);

// WHEN I view the timeblocks for that dayTHEN each timeblock is color coded to indicate whether it is in the past, present, or future []

    // assign a time to each timeblock 
    // write a function to compare them
    // assign a color to each timeblock depending on how it compares to the present time

// Displaying color coded  past, present, and available hours of the day



// $('#currentDay').addClass('past'); 

    // const 

    // function assignTimeBlock () {

    // }

// function hourDisplays () {

//     if (currentHour === currentHour) {
//         $('#tenAM').addClass('present');
//     }
    
//     if (currentHour > previousHours) {
//         $('#nineAM').addClass('past');
//     }
//     if (currentHour < commingHours) {
//         $('#elevenAM').addClass('future');
//     }
// }

// hourDisplays ();

// WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage []

    // assign an event listener for the events and save col of each hour
    // create an on click event which allows the user to write in a discription of their event on the event column
    // create an event listener for the save column,
    // create an on click event which saves the events information from each hour into an array in local memory

// WHEN I refresh the page THEN the saved events persist []