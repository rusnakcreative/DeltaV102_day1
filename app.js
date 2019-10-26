function setup() {
    createCanvas(640, 480);
}

function draw() {

    stroke(0,0,0);
    strokeWeight(3);
    line(0,40,640,40);

    noStroke();
    fill(0,255,0);
    rect(310, 230, 20, 20);

    fill(255,0,0)
    circle(500,100,20)

}

function day1AM() {
    console.log("Hello World");
    var firstName = "Mike";
    var age = 34;
    var heightInches = 75;
    var feet = Math.floor(heightInches/12);
    var inches = heightInches % 12;
    age = age + 1;

    console.log(firstName + " is " + age + " years old.")
    console.log(firstName + " is " + feet + " foot " + inches + " inches tall.")
}

// To call the functoin: 
day1AM();

// This also makes a function
// var day1AM = function() {
//
// }