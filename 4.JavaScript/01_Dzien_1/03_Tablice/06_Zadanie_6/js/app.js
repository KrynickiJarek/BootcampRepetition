function getEvenAverage(array) {
    const filteredArray = array.filter(function (el) {
        return el % 2 === 0;
    })
    if (filteredArray.length === 0) {
        return null;
    } else {
        const sum = filteredArray.reduce((a, b) => (a + b));
        return sum / filteredArray.length;
    }
}


console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAverage([1, 1, 1, 1]));
console.log(getEvenAverage([2, 8, 3, 7, 4]));