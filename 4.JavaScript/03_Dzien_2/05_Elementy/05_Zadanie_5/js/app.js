document.addEventListener("DOMContentLoaded", function () {

    const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");

    function getTags(elements) {
        const arr = [];

        for (let el of elements) {
            arr.push(el.tagName)
        }

        return arr;
    }

    console.log(getTags(childElements));
});

