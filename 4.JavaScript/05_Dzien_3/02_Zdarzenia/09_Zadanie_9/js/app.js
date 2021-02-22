document.addEventListener("DOMContentLoaded", function () {

    const width = document.getElementById("windowWidth")
    const height = document.getElementById("windowHeight")

    width.innerText = `${window.innerWidth} px`;
    height.innerText = `${window.innerHeight} px`;

    window.addEventListener("resize", e => {
        width.innerText = `${window.innerWidth} px`;
        height.innerText = `${window.innerHeight} px`;
    })


});