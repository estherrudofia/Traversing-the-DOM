let itemList = document.querySelector('#items');
let form = document.getElementById('addForm');
let filter = document.getElementById('filter')


const addItem = (e) => {
    e.preventDefault();

    // Get Input value //
    let newItem = document.getElementById('item').value;

    // create new li element
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add class node with input value //
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    let deleteBtn = document.createElement('button');
    // Add classes to del element
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    // Append text node 
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list //
    itemList.appendChild(li);
};

// To remove Button //
const removeBtn = (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
};

// search filter
const filterItems = e => {
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get lis
    let items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(item => {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    });
};

// Event handler //
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeBtn);
filter.addEventListener('keyup', filterItems);



