const column = $(".col-lg-8");
const text = $("textarea");
const saveBtn = $(".saveBtn");
console.log(text);
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
        console.log(column[i].id);
    }
}

// push local storage to page out of array
function pageOpen() {
    for (var i = 0; i < text.length; i++) {
        container.push(localStorage.getItem(i + 1));
        text[i].value = container[i];
    }
    // console.log("container = " + container);
}

$(".saveBtn").on("click", function () {
    var btnSave = this.value;
    // console.log(btnSave);
    var textSave = text[btnSave - 1].value;
    // console.log("text id = " + textSave);
    localStorage.setItem(btnSave, textSave);
});


pageOpen();
setColor(hour);
setInterval(currentHour, 1000);




// working to save all at once
// $(".saveBtn").on("click", function (event) {
//     var btnSave = this.id;
//     console.log("id = " + btnSave);
//     for(var i = 0; i < text.length; i++){
//         console.log("textfield classname = " + text[i].className);
//         if(btnSave = text[i].className){
//             var temp = text[i].value;
//             console.log(temp);  
//         }
//         localStorage.setItem(i, temp);
//     }
//   });