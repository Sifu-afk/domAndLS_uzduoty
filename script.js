console.log('hello')


const formNode = document.createElement('form')

const lableNode1 = document.createElement('label')
const lableNode2 = document.createElement('label')
const lableNode3 = document.createElement('label')
const inputNode1 = document.createElement('input')
const inputNode2 = document.createElement('input')
const inputNode3 = document.createElement('input')

const submitNode = document.createElement('button')


const nextlineNode1 = document.createElement('br')
const nextlineNode2 = document.createElement('br')

lableNode1.innerText = 'producto kodas'
lableNode2.innerText = 'pavadinimas'
lableNode3.innerText = 'keikis'

inputNode1.setAttribute('class', 'input')
inputNode2.setAttribute('class', 'input')
inputNode3.setAttribute('class', 'input')

inputNode1.setAttribute('type', 'text')
inputNode2.setAttribute('type', 'text')
inputNode3.setAttribute('type', 'text')

inputNode1.setAttribute('name', 'productCode')
inputNode2.setAttribute('name', 'name')
inputNode3.setAttribute('name', 'amount')

submitNode.addEventListener('click', () =>{
    const el = document.querySelector('.input')

    if (el !== null && el.value.length == 0) {
        console.log('empty')
    }else{
        console.log('full')
    }

    if (el !== null && el.value.length == 0) {
        console.log('empty')
    }else{
        console.log('full')
    }
});



lableNode1.append(inputNode1)
lableNode2.append(inputNode2)
lableNode3.append(inputNode3)

mainContainer.append(lableNode1, nextlineNode1, lableNode2, nextlineNode1, lableNode3, submitNode)
