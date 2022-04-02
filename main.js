//as soon as site loads the day of the week and month will show
window.addEventListener('load', time)
// updates the time every second
var time = setInterval(currentDay,1000);
// sets the text on in the header to the date
function currentDay(){
    var day = $('#currentDay')
    day.text(moment().format('dddd, MMMM Do'))
    // calls the color function so that it updates every minute

    return day
}



var hourNow = moment().format('h')
console.log(hourNow)
// 9am
if(hourNow === 9){
    $('#0').addClass('present');
} else if (hourNow < 9){
    $('#0').addClass('past');
} else {
    $('#0').addClass('future');
}

// 10am
if(hourNow === 10){
    $('#1').addClass('present');
} else if (hourNow < 10){
    $('#1').addClass('past');
} else {
    $('#1').addClass('future');
}

// 11am
if(hourNow === 11){
    $('#2').addClass('present');
} else if (hourNow < 11){
    $('#2').addClass('past');
} else {
    $('#2').addClass('future');
}

// 12pm
if(hourNow === 12){
    $('#3').addClass('present');
} else if (hourNow < 12){
    $('#3').addClass('past');
} else {
    $('#3').addClass('future');
}

// 1pm
if(hourNow === 1){
    $('#4').addClass('present');
} else if (hourNow < 1){
    $('#4').addClass('past');
} else {
    $('#4').addClass('future');
}

// 2pm
if(hourNow === 2){
    $('#5').addClass('present');
} else if (hourNow < 2){
    $('#5').addClass('past');
} else {
    $('#5').addClass('future');
}

// 3pm
if(hourNow === 3){
    $('#6').addClass('present');
} else if (hourNow < 3){
    $('#6').addClass('past');
} else {
    $('#6').addClass('future');
}

// 4pm
if(hourNow === 4){
    $('#7').addClass('present');
} else if (hourNow < 4){
    $('#7').addClass('past');
} else {
    $('#7').addClass('future');
}

// 5pm
if(hourNow === 5){
    $('#8').addClass('present');
} else if (hourNow < 5){
    $('#8').addClass('past');
} else {
    $('#8').addClass('future');
}

// 9am save button and local storage
$('#btn0').click(function () {
    var input9Am = document.getElementById('0').value;
    localStorage.setItem('9am',JSON.stringify(input9Am));
})

var outPut9am = JSON.parse(localStorage.getItem('9am'));
document.getElementById('0').value = outPut9am;

// 10am save button and local storage
$('#btn1').click(function () {
    var input10Am = document.getElementById('1').value;
    localStorage.setItem('10am',JSON.stringify(input10Am));
})

var outPut10am = JSON.parse(localStorage.getItem('10am'));
document.getElementById('1').value = outPut10am;

// 11am save button and local storage
$('#btn2').click(function () {
    var input11Am = document.getElementById('2').value;
    localStorage.setItem('11am',JSON.stringify(input11Am));
})

var outPut11am = JSON.parse(localStorage.getItem('11am'));
document.getElementById('2').value = outPut11am;

// 12pm save button and local storage
$('#btn3').click(function () {
    var input12Pm = document.getElementById('3').value;
    localStorage.setItem('12pm',JSON.stringify(input12Pm));
})

var outPut12Pm = JSON.parse(localStorage.getItem('12pm'));
document.getElementById('3').value = outPut12Pm;

// 1pm save button and local storage
$('#btn4').click(function () {
    var input1Pm = document.getElementById('4').value;
    localStorage.setItem('1pm',JSON.stringify(input1Pm));
})

var outPut1Pm = JSON.parse(localStorage.getItem('1pm'));
document.getElementById('4').value = outPut1Pm;

// 2pm save button and local storage
$('#btn5').click(function () {
    var input2Pm = document.getElementById('5').value;
    localStorage.setItem('2pm',JSON.stringify(input2Pm));
})

var outPut2Pm = JSON.parse(localStorage.getItem('2pm'));
document.getElementById('5').value = outPut2Pm;

// 3pm save button and local storage
$('#btn6').click(function () {
    var input3Pm = document.getElementById('6').value;
    localStorage.setItem('3pm',JSON.stringify(input3Pm));
})

var outPut3Pm = JSON.parse(localStorage.getItem('3pm'));
document.getElementById('6').value = outPut3Pm;

// 4pm save button and local storage
$('#btn7').click(function () {
    var input4Pm = document.getElementById('7').value;
    localStorage.setItem('4pm',JSON.stringify(input4Pm));
})

var outPut4Pm = JSON.parse(localStorage.getItem('4pm'));
document.getElementById('7').value = outPut4Pm;

// 5pm save button and local storage
$('#btn8').click(function () {
    var input5Pm = document.getElementById('8').value;
    localStorage.setItem('5pm',JSON.stringify(input5Pm));
})

var outPut5Pm = JSON.parse(localStorage.getItem('5pm'));
document.getElementById('8').value = outPut5Pm;
