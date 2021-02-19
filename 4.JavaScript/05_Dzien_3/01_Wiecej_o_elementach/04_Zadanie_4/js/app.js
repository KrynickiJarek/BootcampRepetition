document.addEventListener("DOMContentLoaded", function() {
    const ulExercise = document.querySelector(".exercise ul");
    ulExercise.classList.add("menu");
    console.log(ulExercise.classList);

    const lis = document.querySelectorAll(".exercise li");
    for (let el of lis){
        el.classList.add("menuElement");
        el.classList.remove("error")
        console.log(el.classList);

    }
});