

document.addEventListener("DOMContentLoaded", function() {

    const listContainer = document.querySelectorAll(".listContainer");

    for (let el of listContainer) {
        el.addEventListener("mouseover", e=> {
            const ul = el.querySelector("ul");
            for (let elAll of ul.children) {
                elAll.style.backgroundColor = "green";
                elAll.style.transition = "0.5s";

            }
            ul.firstElementChild.style.backgroundColor = "blue";
            ul.lastElementChild.style.backgroundColor = "red";
        });

        el.addEventListener("mouseout", e=> {
            const ul = el.querySelector("ul");
            for (let elAll of ul.children) {
                elAll.style.backgroundColor = "white";
            }
        });
    }

});