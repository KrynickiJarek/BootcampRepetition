document.addEventListener("DOMContentLoaded", function () {

    const banner = document.querySelector(".ban");

    function getClassInfo(element) {
        const classArr = [];
        for (let el of element.classList) {
            classArr.push(el)
        }
        return classArr;
    }

    console.log(getClassInfo(banner));
});