let form = document.getElementById("addForm")
let itemlist = document.getElementById('items')
// form submit event
form.addEventListener('submit', addItem)
//delete event
itemlist.addEventListener('click', removeitem);

// add items
function addItem(e){
    e.preventDefault();

// get input value
let newitem = document.getElementById('item');
//console.log(newitem.value)


// create new li element
let li = document.createElement("li")
li.className = "list-group-item"
//add text node with input value
li.appendChild(document.createTextNode(newitem.value));

// create edit button
let edit = document.createElement('button')
edit.className = "btn btn-success btn-sm float-right edit"
edit.appendChild(document.createTextNode('edit'))
li.appendChild(edit)

// create delete button
let btn = document.createElement('button')
btn.className = "btn btn-danger btn-sm float-right delete"
btn.appendChild(document.createTextNode('X'))
li.appendChild(btn)

// append li to itemlist
itemlist.appendChild(li)
}

function removeitem(e){
if(e.target.classList.contains('delete')){
    if(confirm('are you sure')){
        let li = e.target.parentElement;
        itemlist.removeChild(li);
    }
}
}

