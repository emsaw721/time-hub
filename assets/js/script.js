
var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
document.getElementById("currentDay").textContent = currentDate

//set time in schedule using moment.js
var time9 = moment().hour(9); 
var time10 = moment().hour(10); 
var time11 = moment().hour(11);
var time12 = moment().hour(12); 
var time1 = moment().hour(1); 
var time2 = moment().hour(2);  
var time3 = moment().hour(3); 
var time4 = moment().hour(4); 
var time5 = moment().hour(5); 


//array hour blocks 

//var hourBlock = [time9, time10, time11, time12, time1, time2, time3, time4, time5,]

// var currentHour= JSON.parse(hourBlock); 
//set local storage 

// localStorage.setItem("hour9", JSON.stringify("time9")); 

$("#button-save").on("click",function() {
    console.log("clicked")
    var hour = document.getElementById("daily-form").value;
    var hourAll = JSON.parse(localStorage.getItem(hourBlock.length)) || []; 
    hourAll.push(hour);
    localStorage.setItem("hourAll", JSON.stringify(hourAll.length)); 
}
); 



    // const event9 = localStorage.getItem(JSON.parse(time9)); 
    // document.getElementById("hour-9").value = event9; 
    
    


// localStorage.setItem("time10", JSON.stringify(time10));
// $("time10").html(localStorage.setItem);








// save button
    // $("#button-save").click(function() {
    //     console.log("button clicked") 


    // }
    // );

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


// prevent clearing form after click save 
$("#daily-form").submit(function(event) {
    event.preventDefault(); 
}
)

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
    };

    if (moment().isBetween(time10, time11)) {
        $("#hour-10").addClass("present");
    }
    else if(moment().isAfter(time11)) {
        $("#hour-10").addClass("past");
    }
    else {
        $("#hour-10").addClass("future"); 
    };

    if (moment().isBetween(time11, time12)) {
        $("#hour-11").addClass("present");
    }
    else if(moment().isAfter(time12)) {
        $("#hour-11").addClass("past");
    }
    else {
        $("#hour-11").addClass("future"); 
    };

    if (moment().isBetween(time12, time1)) {
        $("#hour-12").addClass("present");
    }
    else if(moment().isAfter(time1)) {
        $("#hour-12").addClass("past");
    }
    else {
        $("#hour-12").addClass("future"); 
    };

    if (moment().isBetween(time1, time2)) {
        $("#hour-1").addClass("present");
    }
    else if(moment().isAfter(time2)) {
        $("#hour-1").addClass("past");
    }
    else {
        $("#hour-1").addClass("future"); 
    };

    if (moment().isBetween(time2, time3)) {
        $("#hour-2").addClass("present");
    }
    else if(moment().isAfter(time3)) {
        $("#hour-2").addClass("past");
    }
    else {
        $("#hour-2").addClass("future"); 
    };

    if (moment().isBetween(time3, time4)) {
        $("#hour-3").addClass("present");
    }
    else if(moment().isAfter(time4)) {
        $("#hour-3").addClass("past");
    }
    else {
        $("#hour-3").addClass("future"); 
    };

    if (moment().isBetween(time4, time5)) {
        $("#hour-4").addClass("present");
    }
    else if(moment().isAfter(time5)) {
        $("#hour-4").addClass("past");
    }
    else {
        $("#hour-4").addClass("future"); 
    };

    if (moment().isSame(time5)) {
        $("#hour-5").addClass("present");
    }
    else if(moment().isAfter(time5)) {
        $("#hour-5").addClass("past");
    }
    else {
        $("#hour-5").addClass("future"); 
    };
};

timeIndicator(); 
