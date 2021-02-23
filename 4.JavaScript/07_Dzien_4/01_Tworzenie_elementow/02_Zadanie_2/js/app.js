document.addEventListener("DOMContentLoaded", function() {

    const btn = document.querySelector(".btn");

    btn.addEventListener("click", e=>{
        btn.parentElement.removeChild(btn);
        // btn.remove();
    })

});