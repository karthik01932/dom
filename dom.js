//EXAMINE THE DOCUMENT OBJECT 
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.title);
// document.title = 123;
// console.log(document.title);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));
// var headertitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent = 'hello';
// headertitle.innerText = 'goodBye';
// headertitle.innerHTML = '<h5>hello</h5>';
// header.style.borderBottom = 'solid 3px #000';
// var subtitle = document.getElementById('sub-title');
// subtitle.style.color = 'green';
// subtitle.style.fontWeight =  'bold';


// GET ELEMENT BY CLASS NAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.backgroundColor = 'green';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';
// items[0].style.fontWeight = 'bold';

//GET ELEMENT BY TAG NAME
// var li = document.getElementsByTagName('li');
//  console.log(li);
//  console.log(li[1]);
//  li[1].textContent = 'hello 2';
//  li[1].style.fontWeight = 'bold';
//  li[1].style.background = 'yellow';

//  for(var i= 0;i<li.length; i++){
//     li[i].style.background = 'yellow';
//  }


// QUERY SELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px black';

// var input = document.querySelector('input');
// input.value = 'hello world';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color = 'green';


// QUERY SELECTOR ALL

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.background= 'green';
//     // even[i].style.background= 'orange';

// }
// var seconditem = document.querySelectorAll('.list-group-item:nth-child(2)');
// seconditem.style.color = 'green';



// TRAVERSING THE DOM

var itemlist =  document.querySelector('#items');
// parentnode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.background = 'yellow';
// console.log(itemlist.parentNode.parentNode);


// parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.background = 'orange';
// console.log(itemlist.parentElement.parentElement);

// childNodes
// console.log(items.childNodes); 

// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.background = 'blue';

// // first child
// console.log(itemlist.firstChild);
// // firstelementchild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'hello world';

// last child
// console.log(itemlist.lastChild);
// lastelementchild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'hello world';

// nextsibling
// console.log(itemlist.nextSibling);
// nextelementsibling
// console.log(itemlist.nextElementSibling);

// previousSibling
// console.log(itemlist.previousSibling);
// previousSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'green';

// createElement

// create a div
var newdiv = document.createElement('div');
// add class
newdiv.className = 'hello';
// add id
newdiv.id = 'hello1';
// add attribute
newdiv.setAttribute('title','hello div');
// create text node
var newdivtext = document.createTextNode('HELLO world');
// add text to div
newdiv.appendChild(newdivtext);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newdiv);
newdiv.style.fontSize = '30px';
container.insertBefore(newdiv, h1);

var secdiv = document.createElement('div');
secdiv.className = 'world';
secdiv.id = 'world1';
secdiv.setAttribute('title', 'world div');
var secdivtext = document.createTextNode('HELLO world');
secdiv.appendChild(secdivtext);
var secContainer = document.querySelector('div .list-group');
var h2 = document.querySelector('ul li');
console.log(secdiv);
secdiv.style.fontsize = '30px';
secContainer.insertBefore(secdiv,h2);