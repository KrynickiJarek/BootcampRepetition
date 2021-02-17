sayHello();

function sayHello() {
    console.log("Hello!");
}

sayHello();

sayHi(); //nie zadziała bo hosting dla wyrażeń funkcyjnych nie działa. Program przerwie działanie tutaj i nie
//zadziała też ostatnia linijka.

const sayHi = function () {
    console.log("Hi!");
}

sayHi();

