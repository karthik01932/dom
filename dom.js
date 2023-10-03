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

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color = 'green';


// QUERY SELECTOR ALL

var titles = document.querySelectorAll('.title');
console.log(titles);
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++){
    odd[i].style.background= 'green';
    // even[i].style.background= 'orange';

}
// var seconditem = document.querySelectorAll('.list-group-item:nth-child(2)');
// seconditem.style.color = 'green';

