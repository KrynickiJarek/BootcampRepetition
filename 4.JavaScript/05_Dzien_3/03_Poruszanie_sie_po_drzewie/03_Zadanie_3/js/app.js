document.addEventListener("DOMContentLoaded", function () {

    const btns = document.querySelectorAll(".btn");

    for (let btn of btns) {
        btn.addEventListener("click", e => {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            btn.parentElement.style.backgroundColor = randomColor;
        })
    }

});

