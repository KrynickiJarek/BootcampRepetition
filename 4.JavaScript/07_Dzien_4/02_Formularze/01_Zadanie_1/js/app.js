document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const pass1 = document.getElementById("pass1");
    const pass2 = document.getElementById("pass2");
    const agree = document.getElementById("agree");

    const error = document.getElementById("error-message")
    const success = document.getElementById("success-message")

    form.addEventListener("submit", e => {
        e.preventDefault();

        const errors = [];
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!reg.test(email.value)) {
            errors.push("Email jest nieprawidłowy")
        }

        if (name.value.length < 2) {
            errors.push("Twoje imię jest za krótkie")
        }

        if (surname.value.length < 2) {
            errors.push("Twoje nazwisko jest za krótkie")
        }

        if (!pass1.value || pass1.value !== pass2.value) {
            errors.push("Hasła nie są takie same lub puste")
        }

        if (!agree.checked) {
            errors.push("Musisz zaakceptować warunki")
        }

        if (errors.length) {
            error.classList.remove("d-none")
            for (let er of errors) {
                const p = document.createElement("p")
                p.innerText = er;
                error.appendChild(p);
            }

        } else {
            error.classList.add("d-none")
            success.classList.remove("d-none")
            success.innerText = "Formularz wysłany!"
            form.submit();

        }
    })

});