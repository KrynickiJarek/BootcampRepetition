const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");

console.log(home);
console.log(ban);


for (let el of children){
    console.log(el.tagName);
}
for (let el of someBlocks){
    console.log(el.tagName);
}
for (let el of (listElements)){
    console.log(el.tagName);
}


