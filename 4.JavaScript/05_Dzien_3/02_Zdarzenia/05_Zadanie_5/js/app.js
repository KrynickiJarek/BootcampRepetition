document.addEventListener("DOMContentLoaded", function () {

    const section = document.querySelectorAll("section");

    for (let el of section) {
        let i = 0;
        const button = el.querySelector(".btn");
        const counter = el.querySelector(".counter");

        button.addEventListener("click", e => {
            i++;
            counter.innerText = i;
        });

    }


});
