
//Detectar qual butão foi apertado!//


var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);


  });


}

//descobrir qual tecla foi teclada//

document.addEventListener("keydown", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);

});


function makeSound(key) {
  switch (key) {
    case "w":
      var crashSound = new Audio("sounds/crash.mp3");
      crashSound.play();
      break;
    case "a":
      var snareSound = new Audio("sounds/snare.mp3");
      snareSound.play();
      break;
    case "s":
      var tom1Sound = new Audio("sounds/tom-1.mp3");
      tom1Sound.play();

      break;
    case "d":
      var tom2Sound = new Audio("sounds/tom-2.mp3");
      tom2Sound.play();

      break;
    case "j":
      var tom3Sound = new Audio("sounds/tom-3.mp3");
      tom3Sound.play();

      break;
    case "k":
      var kickSound = new Audio("sounds/kick-bass.mp3");
      kickSound.play();

      break;
    case "l":
      var tom4Sound = new Audio("sounds/tom-4.mp3");
      tom4Sound.play();
      break;

    default:
      console.log(buttonClicked);

  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
