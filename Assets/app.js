// WHEN I open the planner THEN the current day is displayed at the top of the calendar [x]
// WHEN I scroll down THEN I am presented with timeblocks for standard business hours [x]
// WHEN I view the timeblocks for that dayTHEN each timeblock is color coded to indicate whether it is in the past, present, or future [x]
// WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage [x]
// WHEN I refresh the page THEN the saved events persist [x]

// DECLARING VARIABLES

    // Selectors and constants for declaring time
const currentDayEl = $('#currentDay');
const currentDay = moment().format('dddd, MMMM Do YYYY');   
const previousHours = moment().startOf('hour').fromNow();
const currentHour = moment().hour();
const commingHours = moment().endOf('hour').fromNow();
const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    // Selectors for the scheduler
const container = $('#planner-body');
const descriptionRow = $('.description');
const saveBtn = $('#save-btn'); 

// DECLARING FUNCTIONS

    // Declaring these functions outside of .forEach() so they don't run every single itteration
function displayTime(hour, timeDiv) {                                                    

    if (hour === 12) {
        timeDiv.text((hour = 12) + ' ' + 'PM');
    } else {
        timeDiv.text(`${hour % 12} ${(hour > 11) ? 'PM' : 'AM'}`);
    }
}

function colorHours(hour, descriptionDiv) {

    if (hour === currentHour) {
        descriptionDiv.addClass('present');
    } else if (hour > currentHour) {
        descriptionDiv.addClass('future');
    } else {
        descriptionDiv.addClass('past');
    }
}

    // Display the current date
currentDayEl.text("Today is " + currentDay);

    // Building the scheduler with .forEach 
hours.forEach(function (hour) {                                                
    const rowDiv = $('<div>');                                                
    const timeDiv = $('<div>');                                                
    const descriptionDiv = $('<div>');                                           
    const formEl = $('<form>');
    const labelEl = $('<label>');
    const textAreaEl = $('<textarea>');
    const saveDiv = $('<div>');
    const iTag = $('<i>');    
    
    // Setting this const to get the key value pair for each hour
    const displayText = localStorage.getItem(hour);

    rowDiv.addClass('row');                                                  

        timeDiv.attr('id', 'hour-' + hour);                                     
        timeDiv.addClass('col-md-2 time-block');                      

        descriptionDiv.addClass('col-md-8 description');                

            formEl.attr({
                method: 'POST',
                id: 'hour-' + hour + '-form',
            }); 

            labelEl.attr('for', 'hour' + hour + '-event');

            textAreaEl.attr({
                name: 'hour-' + hour + '-specifics',
                id: hour,
                form: 'hour-' + hour + '-form', 
                // placeholder: 'Add Event',
            });
            textAreaEl.addClass('test');
            // Once created each hours text area will display the information from local key pair value
            textAreaEl.val(displayText);

        saveDiv.addClass('col-md-2 save-btn'); 
        saveDiv.attr('id','save-btn');
        // When clicked, the save div will set the local key for each itterated row to be the specific hour of the row, and whatever the user has inputed into the text area
        saveDiv.on('click', function () {
            localStorage.setItem(hour, textAreaEl.val())
        });

            iTag.addClass('fas fa-save')
            iTag.attr({
                id: 'hour-' + hour + '-button',
                'aria-hidden': 'true',
            });

    displayTime(hour, timeDiv);
    colorHours(hour, descriptionDiv);   
    container.append(rowDiv);                                                   
    rowDiv.append(timeDiv, descriptionDiv, saveDiv);  
    descriptionDiv.append(formEl);                                           
    formEl.append(labelEl, textAreaEl);                                       
    saveDiv.append(iTag);
 
});