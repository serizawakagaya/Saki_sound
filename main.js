var myHeading = document.querySelector("h1");
myHeading.textContent = "SAKI!";

/*var button1 = */
document.querySelector("button").onclick = function () {
    const music = new Audio('\src\sound\haoyay.mp3');
    music.play();
    myHeading.textContent = "SAKI!??!!";
};
/*document.querySelector("html").onclick = function () {
    myHeading.textContent = "SAKI!??!!";
    const music = new Audio('haoyay.mp3');
    music.play();
};*/
/*button1.onclick = function () {
    myHeading.textContent = "SAKI!??";
    const music = new Audio('haoyay.mp3');
    music.play();
};*/
