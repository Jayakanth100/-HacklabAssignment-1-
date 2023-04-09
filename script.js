
var reset = () => {
    let b = document.getElementById("red");
    b.classList.remove("active");
    b = document.getElementById("yellow");
    b.classList.remove("active");
    b = document.getElementById("green");
    b.classList.remove("active"); 
}
var clearTimeout1 = () => {
    var id = window.setTimeout(function() {}, 0);
    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }

}
var activate = (str) => {
    
    reset()
    let b = document.getElementById(str);
    b.classList.add("active");
}
var runRed = () => {
    activate("red")
    clearTimeout1()
    setTimeout(() => {runGreen()},20000)
}
var runGreen = () => {
    activate("green")
    clearTimeout1()
    setTimeout(() => {runYellow()},15000)
}
var runYellow = () => {
    activate("yellow")
    clearTimeout1()
    setTimeout(() => {runRed()},5000)
}

