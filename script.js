console.log('hello');

const formNode = document.createElement('form');

const lableNode1 = document.createElement('label');
const lableNode2 = document.createElement('label');
const lableNode3 = document.createElement('label');

const inputNode1 = document.createElement('input');
const inputNode2 = document.createElement('input');
const inputNode3 = document.createElement('input');

const submitNode = document.createElement('button');

const nextlineNode1 = document.createElement('br');
const nextlineNode2 = document.createElement('br');

lableNode1.innerText = 'producto kodas';
lableNode2.innerText = 'pavadinimas';
lableNode3.innerText = 'keikis';

inputNode1.setAttribute('class', 'input');
inputNode2.setAttribute('class', 'input');
inputNode3.setAttribute('class', 'input');

inputNode1.setAttribute('id', 'input1');
inputNode2.setAttribute('id', 'input2');
inputNode3.setAttribute('id', 'input3');

inputNode1.setAttribute('type', 'text');
inputNode2.setAttribute('type', 'text');
inputNode3.setAttribute('type', 'text');

inputNode1.setAttribute('name', 'productCode');
inputNode2.setAttribute('name', 'name');
inputNode3.setAttribute('name', 'amount');

submitNode.setAttribute('id', 'btn');

let i = 1;

submitNode.addEventListener('click', () => {
  i++;
 

  const el = document.querySelector('.input');

  if (el !== null && el.value.length == 0) {
    console.log('empty');
  } else {
    console.log('full');
  }

  // if (el !== null && el.value.length == 0) {
  //     console.log('empty')
  // }else{
  //     console.log('full')
  // }
  const tableNode = document.createElement('table');
  const rowNode = document.createElement('tr');
  const colNode = document.createElement('th');

  tableNode.setAttribute('id', 'table')
//   rowNode.append(colNode);
//   tableNode.append(rowNode);
//   mainContainer.append(tableNode);



const id = document.querySelector('#input1');
const name = document.querySelector('#input2');
const amount = document.querySelector('#input3');

function appendRow() {
    const table = document.getElementById("table");
    // create a newRow
     newRow = document.createElement("tr");
     c1 = document.createElement("td");
   
    c1.appendChild(id);
    c1.appendChild(name);
    c1.appendChild(amount);
    // newRow <- c1;
    newRow.appendChild(c1);   /// <-- this was missing

    tableNode.appendChild(newRow);
})

lableNode1.append(inputNode1);
lableNode2.append(inputNode2);
lableNode3.append(inputNode3);

mainContainer.append(
  lableNode1,
  nextlineNode1,
  lableNode2,
  nextlineNode1,
  lableNode3,
  submitNode
)
