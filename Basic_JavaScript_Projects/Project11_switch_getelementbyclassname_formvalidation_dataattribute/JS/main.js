function animal_switch() {
    var A = document.getElementById("animal").value;
    var animal_output;
    var animal_string = " is a great animal!";
    switch(A) {
        case "Cow":
            animal_output = "Cow" + animal_string;
        break;
        case "Chicken":
            animal_output = "Chicken" + animal_string;
        break;
        case "Pig":
            animal_output = "Pig" + animal_string;
        break;
        case "Panda":
            animal_output = "Panda" + animal_string;
        break;
        case "Slow Loris":
            animal_output = "Slow Loris" + animal_string;
        break;
        default:
            animal_output = "Please enter an animal as written above.";
    }
    document.getElementById("output").innerHTML = animal_output;
}


function change_text() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");


var grd = ctx.createLinearGradient(0,0,280,0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20,20,460,210);

ctx.beginPath();
ctx.arc(250,125,40,0,3*Math.PI);
ctx.stroke();


function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    if (x == "" || y == "") {
        alert("Name must be filled out");
        return false;
    }
}


function fruitorveg_function(food) {
    var fruitorveg = food.getAttribute("data-fruitorveg");
    alert(food.innerHTML + " is a " + fruitorveg + ".");
}