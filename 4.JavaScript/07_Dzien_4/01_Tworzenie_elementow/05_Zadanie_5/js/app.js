document.addEventListener("DOMContentLoaded", function () {


    const remove = document.getElementById("remove")
    const list = document.getElementById("list")
    const lis = document.querySelectorAll("li");

    remove.addEventListener("click", e => {

        for (let li of lis){
            li.remove()
        }
    })


});

