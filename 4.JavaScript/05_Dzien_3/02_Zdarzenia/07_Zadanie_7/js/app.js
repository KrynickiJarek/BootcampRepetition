document.addEventListener("DOMContentLoaded", function () {

    const box = document.querySelector("#box");
    const globalX = document.getElementById("globalX")
    const globalY = document.getElementById("globalY")
    const localX = document.getElementById("localX")
    const localY = document.getElementById("localY")

    box.addEventListener("mousemove", e => {
        globalX.innerText = e.clientX;
        globalY.innerText = e.clientY;
        localX.innerText = e.offsetX;
        localY.innerText = e.offsetY;

    })

});