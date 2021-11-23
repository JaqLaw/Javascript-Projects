document.addEventListener("click", myfunction);

function myfunction() {
    document.getElementById("surprise").innerHTML = "<h1>Boo!</h1>";
    document.body.style.backgroundColor = '#CC8899';
}