function Call_Loop() {      //while loop counting to 10
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function String_Length() {      //get string length of a word
    var X = "spectacular";
    var length = X.length;
    document.getElementById("length").innerHTML = length;
}

var Instruments = ["Guitar", "Bass", "Drums", "Keyboard", "Ukulele", "Recorder"];       //array
var Content = "";
var Y;

function for_Loop() {           //for loop for displaying array items
    for (Y = 0; Y < Instruments.length; Y++) {
        if (Y == 2) { continue; }       //skip array index 2
        else if (Y == 4) { break; }     //stop function at index 4
        Content += Instruments[Y] += "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function array_Function() {         //function building array and displaying values
    var kids_array = []
    kids_array[0] = "Avey";
    kids_array[1] = "Leo";
    kids_array[2] = "Mira";
    kids_array[3] = "Frankie";
    document.getElementById("Array").innerHTML = kids_array[0] + " has friends named " + kids_array[1] + ", " + kids_array[2] + ", and " + kids_array[3] + ".";
}


function constant_function() {          //function with constant
    const cars = {type : "camry", color : "black", year : 2006};
    cars.year = 2000;
    cars.price = "$6000";
    var X = 7;
    {   let X = 5;                      //showing that let is local to the block
    }
    document.getElementById("Constant").innerHTML = cars.year + " " + cars.price + " " + X;
}

function quick_function() {             //nested function using the return statement
    function return_function() {
        var J = 12;
        J++;
        return J;
    }
    document.getElementById("quick").innerHTML = return_function();
    
}

function pet_function() {           //function with a method in an object
    let pet = {
        type:"hamster",
        color:"brown ",
        demeanor:"friendly ",
        description:function() {
            return "Your pet is a " + this.demeanor + this.color + this.type + ".";
        }
    }
    document.getElementById("pet").innerHTML = pet.description();           //calling the method
}