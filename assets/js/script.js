
    var currentDate =  moment().format("MMMM Do YYYY, h:mm:ss a");
    document.getElementById("currentDay").textContent = currentDate 

    //set time in schedule using moment.js
    var time9 = moment().hour(9)
    var time10 = moment().hour(10)
    var time11 = moment().hour(11)
    var time12 = moment().hour(12)
    var time1 = moment().hour(1)
    var time2 = moment().hour(2)
    var time3 = moment().hour(3)
    var time4 = moment().hour(4)
    var time5 = moment().hour(5)


    //array hour blocks 

    var hourBlock = [time9, time10, time11, time12, time1, time2, time3, time4, time5,]

    //set local storage 


    localStorage.setItem("#9"); 
    $("#9").html(localStorage.setItem); 
    
  
    localStorage.setItem("#10"); 
    $("#10").html(localStorage.setItem); 

    
    localStorage.setItem("#11"); 
    $("#11").html(localStorage.setItem); 

   
    localStorage.setItem("#12"); 
    $("#12").html(localStorage.setItem);

    localStorage.setItem("#1"); 
    $("#1").html(localStorage.setItem);

    localStorage.setItem("#2"); 
    $("#2").html(localStorage.setItem);

    localStorage.setItem("#3"); 
    $("#3").html(localStorage.setItem);

    localStorage.setItem("#4"); 
    $("#4").html(localStorage.setItem);

    localStorage.setItem("#5"); 
    $("#5").html(localStorage.setItem);
    
    //get local storage
    $("#9").html("");
    localStorage.getItem("#9",userInput); 
    $("#9").html(localStorage.getItem); 

    $("#10").html("");
    localStorage.getItem("#10", userInput); 
    $("#10").html(localStorage.getItem); 

    $("#11").html("");
    localStorage.getItem("#11", userInput); 
    $("#11").html(localStorage.getItem); 

    $("#12").html("");
    localStorage.getItem("#12", userInput); 
    $("#12").html(localStorage.getItem);  

    $("#1").html("");
    localStorage.getItem("#1", userInput); 
    $("#1").html(localStorage.getItem); 

    $("#2").html("");
    localStorage.getItem("#2", userInput); 
    $("#2").html(localStorage.getItem);  

    $("#3").html("");
    localStorage.getItem("#3", userInput); 
    $("#3").html(localStorage.getItem); 

    $("#4").html("");
    localStorage.getItem("#4", userInput); 
    $("#4").html(localStorage.getItem); 

    $("#5").html("");
    localStorage.getItem("#5", userInput); 
    $("#5").html(localStorage.getItem); 
 

    //audit each time to display past, present, future 

    JSON.parse(time9)

    //delete event function for each timeblock 

    //save event button for each timeblock 

