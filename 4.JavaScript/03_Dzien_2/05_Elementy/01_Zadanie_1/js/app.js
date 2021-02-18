const links = document.querySelector(".links").querySelectorAll("li");

function getDataInfo(elements) {
    const newArr = [];
    for (let el of elements) {
            newArr.push(el.dataset);
    }
    return newArr
}

console.log(getDataInfo(links));