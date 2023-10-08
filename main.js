var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// add item
function addItem(e){
    e.preventDefault();

    // get input value
    var newitem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode('newItem'));
    
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