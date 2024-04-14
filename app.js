// =========== Assignment 6 Part 3 ==============

// 1. Write a program that displays current date and time in  your browser.


var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ]
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var now = new Date();
var date = month[now.getMonth()] + " " + days[now.getDay()]

var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var year = now.getFullYear()
var time = now.getHours()+ ":" + now.getMinutes() + ":" + now.getSeconds()
var datetime = date + " "  + year + " " + time + " " + "GMT"+"+"+ "0500" + " " + "(PKT)";
document.write(datetime)


// 2. Write a program that alerts the current month in words.  For example December. 

var now = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var month = months[now.getMonth()]
document.write(month)


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show  Sun. 

var now = new Date();
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = days[now.getDay()]
document.write(`Today is ${day}`)


// 4. Write a program that displays a message “It’s Fun day” if  its Saturday or Sunday today.

var now = new Date();
var dayOfWeek = now.getDay();
if (dayOfWeek === 6 || dayOfWeek === 0) {
    alert("It's Fun day!");
} else {
    alert("It's work day");
}
document.write(dayOfWeek)


// 5. Write a program that shows the message “First fifteen  days of the month” if the date is less than 16th of the month  else shows “Last days of the month”. 

var now = new Date();
var dayOfMonth = now.getDate();
if (dayOfMonth < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}
document.write(dayOfMonth)

// 7. Write a program that tests whether it's before noon and  alert “Its AM” else “its PM”.

var now = new Date();
var hour = now.getHours();
if (hour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}
document.write(hour)

