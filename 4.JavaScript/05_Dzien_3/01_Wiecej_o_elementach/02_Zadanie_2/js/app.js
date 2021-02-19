document.addEventListener("DOMContentLoaded", function() {

    const chrome = document.querySelector(".chrome");
    const chromeLink = document.querySelector(".ex1 a");

    const edge = document.querySelector(".edge");
    const edgeLink = document.querySelector(".edge+a");

    const firefox = document.querySelector(".firefox");
    const firefoxLink = document.querySelector(".firefox+a");

    chrome.style.backgroundRepeat = "no-repeat";
    chromeLink.innerHTML = "Chrome";
    chromeLink.setAttribute("href", "www.chrome.pl");
    chrome.style.width = "100px";


    edge.style.backgroundImage = "url(img/edge.jpg)";
    edgeLink.setAttribute("href", "www.edge.pl");

    firefox.style.backgroundImage = "url(img/firefox.jpg)";
    firefox.style.backgroundRepeat = "no-repeat";

    firefoxLink.innerHTML = "Firefox";
    firefoxLink.setAttribute("href", "www.firefox.pl");





});