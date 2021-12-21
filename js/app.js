// EXAMINE THE DOCUMENT OBJECT //

// // Console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document);

// Give Error //
let items = document.getElementById('items');
// console.log(items[3]);
// items[2].textContent = '123';
// item[1].style.fontWeight = 'bold';
// item[1].style.backgroundColor = 'yellow';

// GIVES ERROR
// items.style.backgroundColor = '#f4f4f4';

// // GETELEMENTBYID //
let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// // items.style.backgroundColor ='#f4f4f4';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
    
// }

// QUERYSELECTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// let titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgrounColor = '#f4f4f4';
//     even[i].style.backgrounColor = '#ccc';
// }

// TRAVERSING THE DOM //
// let itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 4';

// lastChild
// console.log(itemList.lastChild);
// firstElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
// let newDiv = document.createElement('div');

// Add class
// newDiv.className = 'hello';

// Add id
// newDiv.id = 'hello1';

// Add attr
// newDiv.setAttribute('title', 'Hello Div');

// Creat text node
// let newDivText = document.createTextNode('Hello World');

// Add text to div
// newDiv.appendChild(newDivText);

// console.log(newDiv);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = "30px";
// container.insertBefore(newDiv, h1);

let button = document.getElementById('button');
let box  = document.getElementById('box');

const buttonClick = (e) => {
    // console.log('Button clicked');
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    // console.log(e);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // let output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3';

    // console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
};

const runEvent = e => {
    // console.log('EVENT TYPE: '+e.type);

    // // output.innerHTML = `<h3> MouseX: ${e.offsetX} </h3><h3> MouseY: ${e.offsetY}`;

    // box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

};




//cant use an undeclared name function name so bring it after declaring the function //
// button.addEventListener("click", buttonClick);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

box.addEventListener("mouseenter", runEvent);