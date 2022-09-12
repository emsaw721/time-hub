
// var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
// document.getElementById("currentDay").textContent = currentDate

//set time in schedule using moment.js
var time9 = $(document).getElementById("#9"); 
var time10 = $(document).getElementById("#10"); 
var time11 = $(document).getElementById("#11"); 
var time12 = $(document).getElementById("#12"); 
var time1 = $(document).getElementById("#1"); 
var time2 = $(document).getElementById("#2"); 
var time3 = $(document).getElementById("#3"); 
var time4 = $(document).getElementById("#4"); 
var time5 = $(document).getElementById("#5"); 


//array hour blocks 

var hourBlock = [time9, time10, time11, time12, time1, time2, time3, time4, time5,]

//set local storage 


localStorage.setItem("time9", JSON.stringify(time9));
$("time9").html(localStorage.setItem);


localStorage.setItem("time10");
$("time10").html(localStorage.setItem);


localStorage.setItem("time11");
$("time11").html(localStorage.setItem);


localStorage.setItem("time12");
$("time12").html(localStorage.setItem);

localStorage.setItem("time1");
$("time1").html(localStorage.setItem);

localStorage.setItem("time2");
$("time2").html(localStorage.setItem);

localStorage.setItem("time3");
$("time3").html(localStorage.setItem);

localStorage.setItem("time4");
$("time4").html(localStorage.setItem);

localStorage.setItem("time5");
$("time5").html(localStorage.setItem);


// user input for schedule data 

function userInput() {
    var editEl = document.getElementById("hour-text");
    var userVersion = editEl.innerHTML;
    




// save button
$(document).ready(function(event) {
    $("#button-save").click(function() {
        $(this).localStorage.userEdits = userVersion; 
    }
    );

    event.preventDefault(); 
}
); 
}

//get local storage
$("time9").html("");
localStorage.getItem("time9");
$("time9").html(localStorage.getItem);

$("time10").html("");
localStorage.getItem("time10");
$("time10").html(localStorage.getItem);

$("time11").html("");
localStorage.getItem("time11");
$("time11").html(localStorage.getItem);

$("time12").html("");
localStorage.getItem("time12", userInput);
$("time12").html(localStorage.getItem);

$("time1").html("");
localStorage.getItem("time1", userInput);
$("time1").html(localStorage.getItem);

$("time2").html("");
localStorage.getItem("time2", userInput);
$("time2").html(localStorage.getItem);

$("time3").html("");
localStorage.getItem("time3", userInput);
$("time3").html(localStorage.getItem);

$("time4").html("");
localStorage.getItem("time4", userInput);
$("time4").html(localStorage.getItem);

$("time5").html("");
localStorage.getItem("time5", userInput);
$("time5").html(localStorage.getItem);


//audit each time to display past, present, future 

JSON.parse(time9)

//delete event function for each timeblock 

$(document).ready(function () {
    $("delete-btn").click(function () {
        $(this).remove();
    }
    );
}
);

   

