//1 
let myBody = document.getElementsByTagName('body')[0];
console.log(myBody);

//2
let firstElementBody = myBody.firstElementChild
console.log(firstElementBody);

//3
let lastElementBody = myBody.lastElementChild;
console.log(lastElementBody);

//4
let myDiv = document.getElementsByTagName('div')[0];
let exo4 = myDiv.children;
console.log(exo4);

//5
let firstLi = document.getElementsByTagName('li')[0];
let suivant = firstLi.nextElementSibling;
console.log(suivant);

//6
let precedent = suivant.previousElementSibling;
console.log(precedent);