function blackjack_Function() {             //declaring a function
    var cardtotal, bustornot;               //declaring variables
    cardtotal = document.getElementById("total").value;     //initializing variable from input data
    bustornot = (cardtotal > 21) ? "You busted!":"You didn't bust";  //ternary operation
    document.getElementById("outcome").innerHTML = bustornot;   //returning result
}

function Stringedinstrument(Size, Numberofstrings, Color) {   //Object constructor
    this.Stringedinstrument_Size = Size;
    this.Stringedinstrument_Numberofstrings = Numberofstrings;
    this.Stringedinstrument_Color = Color;
}

var Ukulele = new Stringedinstrument("small", 4, "brown");   //adding instances of the class
var Guitar = new Stringedinstrument("medium", 6, "black");
var Cello = new Stringedinstrument("large", 4, "brown");

function myFunction() {   //declaring a function that returns information about an object
    document.getElementById("Instrument").innerHTML = "A ukulele is a " + Ukulele.Stringedinstrument_Size + " instrument with " + Ukulele.Stringedinstrument_Numberofstrings + " strings and is " + Ukulele.Stringedinstrument_Color + "."
}



function nestedFunction() {   //declaring a function
    document.getElementById("Nested_Function").innerHTML = addtwo();   //returning a value from a nested function
    function addtwo() {   //the nested function
        var start = 4;
        start += 1;
        return start;
    }
}