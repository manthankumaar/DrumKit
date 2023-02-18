// Detecting Button press

var element = document.querySelectorAll(".drum");

for (var i=0; i < element.length; i++){
    var button = element[i];
    button.addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
    
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break; 
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break; 
        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break; 
        
    default: console.log(buttonInnerHTML);
    
    }
}

function buttonAnimation(currentKey) {
   var activeKey = document.querySelector("." + currentKey);
   activeKey.classList.toggle("pressed");   

   setTimeout(function (){
    activeKey.classList.toggle("pressed"); 
   }, 100)
}

