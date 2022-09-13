
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

var hourBlock = [time9, time10, time11, time12, time1, time2, time3, time4, time5,]

// var currentHour= JSON.parse(hourBlock); 

// user text 

var text = {}; 
var textInput = []; 

var createUserText = function(userText) {
    var userInput = $("<p>").text(userText); 
    $("#user-text" + userText).append(userInput); 
}; 

var saveText = function() {
    localStorage.setItem("text", JSON.stringify(text)); 
}

$("#button-save").click(function() {
    console.log("clicked")
    var textInput = []  

    if (textInput) {
        textInput.push($("#user-text").text());
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


// $("time9").html("");
// localStorage.getItem(userInput);
// $("time9").html(localStorage.getItem);

// $("time10").html("");
// localStorage.getItem(userInput);
// $("time10").html(localStorage.getItem);



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
