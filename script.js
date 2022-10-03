var myVar = 782;
let testVar = "Hello World!";

let heading = document.getElementsByTagName('h1');
console.log(heading);

let para = document.getElementById('paragraph-1');
console.log('Paragraph:', para);

let div = document.getElementsByClassName('container');
console.log("division:", div);

let heading2 = document.querySelectorAll('.head-2')
console.log(heading2);

let heading3 = document.querySelector('.container-1 .head-2');
console.log(heading3);