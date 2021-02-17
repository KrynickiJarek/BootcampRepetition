function print2DArray(arr){
    for (let i = 0; i<arr.length; i++){
        for (let j = 0; j<arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}

print2DArray([
    [1, 2, 3, 4],
    ["Ala", "Adam", "Kasia"],
    [true, false],
    [1,2,1,2]
]);