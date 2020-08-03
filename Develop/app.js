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

const textAreaData = $('.test1');
console.log(textAreaData);

// Do i need to 9 event listeners or can I somehow loop this?
const saveBtn = $('#save-btn');  //create an id for click handlers
// console.log(saveBtn);

// Displaying the current date
const currentDay = moment().format('dddd, MMMM Do YYYY');                       //This sets the formated current day into currentDay     
currentDayEl.text("Today is " + currentDay);                                    //This sets the text of current day to display it
// console.log(currentDay);

hours.forEach(function (hour) {                                                 //This will replicate every row for each hour
    const rowDiv = $('<div>');                                                
    const timeDiv = $('<div>');                                                
    const descriptionDiv = $('<div>');                                           
    const formEl = $('<form>');
    const labelEl = $('<label>');
    const textAreaEl = $('<textarea>');
    const saveDiv = $('<div>');
    const iTag = $('<i>');                                                 

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
            textAreaEl.addClass('test');
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

var storageArray = [
    localStorage.getItem(9),
    localStorage.getItem(10),
    localStorage.getItem(11),
    localStorage.getItem(12),
    localStorage.getItem(13),
    localStorage.getItem(14),
    localStorage.getItem(15),
    localStorage.getItem(16), 
    localStorage.getItem(17),
];
console.log(storageArray);

// for (i = 0; i < 9;  i++) {
//     textAreaData.append(`<p>${storageArray[i]}</p>`);
// }

var nineTextAreaStoredText = $('#9');
var tenTextAreaStoredText = $('#10');
var elevenTextAreaStoredText = $('#11');
var twelveTextAreaStoredText = $('#12');
var thirteenTextAreaStoredText = $('#13');
var fourteenTextAreaStoredText = $('#14');
var fifteenTextAreaStoredText = $('#15');
var sixteenTextAreaStoredText = $('#16');
var seventeenTextAreaStoredText = $('#17');

// can you loop selectors?
// i need to target textarea 

nineTextAreaStoredText.append(storageArray[0]);
tenTextAreaStoredText.text(storageArray[1]);
elevenTextAreaStoredText.text(storageArray[2]);
twelveTextAreaStoredText.text(storageArray[3]);
thirteenTextAreaStoredText.text(storageArray[4]);
fourteenTextAreaStoredText.text(storageArray[5]);
fifteenTextAreaStoredText.text(storageArray[6]);
sixteenTextAreaStoredText.text(storageArray[7]);
seventeenTextAreaStoredText.text(storageArray[8]);
// display text on the textarea element

$(document).on('click', saveBtn, function(event) {
    
    event.preventDefault(); 
    // event.stopPropagation();
    // console.log($(event.target).siblings('.description').find('textarea'));

    var specificRow =$(event.target).siblings('.description').find('textarea');
    console.log(specificRow);   //grabbing the text area element from HTML 
    console.log(specificRow.attr('id'));    // grabbbing the value of the textarea aelement id

    function displayEvent () {
        var eventData = localStorage.getItem((specificRow.attr('id')));
        console.log(eventData); //getting the user input from the textarea  
        var eventDataKey = specificRow.attr('id');
        console.log(eventDataKey); //getting value of the id from the specific row var
        var eventDataValue = specifiRow.val();
        console.log(eventDataValue); //getting the value of the specific row var

        textAreaData.text(eventDataValue);
    }

    localStorage.setItem(specificRow.attr('id'), specificRow.val());

    displayEvent();
    // select the value of the attribute for the first elememnt in the set of matched elements
})


// function saveEvent (type, event) {
//     textAreaData.val() = event;
//     textAreaData.attr('id', type);
// }
// saveEvent();

// test

