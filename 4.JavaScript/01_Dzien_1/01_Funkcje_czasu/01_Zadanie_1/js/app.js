const myInterval = setInterval(function (){
    console.log("Wygenerowano z setInterwal");
}, 500)

const myTimeout = setTimeout(function(){
    console.log("JavaScript Rules");
    clearInterval(myInterval)
}, 5000)