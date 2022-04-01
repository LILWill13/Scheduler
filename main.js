//as soon as site loads the day of the week and month will show
window.addEventListener('load', time)
// updates the time every second
var time = setInterval(currentDay,1000);
// sets the text on in the header to the date
function currentDay(){
    var day = $('#currentDay')
    day.text(moment().format('dddd, MMMM Do hh mm ss'))
    color()
    return day
}

function color(){
    var hourText1 = $('#hour1').children('p').text();
    var hourText2 = $('#hour2').children('p').text();
    var hourText3 = $('#hour3').children('p').text();
    var hourText4 = $('#hour4').children('p').text();
    var hourText5 = $('#hour5').children('p').text();
    var hourText6 = $('#hour6').children('p').text();
    var hourText7 = $('#hour7').children('p').text();
    var hourText8 = $('#hour8').children('p').text();
    var hourText9 = $('#hour9').children('p').text();

    var hour1 = $('#hour1').children('li')
    var hour2 = $('#hour2').children('li')
    var hour3 = $('#hour3').children('li')
    var hour4 = $('#hour4').children('li')
    var hour5 = $('#hour5').children('li')
    var hour6 = $('#hour6').children('li')
    var hour7 = $('#hour7').children('li')
    var hour8 = $('#hour8').children('li')
    var hour9 = $('#hour9').children('li')

    var hour = [hour1,hour2,hour3,hour4,hour5,hour6,hour7,hour8,hour1,hour9]

    var hourText = [hourText1,hourText2,hourText3,hourText4,hourText5,hourText6,hourText7,hourText8,hourText9]

    var hourNow = moment().format('ha')

    for( i=0; i < hourText.length; i++){
        if (hourNow == hourText[i]) {
        hour[i].addClass('green')
        } else {
            hour[i].addClass('gray')
        }
    }
}