document.addEventListener("DOMContentLoaded", function () {

    const btnAdd = document.getElementById("add");
    const list = document.getElementById("menu");
    let i = 0;

    btnAdd.addEventListener("click", e => {
        const li = document.createElement("li");
        i++;
        li.classList.add("list-group-item")
        li.innerText = `Element ${i + 1} - w chwili dodania było ${i} elementów`
        list.appendChild(li);
        console.log("done");
    })


});