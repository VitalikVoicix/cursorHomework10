const playSound = (path) => {
    let sound= new Audio();
     sound.preload = 'auto';
     sound.src = path;
     sound.play();
 };

function playMusic(e) {
   if(e.keyCode === 83) {
      playSound("music/file1.mp3")
   } else if(e.keyCode === 67) {
      playSound("music/file2.mp3")
   } else if(e.keyCode === 79) {
      playSound("music/file3.mp3")
   } else if(e.keyCode === 82) {
      playSound ("music/file4.mp3")
   } else if(e.keyCode === 80) {
      playSound("music/file5.mp3")
   } else if(e.keyCode === 73) {
      playSound("music/file6.mp3")
   }else if(e.keyCode === 78){
      playSound("music/file9.mp3")
   }
}
addEventListener("keyup", playMusic);


const butt = document.querySelectorAll('button');
    butt.forEach((item, i) => {
      item.addEventListener('click', () => {
      playSound(`music/file${i++}.mp3`)
      item.classList.add("btn");
      })
});
