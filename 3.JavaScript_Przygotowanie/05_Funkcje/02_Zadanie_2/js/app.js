const anonim = function(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b>a && b>c){
        return b;
    } else {
        return c;
    }
}

console.log(anonim(100, 130, 15));



// let a = prompt("daj a");
// let b = prompt("daj b");
// let c = prompt("daj c");
//
//
// const maxNumber2 = function(a, b ,c) {
//     return (Math.max(a, b, c));
// }
//
// console.log(maxNumber2 (a, b, c));