document.addEventListener("DOMContentLoaded", function() {

    const btnAdd = document.getElementById("add")
    const tableBody = document.querySelector("tbody")
    const orderId = document.getElementById("orderId")
    const item = document.getElementById("item")
    const quantity = document.getElementById("quantity")

    btnAdd.addEventListener("click", e=>{
        const record = document.createElement("tr");
        record.innerHTML= `<td>${orderId.value}</td><td>${item.value}</td><td>${quantity.value}</td>`
        tableBody.appendChild(record)

    })


});