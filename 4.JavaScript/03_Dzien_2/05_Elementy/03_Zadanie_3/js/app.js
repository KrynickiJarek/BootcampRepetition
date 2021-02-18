const blocks = document.querySelectorAll(".block");


for (let el of blocks){
    console.log(el.innerText);
    el.innerText="Nowa wartość diva o klasie blocks"
    console.log(el.innerText);
}