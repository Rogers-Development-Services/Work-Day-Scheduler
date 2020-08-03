// WHEN I open the planner THEN the current day is displayed at the top of the calendar [x]
// WHEN I scroll down THEN I am presented with timeblocks for standard business hours [x]
// WHEN I view the timeblocks for that dayTHEN each timeblock is color coded to indicate whether it is in the past, present, or future [x]
// WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage [x]
// WHEN I refresh the page THEN the saved events persist []

// DECLARING VARIABLES
// const currentDayEl = document.querySelector('#currentDay');
const currentDayEl = $('#currentDay');
// console.log(currentDayEl);

const previousHours = moment().startOf('hour').fromNow();
// console.log("previous hours started " + previousHours + " ago");

const currentHour = moment().hour();
// const currentHour = moment().get('hour');
// console.log("the current hour is " + currentHour);

const commingHours = moment().endOf('hour').fromNow();
// console.log("coming hours are in " + commingHours);

const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

const container = $('#planner-body');

const descriptionRow = $('.description');

const textAreaData = $('<textarea>');

// Do i need to 9 event listeners or can I somehow loop this?
const saveBtn = $('#save-btn');  //create an id for click handlers
console.log(saveBtn);

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
    const textAreaEl = $('<textarea>');
   
    const saveDiv = $('<div>');
    const iTag = $('<i>');                                                 //This selects the fourth div to be created now called saveDiv

    rowDiv.addClass('row');                                                     //This adds the class 'row' to timeDiv

        timeDiv.attr('id', 'hour-' + hour);                                         //This adds the id attribute to the timeDiv called 'hour + (9-17)'
        timeDiv.addClass('col-md-2 time-block');                        //This adds two class attributes to style the timeDiv

        descriptionDiv.addClass('col-md-8 description');                //This adds two class attributes to style descriptionDiv

            formEl.attr({
                method: 'POST',
                id: 'hour-' + hour + '-form'
            }); 
            labelEl.attr('for', 'hour' + hour + '-event');
            textAreaEl.attr({
                name: 'hour-' + hour + '-specifics',
                id: hour,
                form: 'hour-' + hour + '-form', //make this a name look into for
                placeholder: 'Add Event'
            });
    
        saveDiv.addClass('col-md-2 save-btn'); 
        saveDiv.attr('id','save-btn');                         //This adds two class attributes to style saveDiv
            iTag.addClass('fas fa-save')
            iTag.attr({
                id: 'hour-' + hour + '-button',
                'aria-hidden': 'true'
            });

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
    colorHours();   
    container.append(rowDiv);                                                   
    rowDiv.append(timeDiv, descriptionDiv, saveDiv);  
    descriptionDiv.append(formEl);                                           
    formEl.append(labelEl, textAreaEl);                                       
    saveDiv.append(iTag);
 
});

$(document).on('click', saveBtn, function(event) {
    
    event.preventDefault(); 
    event.stopPropagation();
    console.log($(event.target).siblings('.description').find('textarea'));

    var specificRow =$(event.target).siblings('.description').find('textarea');

    localStorage.setItem(specificRow.attr('id'), specificRow.val());
})

function saveEvent (type, event) {
    textAreaData.val() = event;
    textAreaData.attr('id', type);
}
saveEvent();

// test
function displayEvent () {
    var event = localStorage.getItem('9')
    $('<p>') = text(event);
}

displayEvent();
