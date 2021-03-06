var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for (var i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var innerButtons= this.innerHTML;
      makeSound(innerButtons);
      buttonAnimation(innerButtons);
  });
}
document.addEventListener("keypress",function(ev){
  makeSound(ev.key);
  buttonAnimation(ev.key)
})
function makeSound(key){
  switch (key) {
    case "w":
        var tom1= new Audio("tom-1.mp3");
        tom1.play();
      break;
    case "a":
        var tom2= new Audio("tom-2.mp3");
        tom2.play();
      break;
    case "s":
        var tom2= new Audio("tom-3.mp3");
        tom2.play();
      break;
    case "d":
        var tom2= new Audio("tom-4.mp3");
        tom2.play();
      break;
    case "j":
        var tom2= new Audio("crash.mp3");
        tom2.play();
      break;
    case "k":
        var tom2= new Audio("kick-bass.mp3");
        tom2.play();
      break;
    case "l":
        var tom2= new Audio("snare.mp3");
        tom2.play();
      break;
    default:
      console.log(innerButtons);
  }
}
function buttonAnimation(currentkey){
  var activebutton=document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
  // setTimeout(funtion(){
  //   activebutton.classList.remove("pressed");
  // }, 100);
}
