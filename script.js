const formNode = document.createElement('form');

const labelNode1 = document.createElement('label');
labelNode1.innerText = 'Product Code';

const labelNode2 = document.createElement('label');
labelNode2.innerText = 'Name';

const labelNode3 = document.createElement('label');
labelNode3.innerText = 'Quantity';

const inputNode1 = document.createElement('input');
inputNode1.setAttribute('class', 'input');
inputNode1.setAttribute('id', 'input1');
inputNode1.setAttribute('type', 'text');
inputNode1.setAttribute('name', 'productCode');

const inputNode2 = document.createElement('input');

inputNode2.setAttribute('class', 'input');
inputNode2.setAttribute('id', 'input2');
inputNode2.setAttribute('type', 'text');
inputNode2.setAttribute('name', 'name');

const inputNode3 = document.createElement('input');
inputNode3.setAttribute('class', 'input');
inputNode3.setAttribute('id', 'input3');
inputNode3.setAttribute('type', 'text');
inputNode3.setAttribute('name', 'amount');

const searchInput = document.createElement('input');
searchInput.setAttribute('id', 'searchInput');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search by Product ID');

const editInput = document.createElement('input');
editInput.setAttribute('id', 'editInput');
editInput.setAttribute('type', 'text');
editInput.setAttribute('placeholder', 'Enter ID to Edit');

const deleteInput = document.createElement('input');
deleteInput.setAttribute('id', 'deleteInput');
deleteInput.setAttribute('type', 'text');
deleteInput.setAttribute('placeholder', 'Enter ID to Delete');

const submitNode = document.createElement('button');
submitNode.setAttribute('id', 'btn');

const deleteTheKeys = document.createElement('button');

const nextlineNode1 = document.createElement('br');
const nextlineNode2 = document.createElement('br');

const tablenode = document.createElement('table');
const theadnode = document.createElement('thead');
const trNode = document.createElement('tr');
const thNode1 = document.createElement('th');
const thNode2 = document.createElement('th');
const thNode3 = document.createElement('th');

thNode1.innerText = 'Product Code';
thNode2.innerText = 'Name';
thNode3.innerText = 'Quantity';

tablenode.style.border = 'solid 1px purple';
thNode1.style.border = 'solid 1px purple';
thNode2.style.border = 'solid 1px purple';
thNode3.style.border = 'solid 1px purple';

deleteTheKeys.addEventListener('click', () => {
  localStorage.removeItem('cartList');
  renderTable();
});

submitNode.addEventListener('click', () => {
  const inp1 = document.querySelector('#input1');
  const inp2 = document.querySelector('#input2');
  const inp3 = document.querySelector('#input3');

  if (
    inp1.value.trim() === '' ||
    inp2.value.trim() === '' ||
    inp3.value.trim() === ''
  ) {
    alert('no text');
    return;
  }

  let cartList = JSON.parse(localStorage.getItem('cartList')) || [];
  let ids = cartList.map((item) => item.id);

  if (ids.includes(inp1.value)) {
    alert('This ID already exists!');
    return;
  }

  let shoppingCart = JSON.parse(localStorage.getItem('cartList')) || [];
  shoppingCart.push({ id: inp1.value, name: inp2.value, quantity: inp3.value });

  localStorage.setItem('cartList', JSON.stringify(shoppingCart));

  inp1.value = '';
  inp2.value = '';
  inp3.value = '';

  renderTable();
});

editInput.addEventListener('input', () => {
  const editId = editInput.value.trim();
  if (editId === '') return;

  let cartList = JSON.parse(localStorage.getItem('cartList')) || [];
  let productToEdit = cartList.find((item) => item.id === editId);

  if (productToEdit) {
    inputNode1.value = productToEdit.id;
    inputNode2.value = productToEdit.name;
    inputNode3.value = productToEdit.quantity;
  } else {
    alert('Product with that ID not found.');
  }
});

submitNode.addEventListener('click', () => {
  const inp1 = document.querySelector('#input1');
  const inp2 = document.querySelector('#input2');
  const inp3 = document.querySelector('#input3');

  if (
    inp1.value.trim() === '' ||
    inp2.value.trim() === '' ||
    inp3.value.trim() === ''
  ) {
    return;
  }

  let cartList = JSON.parse(localStorage.getItem('cartList')) || [];
  let productToEditIndex = cartList.findIndex((item) => item.id === inp1.value);

  if (productToEditIndex === -1) {
    alert('Product with that ID not found.');
    return;
  }

  cartList[productToEditIndex] = {
    id: inp1.value,
    name: inp2.value,
    quantity: inp3.value,
  };

  localStorage.setItem('cartList', JSON.stringify(cartList));
  renderTable();

  inp1.value = '';
  inp2.value = '';
  inp3.value = '';
});

deleteInput.addEventListener('input', () => {
  const deleteId = deleteInput.value.trim();
  if (deleteId === '') return;

  let cartList = JSON.parse(localStorage.getItem('cartList')) || [];
  let updatedCartList = cartList.filter((item) => item.id !== deleteId);

  localStorage.setItem('cartList', JSON.stringify(updatedCartList));

  renderTable();
});

function renderTable() {
  const tableBody = tablenode.querySelector('tbody');
  if (tableBody) tableBody.remove();

  const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
  const newBody = document.createElement('tbody');

  cartList.forEach((item) => {
    const row = newBody.insertRow();
    const cell1 = row.insertCell(0);
    cell1.innerText = item.id;

    const cell2 = row.insertCell(1);
    cell2.innerText = item.name;

    const cell3 = row.insertCell(2);
    cell3.innerText = item.quantity;
  });

  tablenode.appendChild(newBody);
}

function renderSearchResults(searchTerm) {
  const searchResultsTable = document.createElement('table');
  const searchResultsThead = document.createElement('thead');
  const searchResultsTr = document.createElement('tr');
  const searchResultsTh1 = document.createElement('th');
  const searchResultsTh2 = document.createElement('th');
  const searchResultsTh3 = document.createElement('th');

  searchResultsTh1.innerText = 'Product Code';
  searchResultsTh2.innerText = 'Name';
  searchResultsTh3.innerText = 'Quantity';

  searchResultsTable.style.border = 'solid 1px blue';
  searchResultsTh1.style.border = 'solid 1px blue';
  searchResultsTh2.style.border = 'solid 1px blue';
  searchResultsTh3.style.border = 'solid 1px blue';

  searchResultsTr.append(searchResultsTh1, searchResultsTh2, searchResultsTh3);
  searchResultsThead.appendChild(searchResultsTr);
  searchResultsTable.appendChild(searchResultsThead);
  mainContainer.appendChild(searchResultsTable);

  const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
  const filteredResults = cartList.filter((item) =>
    item.id.includes(searchTerm)
  );

  const searchResultsTbody = document.createElement('tbody');
  filteredResults.forEach((item) => {
    const row = searchResultsTbody.insertRow();
    row.insertCell(0).innerText = item.id;
    row.insertCell(1).innerText = item.name;
    row.insertCell(2).innerText = item.quantity;
  });

  searchResultsTable.appendChild(searchResultsTbody);
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    renderSearchResults(searchTerm);
  }
});

labelNode1.append(inputNode1);
labelNode2.append(inputNode2);
labelNode3.append(inputNode3);

mainContainer.append(
  labelNode1,
  nextlineNode1,
  labelNode2,
  nextlineNode1,
  labelNode3,
  submitNode,
  deleteTheKeys,
  nextlineNode2,
  searchInput,
  editInput,
  deleteInput
);

trNode.append(thNode1, thNode2, thNode3);
theadnode.appendChild(trNode);
tablenode.appendChild(theadnode);
mainContainer.appendChild(tablenode);

window.onload = function () {
  renderTable();
};
