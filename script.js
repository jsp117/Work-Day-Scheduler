const column = $(".col-lg-8");
const text = $("textarea");
const saveBtn = $(".saveBtn");
// console.log(text);
const container = [];
var hour = moment().format('HH');

// display current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// var hour;

function currentHour() {
    hour = moment().format('HH');
    setColor(hour);
}
// var hour = moment().format('HH');

console.log("Current Hour = " + currentHour);

// add past, present, future class depending on time
function setColor(time) {
    for (var i = 0; i < column.length; i++) {
        // let _hour = currentHour();
        if (column[i].id == time) {
            $(column[i]).addClass("present");
        }
        else if (column[i].id > time) {
            $(column[i]).addClass("future");
        }
        else if (column[i].id < time) {
            $(column[i]).addClass("past");
        }
        // console.log(column[i].id);
    }
}

// push local storage to page out of array
function pageOpen() {
    for (var i = 0; i < text.length; i++) {
        container.push(localStorage.getItem(i));
        text[i].value = container[i];
    }
    // console.log("container = " + container);
}
// function to save value of textfield with the index of the value of the button clicked
$(".saveBtn").on("click", function () {
    var btnSave = this.value;
    // console.log(btnSave);
    var textSave = text[btnSave].value;
    // console.log("text id = " + textSave);
    localStorage.setItem(btnSave, textSave);
});


pageOpen();
setColor(hour);
setInterval(currentHour, 1000);

