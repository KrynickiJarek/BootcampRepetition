document.addEventListener("DOMContentLoaded", function () {

    // Element o klasie first -> jego pierwsze dziecko -> jego trzecie dziecko.

    const first = document.querySelector(".first");
    const firstFirstChild = first.firstElementChild;
    const firstLastChild = first.children[2];

    // Element o id second -> jego rodzic -> jego czwarte dziecko.

    const second = document.getElementById("second");
    const secondParent = second.parentElement;
    const secondFourthChild = second.children[3];

    // Element o atrybucie data-ex nastawionym na wartość third -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w dół).

    const dataEx3 = document.querySelector(`[data-ex="third"]`)
    const dataEx3Grandpa = dataEx3.parentElement.parentElement;
    const dataEx3LastChild = dataEx3.lastElementChild;
    const dataEx3MiddleChild = dataEx3.children[Math.floor(children.length / 2)];


    // Div o klasie forth -> jego rodzic -> jego pierwsze dziecko o tagu article -> jego drugie dziecko o tagu <p>.
    const forth = document.querySelector("div .forth");
    const forthFirstArticle = forth.querySelector("article")
    const forthSecondP = forth.querySelectorAll("p")[1];

});