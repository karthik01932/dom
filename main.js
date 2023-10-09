var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e){
    e.preventDefault();

    // get input value
    var newitem = document.getElementById('item').value;

    var discription = document.getElementById('item1').value;
    // create new li element
    var li = document.createElement('li');
    
    // add class
    li.className = 'list-group-item';

    
    li.appendChild(document.createTextNode(`${item.value && item1.value}`));
    // create del button element
    var deletebtn = document.createElement('button');

    // add class to delete button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deletebtn.appendChild(document.createTextNode('x'))
    // append button to li
    li.appendChild(deletebtn);
    // append li to list
    itemList.appendChild(li);
}

 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
} 

// filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get list
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

}
