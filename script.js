const textAreas = $(".col-lg-8");


// display current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// track hour in 24 hour time
var currentHour = moment().format('H');

console.log("Current Hour = " + currentHour);




// add past, present, future class depending on time
for (var i = 0; i < textAreas.length; i++) {
    if (textAreas[i].id == currentHour) {
        $(textAreas[i]).addClass("present");
    }
    else if (textAreas[i].id > currentHour) {
        $(textAreas[i]).addClass("future");
    }
    else if (textAreas[i].id < currentHour) {
        $(textAreas[i]).addClass("past");
    }
    console.log(textAreas[i].id);

}

  
