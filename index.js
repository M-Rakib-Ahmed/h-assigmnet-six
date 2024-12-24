const todoInput = document.querySelector('#todo-input');
const addBtn = document.querySelector('#adds-btn');
const todoList = document.querySelector('#todo-list');


const addTodo = ()=>{
  const todoText = todoInput.value.trim();
  if(todoText === ""){
    alert('Please enter a task!');
    return;
  }



const li = document.createElement('li');
li.className = 'flex justify-between items-center bg-white p-2 rounded-md shadow-md';

li.innerHTML = `
<div class=" flex-1">
<span>${todoText}</span>
<input type="text" class="hidden border p-1 rounded w-full"/>
</div>

<div class="flex gap-2">
<button class="done bg-green-600 text-white px-2 rounded-md hover:bg-green-500">✔️</button>

<button class="edit bg-yellow-500">✏️</button>
<button class="delete bg-red-600 text-white px-2 rounded-md hover:bg-red-600">🗑️</button>
</div>
`;

const span = li.querySelector('span');
const editInput = li.querySelector('input');


li.querySelector('.done').addEventListener('click', ()=>{
  li.classList.toggle('line-through')
});


li.querySelector('.edit').addEventListener('click', ()=>{
  editInput.classList.toggle('hidden');
  span.classList.toggle('hidden');
  editInput.value = span.innerText;
  editInput.focus();
});


editInput.addEventListener('keypress', (e)=>{
  if(e.key === 'Enter'){
    span.innerText = editInput.value.trim() || span.innerText;
    editInput.innerHTML = ""
  }
});


li.querySelector('.delete').addEventListener('click', ()=>{
  li.remove()
});

todoList.appendChild(li);
todoInput.value = ''

}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') addTodo()
})