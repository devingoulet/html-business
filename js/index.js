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
    topHat = confirm('Great, continue that path with us.');
} else if (question === 'no'){
    topHat = prompt('Do you want to be?');
} else {
    topHat = prompt('Try again please');
}

//document.write('<h4>' + topHat + '</h4>');

function howManyBottles() {
    var bottles = prompt("How many bottles do you want to purchase?");
    //var numBottles = 0;
    console.log(typeof(bottles));
   
    while (bottles === '0' || bottles > 5){
        confirm('hey you do not have the right number!');
        bottles = prompt("Number of bottles you want. (Answer with a number between 0 and 5.)");
    }

    //we have the number of bottles purchased by the user in the variable bottles
    // we weant to create a for loop for the number of bottles
    // we want to generate the image of the bottle for the number of times chosen by the bottles
    for (var counter = 0; counter < bottles; counter++) {
       
         document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bouteille.jpg/800px-Bouteille.jpg" width: "100" height: "100">');
    }


}



howManyBottles();