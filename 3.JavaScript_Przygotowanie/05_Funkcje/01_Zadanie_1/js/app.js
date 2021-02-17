const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = 0;

function arrSum(array) {
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

console.log(arrSum(arr));

