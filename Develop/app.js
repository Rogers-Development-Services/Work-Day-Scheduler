// WHEN I open the planner THEN the current day is displayed at the top of the calendar [x]
// WHEN I scroll down THEN I am presented with timeblocks for standard business hours [x]
// WHEN I view the timeblocks for that dayTHEN each timeblock is color coded to indicate whether it is in the past, present, or future [x]

// DECLARING VARIABLES
// const currentDayEl = document.querySelector('#currentDay');
const currentDayEl = $('#currentDay');
// console.log(currentDayEl);

const previousHours = moment().startOf('hour').fromNow();
console.log("previous hours started " + previousHours + " ago");

const currentHour = moment().hour();
// const currentHour = moment().get('hour');
console.log("the current hour is " + currentHour);

const commingHours = moment().endOf('hour').fromNow();
console.log("coming hours are in " + commingHours);

const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const descriptionInput = [''];

const container = $('#planner-body');

// Displaying the current date
const currentDay = moment().format('dddd, MMMM Do YYYY');                       //This sets the formated current day into currentDay     
currentDayEl.text("Today is " + currentDay);                                    //This sets the text of current day to display it
// console.log(currentDay);

hours.forEach(function (hour) {                                                 //This will replicate every row for each hour
    const rowDiv = $('<div>');                                                  //This selects the first div to be created now called rowDiv
    const timeDiv = $('<div>');                                                 //This selects the second div to be created now called timeDiv
    const descriptionDiv = $('<div>');                                           //This selects the third div to be created now called descriptionDiv
   
    const formEl = $('<form>');
    const labelEl = $('<label>');
    const inputEl = $('<input>');
   
    const saveDiv = $('<div>');                                                 //This selects the fourth div to be created now called saveDiv

    rowDiv.addClass('row');                                                     //This adds the class 'row' to timeDiv

        timeDiv.attr('id', 'hour-' + hour);                                         //This adds the id attribute to the timeDiv called 'hour + (9-17)'
        timeDiv.addClass('col-md-2').addClass('time-block');                        //This adds two class attributes to style the timeDiv

            descriptionDiv.addClass('col-md-8').addClass('description');                //This adds two class attributes to style descriptionDiv

                formEl.attr({
                    method: 'POST',
                    id: 'hour-' + hour + '-form'
                }); 
                labelEl.attr('for', 'hour' + hour + '-event');
                inputEl.attr({
                    type: 'text',
                    name: 'hour-' + hour + '-specifics',
                    id: 'hour-' + hour + '-specifics'
                });

                // formEl.append('<label for="time-event">', '<input type="text" name="time-specifics" id="time-specifics" placeholder="Click here to add an event">');
    
        saveDiv.addClass('col-md-2').addClass('save-btn');                          //This adds two class attributes to style saveDiv

    function displayTime() {                                                        //This function displays the workday hours from 9am-5pm converted from army time

        if (hour === 12) {
            timeDiv.text((hour = 12) + ' ' + 'PM');
        } else {
            timeDiv.text(`${hour % 12} ${(hour > 11) ? 'PM' : 'AM'}`);
        }
    }

    function colorHours() {

        if (hour === currentHour) {
            descriptionDiv.addClass('present');
        } else if (hour > currentHour) {
            descriptionDiv.addClass('future');
        } else {
            descriptionDiv.addClass('past');
        }
    }

    displayTime();
    colorHours();                                                               //This calls the function
    container.append(rowDiv);                                                   //These append the new tags to node
    rowDiv.append(timeDiv);                                                     //
    rowDiv.append(descriptionDiv);                                              //
    descriptionDiv.append(formEl);                                              //
    formEl.append(labelEl);                                                     //
    formEl.append(inputEl);                                                     //
    rowDiv.append(saveDiv);                                                     //
});
// Alternative to above displayHours function

// hourDiv.text(`${hour % 12} ${(hour > 11) ? 'PM' : 'AM'}`);
// hourDiv.text((hour % 12) + ' ' + ((hour > 11) ? 'PM' : 'AM'));

// if (hour === 12) {
//     hourDiv.text((hour = 12) + ' ' + 'PM');
// }

// WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage []

    // assign an event listener for the events and save col of each hour
    // create an on click event which allows the user to write in a discription of their event on the event column
    // create an event listener for the save column,
    // create an on click event which saves the events information from each hour into an array in local memory

    // click()

// WHEN I refresh the page THEN the saved events persist []