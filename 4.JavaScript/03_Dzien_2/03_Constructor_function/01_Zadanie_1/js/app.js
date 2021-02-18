function Basket(name, price) {
    this.products = [];
    this.sum = 0;
    this.addProduct = function (name, price) {
        const ob = {
            name: name,
            price: price
        }
        this.products.push(ob);
        this.sum += price;
    }
    this.showBasket = function () {
        for (let i = 0; i < this.products.length; i++) {
            console.log(`Produkt ${this.products[i].name} w cenie ${this.products[i].price} zł`);
        }
        console.log(`Wartość całego koszyka to ${this.sum} zł`);
    }
}


const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();

const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun", 50);
bruceBasket.addProduct("tofu", 20);
bruceBasket.showBasket();