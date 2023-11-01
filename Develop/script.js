// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

// To change the color of each time block based on the current hour of the day.
  // Create a function that will handle the background color change of each time block.
  function hourlyColorUpdate() {
    // Initialize a variable and give it a value of the current hour using dayjs
    var currentHour = dayjs().hour();
    // Create a function that will loop through each of the time blocks
    $(".time-block").each(function() {
      // Initialize a variable that will get the value of the time blocks' id by splitting the id at the hyphen, thereby creating a array, and using the 2nd value of the array.
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      // If the value of blockHour is smaller than the value of currentHour, it will add the css class "past" to the .time-block, turning it grey.
      if (blockHour < currentHour) {
        $(this).addClass("past");
      // If the value of blockHour is equal to the value of currentHour, it will add the css class "present" to the .time-block, turning it red.
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      // Otherwise, it will add the css class "future" to the .time-block, turning it green.
      } else {
        $(this).addClass("future");
      }
    });
  };
  // Run the function that we just created.
  hourlyColorUpdate();
  // set the function so that it only runs once every hour.
  setInterval(hourlyColorUpdate, 60 * 60 * 1000);

  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


// To create a display that will show the current day of the week.
  // Initialize a variable that will capture the day of the week and format it to be presented as a word.
  var currentDay = dayjs().format("dddd");
  // Targeting the id currentDay, we give it text content using string literal.
  $("#currentDay").text(`Oh it's you... Anyways, today is ${currentDay}.`);
})})