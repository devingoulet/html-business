// var today = new Date () ;
// var hourNow = today.getHours () ;
// var greeting;

// if (hourNow > 18) {
//     greeting = 'Good evening!';
// } else if (hourNow > 12) {
//     greeting = 'Good afternoon';
// }else if (hourNow > 0) { 
//     greeting = 'Good morning!'
// } else { 
//     greeting ='welcome!'
// }

// document.write('<h3>' + greeting + '</h3>');


var question = prompt('Do you think you are healthy?');

console.log(question);

var topHat;

if (question === 'yes') { // ===  strictly equal to     !== not strictly equal to  true or false
    topHat = 'Great, continue that path with us.';
} else if (question === 'no'){
    topHat = 'Do you want to be?'
} else {
    topHat = 'Try again please'
}

document.write('<h4>' + topHat + '</h4>');
for (var i = 0; i < 5; i++) {
    document.write(i)
}
