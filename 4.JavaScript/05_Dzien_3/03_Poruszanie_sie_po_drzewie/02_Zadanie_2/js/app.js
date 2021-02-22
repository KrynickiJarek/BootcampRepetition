document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll(".btn");
    for (let btn of buttons) {
        btn.addEventListener("click", e => {
            e.preventDefault();
            if (btn.previousElementSibling) {
                if (btn.previousElementSibling.classList.contains("box")) {
                    btn.previousElementSibling.classList.toggle("hidden");
                }
            }
        })
    }
});