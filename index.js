let peter = 123;
console.log(peter);
console.log(`heloo world ${peter}`);
//document.getElementById("px").textContent = peter;

// let a = 5;
// let b = 10;
// let area = a * b;
// console.log(area);
// document.getElementById("px").textContent = `hello world im AI ${peter}`;


let username 
document.getElementById("Mysubmit").onclick = function(){
    username = document.getElementById("Myusername").value;
    document.getElementById("h3").textContent = `hello bro ${username}`;
    console.log(username);

}
// let age = window.prompt("how old are you?");
// age = Number(age);
// age+=1;
// console.log(age, typeof age);

let pi = 3.1415;
let radius; 
let circumferent;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("number").value;
    radius = Number(radius);
    circumferent = 2 * pi * radius;
    document.getElementById("answer").textContent = circumferent + "cm";

}

let area;
let hight;
let width;
document.getElementById("submit2").onclick = function(){
    hight = document.getElementById("number1").value;
    width = document.getElementById("number2").value;
    area = hight * width;
    document.getElementById("answer1").textContent = area + "cm";
}
