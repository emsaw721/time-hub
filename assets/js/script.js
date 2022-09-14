
var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
// put in function and set interval for every 1000th second 
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
var currentHour= moment().hour(); 


//array hour blocks 

//var hourBlock = [time9, time10, time11, time12, time1, time2, time3, time4, time5,]



// user text 

var text = {}; 
var textInput = []; 

var createUserText = function(userText) {
    var userInput = $("<p>").text(userText); 
    $("#user-text" + userText).append(userInput); 
}; 

var saveText = function() {
    localStorage.setItem("text", JSON.stringify(text)); 

    //.sibling and .parent to save to local storage 
}

$("#button-save").click(function() {
    console.log("clicked")
    var textInput = []  

    if (textInput) {
        textInput.join($("#user-text").text());  
        console.log(textInput); 
    }
   
    saveText(); 
}
); 

//get local storage and render on page 
var loadText = function() {
    text = JSON.parse(localStorage.getItem("text")); 

    if (!text) {
        text = {
            hour9: [],
            hour10: [],
            hour11: [],
            hour12: [],
            hour1: [],
            hour2: [],
            hour3: [],
            hour4: [],
            hour5: []
        };
    };

    $.each(text, function(arr) {
        arr.forEach(function(text) {
            createUserText();  
        }); 
    }); 

}





// prevent clearing form after click save 
$("#daily-form").submit(function(event) {
    event.preventDefault(); 
}
)

//audit each time to display past, present, future 
// if certain time is less than current time, then this will happen 
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

var row = document.querySelector(".row");

$(row).each(function() {
if (currentHour < hourBlocks.length) {
    $(".col-10").addClass("present");

}

else if (currentHour > hourBlocks.length) {
    $(".col-10").addClass("past");
    $(".col-10").removeClass("present"); 
}

else {
    $(".col-10").addClass("future");
}
}); 


// look at id for div (like for loop) 
// create var for each id 
//queryselector(class=row) 





// function timeIndicator() {
//     if (moment().isBetween(time9, time10)) {
//         $("#hour-9").addClass("present");
//     }
//     else if(moment().isAfter(time10)) {
//         $("#hour-9").addClass("past");
//         $("#hour-9").re
//     }
//     else {
//         $("#hour-9").addClass("future"); 
//     };

//     if (moment().isBetween(time10, time11)) {
//         $("#hour-10").addClass("present");
//     }
//     else if(moment().isAfter(time11)) {
//         $("#hour-10").addClass("past");
//     }
//     else {
//         $("#hour-10").addClass("future"); 
//     };

//     if (moment().isBetween(time11, time12)) {
//         $("#hour-11").addClass("present");
//     }
//     else if(moment().isAfter(time12)) {
//         $("#hour-11").addClass("past");
//     }
//     else {
//         $("#hour-11").addClass("future"); 
//     };

//     if (moment().isBetween(time12, time1)) {
//         $("#hour-12").addClass("present");
//     }
//     else if(moment().isAfter(time1)) {
//         $("#hour-12").addClass("past");
//     }
//     else {
//         $("#hour-12").addClass("future"); 
//     };

//     if (moment().isBetween(time1, time2)) {
//         $("#hour-1").addClass("present");
//     }
//     else if(moment().isAfter(time2)) {
//         $("#hour-1").addClass("past");
//     }
//     else {
//         $("#hour-1").addClass("future"); 
//     };

//     if (moment().isBetween(time2, time3)) {
//         $("#hour-2").addClass("present");
//     }
//     else if(moment().isAfter(time3)) {
//         $("#hour-2").addClass("past");
//     }
//     else {
//         $("#hour-2").addClass("future"); 
//     };

//     if (moment().isBetween(time3, time4)) {
//         $("#hour-3").addClass("present");
//     }
//     else if(moment().isAfter(time4)) {
//         $("#hour-3").addClass("past");
//     }
//     else {
//         $("#hour-3").addClass("future"); 
//     };

//     if (moment().isBetween(time4, time5)) {
//         $("#hour-4").addClass("present");
//     }
//     else if(moment().isAfter(time5)) {
//         $("#hour-4").addClass("past");
//     }
//     else {
//         $("#hour-4").addClass("future"); 
//     };

//     if (moment().isSame(time5)) {
//         $("#hour-5").addClass("present");
//     }
//     else if(moment().isAfter(time5)) {
//         $("#hour-5").addClass("past");
//     }
//     else {
//         $("#hour-5").addClass("future"); 
//     };
// };

// timeIndicator(); 
