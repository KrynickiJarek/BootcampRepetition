const calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function () {
        this.sum = this.a + this.b;
        return this.sum
    },
    multiply: function () {
        return this.a * this.b
    }
};

calculator.save(2, 3);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.multiply());
