const Calculator = function () {
    this.array = [];
}

Calculator.prototype.add = function (num1, num2) {
    this.array.push(`added ${num1} to ${num2} got ${num1 + num2}`)
    return num1 + num2;
}


Calculator.prototype.multiply = function (num1, num2) {
    this.array.push(`multiplied ${num1} with ${num2} got ${num1 * num2}`)
    return num1 * num2;
}


Calculator.prototype.subtract = function (num1, num2) {
    this.array.push(`subtracted ${num1} from ${num2} got ${num2 - num1}`)
    return num2 - num1;
}


Calculator.prototype.divide = function (num1, num2) {
    this.array.push(`divided ${num1} by ${num2} got ${num1 / num2}`)
    return num1 / num2;
}


Calculator.prototype.printOperations = function (){
for (let el of this.array) {
    console.log(el);
}
}

Calculator.prototype.clearOperations = function (){
    this.array=[];
}


const myCalculator = new Calculator();
myCalculator.add(6,3);
myCalculator.multiply(6,3);
myCalculator.subtract(6,3);
myCalculator.divide(6,3);
myCalculator.printOperations();
myCalculator.clearOperations();
myCalculator.printOperations();