document.addEventListener("DOMContentLoaded", function () {

    const select = document.querySelector("select");
    const windows = document.querySelector("[alt=Windows]")
    const mac = document.querySelector("[alt=MacOS]")
    const ubuntu = document.querySelector("[alt=Ubuntu]")


    mac.classList.add("d-none")
    ubuntu.classList.add("d-none")

    select.addEventListener("change", e=>{
        e.preventDefault()

        if (select.value === "Windows") {
            windows.classList.remove("d-none")
            mac.classList.add("d-none")
            ubuntu.classList.add("d-none")

        } else if (select.value === "MacOS") {
            windows.classList.add("d-none")
            mac.classList.remove("d-none")
            ubuntu.classList.add("d-none")

        } else {
            windows.classList.add("d-none")
            mac.classList.add("d-none")
            ubuntu.classList.remove("d-none")
        }

    })



});