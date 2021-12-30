const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

const clearInput = event => event.target.reset()

const addNewTodo = e => {
  e.preventDefault()

  const inputValue = event.target.add.value.trim()

  if (inputValue.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>`

  clearInput(e)
  }
}

const deleteTodo = e => {
  const clickedElement = e.target

  if(Array.from(clickedElement.classList).includes('delete')) 
    clickedElement.closest('li').remove()
}

const manageSearchedTodos = todos => {
  todos.forEach(({ todo, hidden }) => {
      todo.classList.add(hidden ? 'hidden' : 'd-flex')
      todo.classList.remove(hidden ? 'd-flex' : 'hidden')
    })
}

const searchTodos = e => {
  const inputValue = e.target.value.trim().toLowerCase()
  const todos = Array.from(todosContainer.children)

  const todoWithHiddenValue = todos
    .map(todo => ({
      todo,
      hidden: !todo.textContent.toLowerCase().includes(inputValue)
      }))

  manageSearchedTodos(todoWithHiddenValue)

}

formAddTodo.addEventListener('submit', addNewTodo)
inputSearchTodo.addEventListener('input', searchTodos)
todosContainer.addEventListener('click', deleteTodo)
