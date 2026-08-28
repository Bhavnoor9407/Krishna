const noBtn = document.querySelector(".no-btn");
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#closeBtn");
const mainPage = document.querySelector("#mainPage");
const yesBtn = document.querySelector(".yes-btn");
const yesPopup = document.querySelector("#yespopup");
const yesCloseBtn = document.querySelector("#yesCloseBtn");
const finalPage = document.querySelector("#finalPage");


noBtn.onclick = function() {
    popup.style.display = "flex";
};

closeBtn.onclick = function() {
    popup.style.display = "none";
};


yesBtn.onclick = function() {
    yesPopup.style.display = "flex";
};

yesCloseBtn.onclick = function() {
    yesPopup.style.display = "none";
    mainPage.style.display = "none";
    finalPage.style.display = "flex";
};  
const homeBtn = document.querySelector("#homeBtn");

homeBtn.onclick = function() {
    window.location.href = "index.html";
};
