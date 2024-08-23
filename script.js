document.getElementById('add-item-button').addEventListener('click', function() {
    const itemName = document.getElementById('item-name').value;

    if (itemName.trim() !== "") {
        addItem(itemName);
        document.getElementById('item-name').value = '';
    }
});

function addItem(itemName) {
    const itemList = document.getElementById('item-list');

    const li = document.createElement('li');
    const itemSpan = document.createElement('span');
    itemSpan.textContent = itemName;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.addEventListener('click', function() {
        editItem(itemSpan);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        itemList.removeChild(li);
    });

    li.appendChild(itemSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    itemList.appendChild(li);
}

function editItem(itemSpan) {
    const newItemName = prompt("Edit item name:", itemSpan.textContent);

    if (newItemName !== null && newItemName.trim() !== "") {
        itemSpan.textContent = newItemName;
    }
}

// Example of a Read operation: Just loading some initial items
function loadInitialItems() {
    const items = ["Item 1", "Item 2", "Item 3"];
    items.forEach(item => addItem(item));
}

window.onload = loadInitialItems;
