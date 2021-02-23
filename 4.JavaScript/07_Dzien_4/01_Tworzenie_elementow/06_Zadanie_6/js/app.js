
document.addEventListener("DOMContentLoaded", function () {

    const list1 = document.querySelector("#list1");
    const list2 = document.querySelector("#list2");
    const aAll = document.querySelectorAll("a");

    for (let el of aAll) {
        el.addEventListener("click", e => {
            if (el.parentElement === list1) {
                list2.append(el);
            } else {
                list1.append(el);
            }
        });
    }


});