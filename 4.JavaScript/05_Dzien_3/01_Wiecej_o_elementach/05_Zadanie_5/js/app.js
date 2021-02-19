document.addEventListener("DOMContentLoaded", function () {

    const lis = document.querySelectorAll(".exercise li");

    for (let i = 0; i < lis.length; i++) {

        lis[i].dataset.id = i+1;
    }
})
;