document.addEventListener("DOMContentLoaded", function () {

    const tbody = document.querySelector("tbody");
    const form = document.querySelector("form");
    const team1 = document.querySelector("#team1");
    const points1 = document.querySelector("#points1");
    const team2 = document.querySelector("#team2");
    const points2 = document.querySelector("#points2");
    const btn = document.querySelector(".btn");

    form.addEventListener("submit", e => {
        e.preventDefault();
        const newTr = document.createElement("tr");
        newTr.innerHTML = `<td>${team1.value}</td>
                            <td>${team2.value}</td>
                            <td>${points1.value} - ${points2.value}</td>`
        console.log(team1.value === "", team2.value === "", points1.value === "", points2.value === "");
        if (team1.value === "" || team2.value === "" || points1.value === "" || points2.value === "") {
            alert("Wypełnij wszystkie pola");
        } else {
            if (team1.value === team2.value) {
                alert("Wypełnij poprawnie drużyny")
            } else if (points1.value < 0 || points2.value < 0) {
                alert("Wypełnij poprawnie wyniki")
            } else {
                tbody.append(newTr);
                form.reset();
            }
        }


    });


});