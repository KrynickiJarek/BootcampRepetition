let x = prompt("Podaj liczbę całkowitą od 1 do 10");
let counter = 1;

function countHello(whenStop)
{
    const myInterval = setInterval(function () {
        console.log("Hello " + counter);
        counter++;
        if (counter > whenStop) {
            clearInterval(myInterval)
        }
    }, 200)
}

countHello(x);
