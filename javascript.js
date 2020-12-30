function Calendar(){

const myDate = new Date();

//gets the default value of the date attributes using the in-built JS functions and stores them on variables.
var dayOfWeek = myDate.getDay()
var day = myDate.getDate();
var month = myDate.getMonth();
var year = myDate.getFullYear();
var hour = myDate.getHours();
var minute = myDate.getMinutes();
var second = myDate.getSeconds();

//Names the Days of the week.
if(dayOfWeek==0){
  dayOfWeek="Sunday";
}
if(dayOfWeek==1){
  dayOfWeek="Monday";
}
if(dayOfWeek==2){
  dayOfWeek="Tuesday";
}
if(dayOfWeek==3){
  dayOfWeek="Wednesday";
}
if(dayOfWeek==4){
  dayOfWeek="Thursday";
}
if(dayOfWeek==5){
  dayOfWeek="Friday";
}
if(dayOfWeek==6){
  dayOfWeek="Saturday";
}

//Names all the month of the year.
if(month==0){
  month="January";
}
if(month==1){
  month="February";
}
if(month==2){
  month="March";
}
if(month==3){
  month="April";
}
if(month==4){
  month="May";
}
if(month==5){
  month="June";
}
if(month==6){
  month="July";
}
if(month ==7){
  month ="August";
}
if(month ==8){
  month ="September";
}
if(month ==9){
  month ="October";
}
if(month ==10){
  month ="November";
}
if(month ==11){
  month ="December";
}

//Makes the time in double digits
if(hour <10){
  hour="0"+hour;
}
if(minute < 10){
  minute ="0" + minute;
}
if(second <10){
  second = "0"+ second;
}

//Determines AM and PM.
if(hour < 12){
  text ="AM";
}
if(hour >12){
  text = "PM";
  hour= hour-12;
  if(hour <10){
    hour="0"+hour;
  }
}


//Makes all the required changes in the HTML file.
document.getElementById('dayOfWeek').innerHTML = dayOfWeek +", ";
document.getElementById('day').innerHTML = day;
document.getElementById('month').innerHTML = month +" ";
document.getElementById('year').innerHTML = year;
document.getElementById('hour').innerHTML = hour + ' :';
document.getElementById('minute').innerHTML = minute +" :";
document.getElementById('seconds').innerHTML = second;
document.getElementById('text').innerHTML = text;
}
setInterval(Calendar, 1000);
