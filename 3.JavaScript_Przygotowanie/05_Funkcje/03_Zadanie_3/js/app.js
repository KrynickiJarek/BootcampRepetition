function calculateTip(amount, rating) {
    let tip = 0;
    switch (rating) {
        case "Bardzo dobra obsługa":
            tip = amount * 0.25;
            break;
        case "Dobra obsługa":
            tip = amount * 0.20;
            break;
        case "Średnia obsługa":
            tip = amount * 0.15;
            break;
        case "Zła obsługa":
            tip = 0;
            break;
        default:
            console.log("niepoprawne dane");
    }
    return(tip+" zł");
}

let x = parseFloat(prompt("Ile wynosił rachunek?"));
let y = prompt("Jaka była obsługa?")

console.log(calculateTip(x, y));