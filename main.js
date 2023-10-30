var myHeading = document.querySelector("h1");


document.querySelector("#好耶").onclick = function () {
   
    const music = new Audio("../src/sound/haoyay.mp3");
    music.volume= document.getElementById("volume#好耶").value/50;
    music.play();
};
document.querySelector("#挖啊災").onclick = function () {

    const music = new Audio("../src/sound/挖啊災.mp3");
    music.volume=document.getElementById("volume#挖啊災").value/50;
    music.play();
};
document.querySelector("#不可以當壞孩子唷").onclick = function () {
   
    const music = new Audio("../src/sound/不可以當壞孩子唷.mp3");
    music.volume=document.getElementById("volume#不可以當壞孩子唷").value/50;
    music.play();
};
document.querySelector("#太史公喵").onclick = function () {
   
    const music = new Audio("../src/sound/太史公喵.mp3");
    music.volume=document.getElementById("volume#太史公喵").value/50;
    music.play();
};
document.querySelector("#不坦率的寶寶").onclick = function () {
   
    const music = new Audio("../src/sound/不坦率的寶寶.mp3");
    music.volume=document.getElementById("volume#不坦率的寶寶").value/50;
    music.play();
};
document.querySelector("#你們不要為了我吵架").onclick = function () {
   
    const music = new Audio("../src/sound/你們不要為了我吵架!.mp3");
    music.volume=document.getElementById("volume#你們不要為了我吵架").value/50;
    music.play();
};
document.querySelector("#叫你睡覺起床啦").onclick = function () {
   
    const music = new Audio("../src/sound/叫你睡覺？起床啦！.mp3");
    music.volume=document.getElementById("volume#叫你睡覺起床啦").value/50;
    music.play();
};
document.querySelector("#我才沒有醉咧").onclick = function () {
   
    const music = new Audio("../src/sound/我才沒有醉咧.mp3");
    music.volume=document.getElementById("volume#我才沒有醉咧").value/50;
    music.play();
};