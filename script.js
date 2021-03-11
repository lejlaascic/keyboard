
function playSound(e){
     // console.log(e.keyCode);
     var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
     //   console.log(audio);

       var key= document.querySelector(`.key[data-key ='${e.keyCode}']`)
      //  console.log(key);

       key.classList.add('playing')

      if(!audio) return //Ako pritisnemo dugme koje nema audio izaci ce
       audio.currentTime=0;//Vraca zvuk na pocetak 
       audio.play()

      var keys=document.querySelectorAll('.key')
      for(var i=0;i<keys.length;i++){
          keys[i].addEventListener('transitionend',remuveTransition)
      }
}

function remuveTransition(e){
   if(e.propertyName !=='transform') 
   this.classList.remove('playing')
   //console.log(e.propertyName);
}

window.addEventListener('keydown',playSound);
