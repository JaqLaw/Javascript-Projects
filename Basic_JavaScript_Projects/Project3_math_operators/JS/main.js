function addition_Function() {
    var addition = 3 + 3;
    document.getElementById("Addition").innerHTML = "3 + 3 = " + addition;
}

function subtraction_Function() {
    var subtraction = 8 - 4;
    document.getElementById("Subtraction").innerHTML = "8 - 4 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 4 * 4;
    document.getElementById("Multiplication").innerHTML = "4 x 4 = " + multiplication;
}

function modulus_Function() {
    var modulus = 9 % 4;
    document.getElementById("Modulus").innerHTML = "The remainder of 9 / 4 = " + modulus;
}

function increment_Function() {
    var X = 8;
    X++;
    document.getElementById("Increment").innerHTML = "If you increment 8 you get " + X;
}

function decrement_Function() {
    var X = 8;
    X--
    document.getElementById("Decrement").innerHTML = "If you decrement 8 you get " + X;
}

function random_Function() {
    var random = Math.random() * 100;
    document.getElementById("Random").innerHTML = "Here's a random number: " + random;
}