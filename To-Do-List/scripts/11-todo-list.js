const todolist = [{
  name: 'make dinner',
  dueDate: '2024-12-12'
}, {
  name: 'wash dishes',
  dueDate: '2024-12-22'
}];

renderTodoList();

function renderTodoList() {
  let todolistHTML = '';

  for (let i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate

    //Destuctruing: shoet cut of above 2 statements
    const { name, dueDate } = todoObject

    const html = `
      <div> ${name} </div>
      <div> ${dueDate}  </div>
 
       <button onclick="removeTodo(${i})
      " class="delete-todo-button" >Delete</button> 
    
       `; //generating the HTML
    todolistHTML += html;
  }


    document.querySelector('.js-todo-list')
    .innerHTML = todolistHTML;
}

function removeTodo(i) {
  todolist.splice(i, 1);
  renderTodoList();
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;


  todolist.push({
    // name:name,
    // dueDate: dueDate
    //shorthand property syntax of object if similar names:
    name,
    dueDate

  });


  inputElement.value = '';

  renderTodoList();
}