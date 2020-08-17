const playSound = (path) => {
    let sound= new Audio();
     sound.preload = 'auto';
     sound.src = path;
     sound.play();
 };

let firstLetter=document.querySelector(".btn1")
firstLetter.addEventListener('click',function(){
   firstLetter.innerHTML="<p>'S'</p>";
   firstLetter.classList.add("btn");
   playSound("music/file1.mp3");
})
let secondLetter=document.querySelector(".btn2")
secondLetter.addEventListener('click',function(){
   secondLetter.innerHTML="<p>'C'</p>";
   secondLetter.classList.add("btn");
   playSound("music/file2.mp3");
})
let thirdLetter=document.querySelector(".btn3")
thirdLetter.addEventListener('click',function(){
   thirdLetter.innerHTML="<p>'O'</p>";
   thirdLetter.classList.add("btn");
   playSound("music/file3.mp3");
})
let fourLetter=document.querySelector(".btn4")
fourLetter.addEventListener('click',function(){
   fourLetter.innerHTML="<p>'R'</p>";
   fourLetter.classList.add("btn");
   playSound("music/file4.mp3");
})
let fiveLetter=document.querySelector(".btn5")
fiveLetter.addEventListener('click',function(){
   fiveLetter.innerHTML="<p>'P'</p>";
   fiveLetter.classList.add("btn");
   playSound("music/file5.mp3");
})

let sixLetter=document.querySelector(".btn6")
sixLetter.addEventListener('click',function(){
   sixLetter.innerHTML="<p>'I'</p>";
   sixLetter.classList.add("btn");
   playSound("music/file6.mp3");
})

let sevenLetter=document.querySelector(".btn7")
sevenLetter.addEventListener('click',function(){
   sevenLetter.innerHTML="<p>'O'</p>";
   sevenLetter.classList.add("btn");
   playSound("music/file7.mp3");
})
let eightLetter=document.querySelector(".btn8")
eightLetter.addEventListener('click',function(){
    eightLetter.innerHTML="<p>'N'</p>";
    eightLetter.classList.add("btn");
    playSound("music/file8.mp3");
})
let nineLetter=document.querySelector(".btn9")
nineLetter.addEventListener('click',function(){
   nineLetter.innerHTML="<p>'S'</p>";
   nineLetter.classList.add("btn");
   playSound("music/file9.mp3");
})
