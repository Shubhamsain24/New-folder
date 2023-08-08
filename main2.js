let form = document.getElementById("addForm")
let itemlist = document.getElementById('items')
let filter = document.getElementById('filter')
// form submit event
form.addEventListener('submit', addItem)
//delete event
itemlist.addEventListener('click', removeitem);
// filter items
filter.addEventListener('keyup' ,filteritem);
// add items
function addItem(e){
    e.preventDefault();

// get input value
let newitem = document.getElementById('item');
let newitem2 = document.getElementById('description');
//console.log(newitem.value)

// create new li element
let li = document.createElement("li")
li.className = "list-group-item"
//add text node with input value
li.appendChild(document.createTextNode(newitem.value));
li.appendChild(document.createTextNode(" "+newitem2.value));

// create delete button
let btn = document.createElement('button')
btn.className = "btn btn-danger btn-sm float-right delete"
btn.appendChild(document.createTextNode('X'))
li.appendChild(btn)

// create edit button
let edit = document.createElement('button')
edit.className = "btn btn-success btn-sm float-right mr-2 edit"
edit.appendChild(document.createTextNode('Edit'))
li.appendChild(edit)

// append li to itemlist
itemlist.appendChild(li)
}

// remove listelement
function removeitem(e){
if(e.target.classList.contains('delete')){
    if(confirm('are you sure')){
        let li = e.target.parentElement;
        itemlist.removeChild(li);
    }
}
}

// filter 
function filteritem(e){
    // convert to lowercase
    let text = e.target.value.toLowerCase();
    //get li's
    let items = itemlist.getElementsByTagName('li')
    // convert to an array
    Array.from(items).forEach(function(item){
        let itemname = item.firstChild.textContent;
        let itemname2 = item.childNodes[1].textContent;
        if(itemname.toLowerCase().indexOf(text) !=-1 || itemname2.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
    
}