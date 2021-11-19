function full_sentence() {          //declaring function
    var part1 = "I like the before";    //parts of sentence
    var part2 = " during,";
    var part3 = " and after.";
    var whole = part1.concat(part2, part3); //concatenate
    document.getElementById("concat").innerHTML = whole; //display result
}

function slice_sentence() {         //declaring function
    var whole ="I like the before, during, and after."  //whole sentence
    var sliced = whole.slice(0,7);          //slice sentence 
    document.getElementById("slice").innerHTML = sliced;    //display slice
}

function make_string() {        //declaring function
    var X = 5;              //number variable
    var string = X.toString();      //changing number to string
    document.getElementById("tostring").innerHTML = string; //displaying string
}

function to_precision() {       //declaring function
    var X = 5.456789;           //decimal number
    var shorter = X.toPrecision(4);     //changing precision
    document.getElementById("toprecision").innerHTML = shorter; //displaying shorter decimal
}