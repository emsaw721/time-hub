var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
// put in function and set interval for every 1000th second 
document.getElementById("currentDay").textContent = currentDate

var now = Date.now(); 



//set time in schedule using moment.js
var time9 = moment().hour(9);
var time10 = moment().hour(10);
var time11 = moment().hour(11);
var time12 = moment().hour(12);
var time1 = moment().hour(13);
var time2 = moment().hour(14);
var time3 = moment().hour(15);
var time4 = moment().hour(16);
var time5 = moment().hour(17);
var currentTime = moment().hour();


//array hour block
var timeBlocks = [time9, time10, time11, time12, time1, time2, time3, time4, time5]

// set local storage 
$(document).ready(function() {
$(".saveBtn").click(function () {
    console.log("clicked")

    // $("#userText").each(function() {
    // var userText = document.getElementsByName("userText").values;

    var userText = $(this).parent().find("#userText").val(); 



localStorage.setItem("text", userText);
console.log(userText);
});

});





// get local storage and display in textbox
$("#userText").val(JSON.parse(localStorage.getItem(userText)));




// //audit each time to display past, present, future 
// // if certain time is less than current time, then this will happen 
// var hour9 = document.getElementById("9");
// var hour10 = document.getElementById("10");
// var hour11 = document.getElementById("11");
// var hour12 = document.getElementById("12");
// var hour13 = document.getElementById("13");
// var hour14 = document.getElementById("14");
// var hour15 = document.getElementById("15");
// var hour16 = document.getElementById("16");
// var hour17 = document.getElementById("17");

// var hourBlocks = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17]


// var row = document.querySelectorAll(".row");


// for (i = 0; i <= hourBlocks.length; i++) {
//     var compareTime = hourBlocks[i];

//     $(row).each(function () {

//         if (now == compareTime.Element.id) {
//             $(row).addClass("present");

//         }

//         else if (now > compareTime.Element.id) {
//             $(row).addClass("past");
//             $(row).removeClass("present");
//         }

//         else {
//             $(row).addClass("future");
//         }
//     })
// };


