function distFromAverage(arr) {
    const sum = arr.reduce(function (x, y) {
        return (x + y);
    });
    return arr.map(function (e, i, a) {
        return Math.abs(e - (sum / arr.length));
    });
}


// const array = [1, 2, 3, 4, 5, 6, 7];
const array = [1, 1, 1, 1, 1, 1];
// const array = [2,8,3,7];
console.log(distFromAverage(array));