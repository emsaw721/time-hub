
    var currentDate =  moment().format("MMMM Do YYYY, h:mm:ss a");
    document.getElementById("currentDay").textContent = currentDate 

    //set time in schedule using moment.js
    var time9 = moment().time(9)
    var time10 = moment().time(10)
    var time11 = moment().time(11)
    var time12 = moment().time(12)
    var time1 = moment().time(1)
    var time2 = moment().time(2)
    var time3 = moment().time(3)
    var time4 = moment().time(4)
    var time5 = moment().time(5)


    //array hour blocks 

    var hour = [time9, time10, time11, time12, time1, time2, time3, time4, time5,]

    //get local storage 

    

    //generate all timeblocks and insert saved local storage 

    //audit each time to display past, present, future 

    //delete event function for each timeblock 

    //save event button for each timeblock 

