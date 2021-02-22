document.addEventListener("DOMContentLoaded", function () {

    const parents = document.querySelectorAll(".parent");



    for (let el of parents) {
        el.addEventListener("mouseover", function (){
            el.querySelector(".children").style.display = "block";


        })

        el.addEventListener("mouseout", function (){
            el.querySelector(".children").style.display = "";
        })
    }

});