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
var headertitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent = 'hello';
// headertitle.innerText = 'goodBye';
// headertitle.innerHTML = '<h5>hello</h5>';
header.style.borderBottom = 'solid 3px #000';
var subtitle = document.getElementById('sub-title');
subtitle.style.color = 'green';
subtitle.style.fontWeight =  'bold';


// GET ELEMENT BY CLASS NAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);