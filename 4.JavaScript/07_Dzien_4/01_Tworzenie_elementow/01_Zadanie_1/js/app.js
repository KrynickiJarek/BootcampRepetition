document.addEventListener("DOMContentLoaded", function () {

    const btns = document.querySelectorAll(".btn");

    for (let btn of btns) {
        btn.addEventListener("click", e => {
            console.log(btn.parentElement.parentElement);
            btn.parentElement.parentElement.remove();
        })
    }
});

