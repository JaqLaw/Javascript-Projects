function my_Dictionary() { //declaring a function
    var Animal = {         //declaring an object
        Species: "Chicken",//adding a kvp
        Color: "Brown",    //adding a kvp
        Breed: "Silkie",   //adding a kvp
        Age: 2,            //adding a kvp
        Sound: "Cluck!",   //adding a kvp
    };
    delete Animal.Sound;   //deleting a kvp
    document.getElementById("Dictionary").innerHTML = Animal.Sound;  //displaying a value
}