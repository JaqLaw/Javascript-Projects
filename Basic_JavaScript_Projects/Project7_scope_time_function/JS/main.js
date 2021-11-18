var X = 10;

function Add_numbers_1() {
    var Y = 20;
    document.write(Y + X + "<br>");
}

function Add_numbers_2() {
    document.write(Y + 5);
    console.log(Y);
}

Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("output").innerHTML = "How are you today?";
    }
}

function get_Month() {
    if (new Date().getMonth() == 0) {
        document.getElementById("newyear").innerHTML = "Happy New Year!";
    }
        else {
            document.getElementById("newyear").innerHTML = "It's not January.";
        }
}

function Time_Function() {
    var Time =  new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        console.log(Time);
        Reply = "It's morning time.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It's the afternoon.";
    }
    else {
        Reply = "It's evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}