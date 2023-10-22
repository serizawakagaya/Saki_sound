var myHeading = document.querySelector("h1");


/*var button1 = */
document.querySelector("#好耶").onclick = function () {
    const music = new Audio('../src/sound/haoyay.mp3');
    music.volume=0.4;
    music.play();
    myHeading.textContent = "SAKI!";
};
document.querySelector("#挖啊災").onclick = function () {
    const music = new Audio('../src/sound/挖啊災.mp3');
    music.volume=0.2;
    music.play();
    myHeading.textContent = "SAKI!?";
};