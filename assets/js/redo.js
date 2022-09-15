var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

document.getElementById("currentDay").textContent = currentDate





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
$(document).ready(function () {
    $(".saveBtn").click(function () {
        console.log("clicked")

        var userText = $(this).parent().find("#userText").val();
        localStorage.setItem("text", userText);
        console.log(userText);

        var textNumber = $(this).parent().find(".hour").text(); 
        var userNumber = parseInt(textNumber); 
        localStorage.setItem("number", userNumber); 
        console.log(userNumber); 

        
    });

});





// get local storage and display in textbox
$("#userText").val(localStorage.getItem("text"));




//audit each time to display past, present, future 
var hour9 = document.getElementById("9");
var hour10 = document.getElementById("10");
var hour11 = document.getElementById("11");
var hour12 = document.getElementById("12");
var hour13 = document.getElementById("13");
var hour14 = document.getElementById("14");
var hour15 = document.getElementById("15");
var hour16 = document.getElementById("16");
var hour17 = document.getElementById("17");

var hourBlocks = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17]


var row = document.querySelectorAll(".row");


// for (i = 0; i <= hourBlocks.length; i++) {
//     // var compareTime = hourBlocks[i];

    $(row).each(function () {
        var textNumber = $(this).parent().find(".hour").text(); 
        var inputNumber = parseInt(textNumber); 


        if (currentTime === inputNumber) {
            $(row).addClass("present");

        }

        else if (currentTime > inputNumber) {
            $(row).removeClass("present");
            $(row).addClass("past");
            
        }

        else {
            $(row).addClass("future");
        }

    }); 


// };


