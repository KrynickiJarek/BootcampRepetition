function addArrays(arr1, arr2) {
    const arr3 = [];
    for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
        arr3.push(arr1[i] + arr2[i])
    }
    if (arr1.length > arr2.length) {
        for (let i = arr2.length; i < arr1.length; i++) {
            arr3.push(arr1[i])
            return arr3;
        }
    } else if (arr2.length > arr1.length) {
        for (let i = arr1.length; i < arr2.length; i++) {
            arr3.push(arr2[i])
            return arr3;
        }
    } else {
        return arr3;
    }

}

console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]));
console.log(addArrays([8, 3, 22], [1, 3, 2]));
console.log(addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]));


