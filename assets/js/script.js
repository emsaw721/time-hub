
var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
document.getElementById("currentDay").textContent = currentDate

//set time in schedule using moment.js
var time9 = document.getElementById("#9"); 
var time10 = document.getElementById("#10");
var time11 = document.getElementById("#11"); 
var time12 = document.getElementById("#12"); 
var time1 = document.getElementById("#1"); 
var time2 = document.getElementById("#2"); 
var time3 = document.getElementById("#3"); 
var time4 = document.getElementById("#4"); 
var time5 = document.getElementById("#5"); 


//array hour blocks 

var hourBlock = [time9, time10, time11, time12, time1, time2, time3, time4, time5,]

//set local storage 


// localStorage.setItem("time9", JSON.stringify(time9));
// $("time9").html(localStorage.setItem);


// localStorage.setItem("time10", JSON.stringify(time10));
// $("time10").html(localStorage.setItem);


// localStorage.setItem("time11", JSON.stringify(time11));
// $("time11").html(localStorage.setItem);


// localStorage.setItem("time12", JSON.stringify(time12));
// $("time12").html(localStorage.setItem);

// localStorage.setItem("time1", JSON.stringify(time1));
// $("time1").html(localStorage.setItem);

// localStorage.setItem("time2", JSON.stringify(time2));
// $("time2").html(localStorage.setItem);

// localStorage.setItem("time3", JSON.stringify(time3));
// $("time3").html(localStorage.setItem);

// localStorage.setItem("time4", JSON.stringify(time4));
// $("time4").html(localStorage.setItem);

// localStorage.setItem("time5", JSON.stringify(time5));
// $("time5").html(localStorage.setItem); 


// user input for schedule data 

// function userInput() {
//     $("#hour-text").val(userInput); 

   
    
// }; 


// // save button
//     $("#button-save").click(function() {
//         console.log("button clicked")
//         var editEl = $("hour-text").val(); 

//     }
//     );

//get local storage and render on page 

// function getUserEvent() {
//     return userInput(); 
// };

// function updateHTML() {
//     var event = getUserEvent(); 
//     document.getElementById("hour-text").innerHTML = event; 

// }

// updateHTML(); 


// $("time9").html("");
// localStorage.getItem(userInput);
// $("time9").html(localStorage.getItem);

// $("time10").html("");
// localStorage.getItem(userInput);
// $("time10").html(localStorage.getItem);

// $("time11").html("");
// localStorage.getItem(userInput);
// $("time11").html(localStorage.getItem);

// $("time12").html("");
// localStorage.getItem(userInput);
// $("time12").html(localStorage.getItem);

// $("time1").html("");
// localStorage.getItem(userInput);
// $("time1").html(localStorage.getItem);

// $("time2").html("");
// localStorage.getItem(userInput);
// $("time2").html(localStorage.getItem);

// $("time3").html("");
// localStorage.getItem(userInput);
// $("time3").html(localStorage.getItem);

// $("time4").html("");
// localStorage.getItem(userInput);
// $("time4").html(localStorage.getItem);

// $("time5").html("");
// localStorage.getItem(userInput);
// $("time5").html(localStorage.getItem);


// // prevent clearing form after click save 
// $("#daily-form").submit(function(event) {
//     event.preventDefault(); 
// }
// )

//audit each time to display past, present, future 


function timeIndicator() {
    if (moment().isBetween(time9, time10)) {
        $("#hour-9").addClass("present");
    }
    else if(moment().isAfter(time10)) {
        $("#hour-9").addClass("past");
    }
    else {
        $("#hour-9").addClass("future"); 
    }

    if (moment().isBetween(time10, time11)) {
        $("#hour-10").addClass("present");
    }
    else if(moment().isAfter(time11)) {
        $("#hour-10").addClass("past");
    }
    else {
        $("#hour-10").addClass("future"); 
    }

    if (moment().isBetween(time11, time12)) {
        $("#hour-11").addClass("present");
    }
    else if(moment().isAfter(time12)) {
        $("#hour-11").addClass("past");
    }
    else {
        $("#hour-11").addClass("future"); 
    }

    if (moment().isBetween(time12, time1)) {
        $("#hour-12").addClass("present");
    }
    else if(moment().isAfter(time1)) {
        $("#hour-12").addClass("past");
    }
    else {
        $("#hour-12").addClass("future"); 
    }

    if (moment().isBetween(time1, time2)) {
        $("#hour-1").addClass("present");
    }
    else if(moment().isAfter(time2)) {
        $("#hour-1").addClass("past");
    }
    else {
        $("#hour-1").addClass("future"); 
    }

    if (moment().isBetween(time2, time3)) {
        $("#hour-2").addClass("present");
    }
    else if(moment().isAfter(time3)) {
        $("#hour-2").addClass("past");
    }
    else {
        $("#hour-2").addClass("future"); 
    }

    if (moment().isBetween(time3, time4)) {
        $("#hour-3").addClass("present");
    }
    else if(moment().isAfter(time4)) {
        $("#hour-3").addClass("past");
    }
    else {
        $("#hour-3").addClass("future"); 
    }

    if (moment().isBetween(time4, time5)) {
        $("#hour-4").addClass("present");
    }
    else if(moment().isAfter(time5)) {
        $("#hour-4").addClass("past");
    }
    else {
        $("#hour-4").addClass("future"); 
    }

    if (moment().isSame(time5)) {
        $("#hour-5").addClass("present");
    }
    else if(moment().isAfter(time5)) {
        $("#hour-5").addClass("past");
    }
    else {
        $("#hour-5").addClass("future"); 
    }
}

timeIndicator(); 

// //delete event function for each timeblock 

// $(document).ready(function () {
//     $("delete-btn").click(function () {
//         $(this).remove();
//     }
//     );
// }
// );

   

