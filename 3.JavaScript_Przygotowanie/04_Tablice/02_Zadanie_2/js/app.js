const array =[];
const evenArray =[];

for (let i=0; i<10; i++){
    array.push(Math.floor(Math.random()*60+1));
}
console.log(array);

for (let i=0; i<array.length; i++){
    if (array[i]%2==0){
        evenArray.push(array[i]);
    } else {
        evenArray.push(array[i]+1);
            }
}
console.log(evenArray);
