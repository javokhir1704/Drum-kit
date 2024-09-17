// document.querySelector('a').addEventListener('click', clickedMessage);

// function clickedMessage() {
//   alert("Thanks for checking me out");
// }

var numberOfDrumButtons = document.querySelectorAll('.drum').length;
  /*
    The simplest way to add sound is through Javascript’s Audio() constructor. It takes an argument of a string that is either the local or remote file path. Declaring this as a variable allows you to then call the play() method which starts playing the current audio.

    let mySound = new Audio('my_audio_file.wav')
    mySound.play()
  */
  for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
      // the "this" keyword in JS is a reference to the object on which the current code is being executed. Its value is determined by how a function is called, and it provides a way to access the context in which the function is invoked.

      //When using "this" in an event listener, "this" will refer to the DOM element that fired the event.
      // this.style.color = 'blue';      
      console.log('The color of ' + this.textContent + " has been changed");

      var isTrue = this.textContent;

      if (isTrue === 'w') {
        var audio = new Audio('Sounds/tom-1.mp3');
        audio.play();
      } else if (isTrue === 'a') {
        var audio = new Audio('Sounds/tom-2.mp3');
        audio.play();
      } else if (isTrue === 's') {
        var audio = new Audio('Sounds/tom-3.mp3');
        audio.play();
      } else if (isTrue === 'd') {
        var audio = new Audio('Sounds/tom-4.mp3');
        audio.play();
      } else if (isTrue === 'j') {
        var audio = new Audio('Sounds/snare.mp3');
        audio.play();
      } else if (isTrue === 'k') {
        var audio = new Audio('Sounds/crash.mp3');
        audio.play();
      } else if (isTrue === 'l') {
        var audio = new Audio('Sounds/kick-bass.mp3');
        audio.play();
      }

      // let myAudio = document.querySelector('#audio');
      // myAudio.play();
    });

  }

 
  // var audio = new Audio('Sounds/crash.mp3');
  // audio.play();