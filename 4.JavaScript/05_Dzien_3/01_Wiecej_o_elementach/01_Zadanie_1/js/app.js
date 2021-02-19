document.addEventListener("DOMContentLoaded", function () {

    const exercise = document.querySelectorAll(".exercise li");
    for (let i = 0; i < exercise.length; i++) {
        if (i%2===0){
            exercise[i].style.backgroundColor = "#9e9e9e";
        }
        if (i%3===0){
            exercise[i].style.textDecoration = "underline";
        }
   }
    exercise[4].classList.add("big");

});