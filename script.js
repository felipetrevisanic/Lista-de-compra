const addItem = document.getElementById('addItem');
const btnAdd = document.getElementById('btnAdd');
const trash = document.getElementById('trash');
const cancel = document.getElementById('cancel');
const alert = document.querySelector('.alert');
const list = document.querySelector('.list')

const itens = []

function addList(item) {
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.type = 'checkbox';
        let p = document.createElement('p');
        p.textContent = item;
        let img = document.createElement('img');
        img.src = 'assets/trash.svg';
        img.classList.add('trash');
        img.alt = 'Ícone de lixo';

        li.appendChild(input);
        li.appendChild(p);
        li.appendChild(img);
        list.appendChild(li);
}


btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if(addItem.value){
        addList(addItem.value.trim());
        addItem.value = "" ;
    }
})

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('trash')) {
        const li = e.target.closest('li');
        if (li) {
            li.remove();
            alert.classList.remove('esconder')
            alert.classList.add('aparecer')

            setTimeout(() => {
                alert.classList.remove('aparecer')
                alert.classList.add('esconder')

            },5000)
                }
            }
});

cancel.addEventListener('click',(e) => {
    alert.classList.remove('aparecer')
    alert.classList.add('esconder')
    
})