document.addEventListener("DOMContentLoaded", function () {

    const invoice = document.querySelector("#invoice");
    const invoiceData = document.querySelector("#invoiceData");

    if (!invoice.checked) {
        invoiceData.classList.add("d-none");
    } else {
        invoiceData.classList.remove("d-none");
    }

    invoice.addEventListener("input", e => {
        if (!invoice.checked) {
            invoiceData.classList.add("d-none");
        } else {
            invoiceData.classList.remove("d-none");
        }
    });

});