// Grabbing DOM elements
var hours = document.querySelectorAll(".hour");
var todos = document.querySelectorAll("textarea");
var saveBtns = document.querySelectorAll("button");

// Creating variables for each button
var saveBtn1 = saveBtns[0]; 
var saveBtn2 = saveBtns[1]; 
var saveBtn3 = saveBtns[2]; 
var saveBtn4 = saveBtns[3]; 
var saveBtn5 = saveBtns[4]; 
var saveBtn6 = saveBtns[5]; 
var saveBtn7 = saveBtns[6]; 
var saveBtn8 = saveBtns[7]; 
var saveBtn9 = saveBtns[8]; 

// Creating variables for the each time-block's to do section (textarea)
var todo1 = todos[0]; 
var todo2 = todos[1]; 
var todo3 = todos[2]; 
var todo4 = todos[3]; 
var todo5 = todos[4]; 
var todo6 = todos[5]; 
var todo7 = todos[6]; 
var todo8 = todos[7]; 
var todo9 = todos[8]; 

//Using moment.js to display the current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//Using moment.js to create a variable for the current time
var currentHour =  parseFloat(moment().format('H')); 

//A for loop to color code whether the time-block is in past, present, or future 
for (i = 0; i < todos.length; i++) { 
  var todo = todos[i];
  if (todo.dataset.number == currentHour) {
    todo.classList.add("present");
    todo.classList.remove("past");
    todo.classList.remove("future");
  } else if (currentHour > todo.dataset.number) {
    todo.classList.add("past");
    todo.classList.remove("present");
    todo.classList.remove("future");
  } else {
   todo.classList.add("future");
   todo.classList.remove("present");
   todo.classList.remove("past");
  };
};

//Storing each to do value to local storage once event is triggered
var storedTodo1 = function (event) {
  event.preventDefault();
  var todo9AM = todo1.value;
  localStorage.setItem("9AM Todo", JSON.stringify(todo9AM)); 
};
var storedTodo2 = function (event) {
  event.preventDefault();
  var todo10AM = todo2.value;
  localStorage.setItem("10AM Todo", JSON.stringify(todo10AM));
};
var storedTodo3 = function (event) {
  event.preventDefault();
  var todo11AM = todo3.value;
  localStorage.setItem("11AM Todo", JSON.stringify(todo11AM));
};
var storedTodo4 = function (event) {
  event.preventDefault();
  var todo12PM = todo4.value;
  localStorage.setItem("12PM Todo", JSON.stringify(todo12PM));
};
var storedTodo5 = function (event) {
  event.preventDefault();
  var todo1PM = todo5.value;
  localStorage.setItem("1PM Todo", JSON.stringify(todo1PM));
};
var storedTodo6 = function (event) {
  event.preventDefault();
  var todo2PM = todo6.value;
  localStorage.setItem("2PM Todo", JSON.stringify(todo2PM));
};
var storedTodo7 = function (event) {
  event.preventDefault();
  var todo3PM = todo7.value;
  localStorage.setItem("3PM Todo", JSON.stringify(todo3PM));
};
var storedTodo8 = function (event) {
  event.preventDefault();
  var todo4PM = todo8.value;
  localStorage.setItem("4PM Todo", JSON.stringify(todo4PM));
};
var storedTodo9 = function (event) {
  event.preventDefault();
  var todo5PM = todo9.value;
  localStorage.setItem("5PM Todo", JSON.stringify(todo5PM));
};

//Displaying to do values from local storage
var renderTodos = function () {
  var todo9AM = JSON.parse(localStorage.getItem("9AM Todo"));
  var todo10AM = JSON.parse(localStorage.getItem("10AM Todo"));
  var todo11AM = JSON.parse(localStorage.getItem("11AM Todo"));
  var todo12PM = JSON.parse(localStorage.getItem("12PM Todo"));
  var todo1PM = JSON.parse(localStorage.getItem("1PM Todo"));
  var todo2PM = JSON.parse(localStorage.getItem("2PM Todo"));
  var todo3PM = JSON.parse(localStorage.getItem("3PM Todo"));
  var todo4PM = JSON.parse(localStorage.getItem("4PM Todo"));
  var todo5PM = JSON.parse(localStorage.getItem("5PM Todo"));
  todo1.value = todo9AM;
  todo2.value = todo10AM;
  todo3.value = todo11AM;
  todo4.value = todo12PM;
  todo5.value = todo1PM;
  todo6.value = todo2PM;
  todo7.value = todo3PM;
  todo8.value = todo4PM;
  todo9.value = todo5PM;
}

//Adding an event trigger to each button to save the to do's value to local storage
saveBtn1.addEventListener("click", storedTodo1);
saveBtn2.addEventListener("click", storedTodo2);
saveBtn3.addEventListener("click", storedTodo3);
saveBtn4.addEventListener("click", storedTodo4);
saveBtn5.addEventListener("click", storedTodo5);
saveBtn6.addEventListener("click", storedTodo6);
saveBtn7.addEventListener("click", storedTodo7);
saveBtn8.addEventListener("click", storedTodo8);
saveBtn9.addEventListener("click", storedTodo9);

//Calling a function to display the to do's local storage valuest
renderTodos ();