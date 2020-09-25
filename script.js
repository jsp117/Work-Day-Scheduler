const column = $(".col-lg-8");
const text = $("textarea");
const saveBtn = $(".saveBtn");
console.log(text);
var container = [];
pageOpen();
setInterval(currentHour, 1000);

// display current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));
var hour;

var currentHour = function (){
hour = moment().format('HH');
return(hour);
}
// var hour = moment().format('HH');

console.log("Current Hour = " + currentHour);

// add past, present, future class depending on time
for (var i = 0; i < column.length; i++) {
    if (column[i].id == currentHour) {
        $(column[i]).addClass("present");
    }
    else if (column[i].id > currentHour) {
        $(column[i]).addClass("future");
    }
    else if (column[i].id < currentHour) {
        $(column[i]).addClass("past");
    }
    console.log(column[i].id);
}

$(".saveBtn").on("click", function () {
    var btnSave = this.value;
    console.log(btnSave);
    var textSave = text[btnSave - 1].value;
    console.log("text id = " + textSave);
    localStorage.setItem(btnSave, textSave);
});

// push local storage to page out of array
function pageOpen(){
    for(var i = 0; i < text.length; i++){
        container.push(localStorage.getItem(i + 1));
        text[i].value = container[i];
        }
        console.log("container = " + container);
}

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