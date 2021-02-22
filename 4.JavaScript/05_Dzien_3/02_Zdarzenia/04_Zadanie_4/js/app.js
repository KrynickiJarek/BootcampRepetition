document.addEventListener("DOMContentLoaded", function () {

    const btns = document.querySelectorAll(".btn-outline-primary");
    const counter = document.querySelector(".counter");
    let n = 0;

    for (let el of btns) {
        el.addEventListener("click", e => {
            n++;
            counter.innerText= n;
        })
    }

});