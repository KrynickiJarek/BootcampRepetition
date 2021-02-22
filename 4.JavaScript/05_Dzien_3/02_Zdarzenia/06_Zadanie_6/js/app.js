document.addEventListener("DOMContentLoaded", function () {

    const box = document.querySelectorAll(".box");

    for (let el of box) {
        el.addEventListener("click", e=>{
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            el.style.backgroundColor = randomColor;
        })
    }
});
