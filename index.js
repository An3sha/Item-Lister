var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Delete event
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// Form submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e) {
    e.preventDefault(); // to prevent that normal form submittion doesn't happen

    // get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = "list-group-item";
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // Create delete btn element
    var deleteBtn = document.createElement('button');
    // Add class
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Filter event
filter.addEventListener('keyup', filterItem);

// Filter item
function filterItem(e) {
    // convert text to lower text
    var text = e.target.value.toLowerCase();
    // Get li
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });    
}